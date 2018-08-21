$(document).ready(function() 
{
	$("#eventSave").click(function() 
	{
		var err = false;
		if($('#event-name').val().length === 0)
			$('#event-name').addClass('is-invalid'), err = true;

		if($('#event-desc').val().length === 0)
			$('#event-desc').addClass('is-invalid'), err = true;

		if(err)
			return;

		if(_eventChanging == null)
		{
			var start = moment(_startNewEvent).format('YYYY-MM-DD HH:mm:ss');
			var end = moment(_endNewEvent).format('YYYY-MM-DD HH:mm:ss');

			$.post( "//lumen.local/events", 
			{ 
				title: $("#event-name").val(),
				start: start,
				end: end,
				description: $("#event-desc").val(),
				color: $("#event-color").val()

			}).done(function(data) {
				data['_id'] = data['id'];
				$('#calendar').fullCalendar('renderEvent', data, true);
			});
		}
		else
		{
			var start = moment(_eventChanging.start).format('YYYY-MM-DD HH:mm:ss');
			var end = moment(_eventChanging.end).format('YYYY-MM-DD HH:mm:ss');

			$.post( '//lumen.local/events/update/'+_eventChanging._id, 
			{ 
				title: $("#event-name").val(),
				start: start,
				end: end,
				description: $("#event-desc").val(),
				color: $("#event-color").val()

			}).done(function(data) {
				_eventChanging.title = data['title'];
				_eventChanging.description = data['description'];
				_eventChanging.start = data['start'];
				_eventChanging.end = data['end'];
				_eventChanging.color = data['color'];

				$('#calendar').fullCalendar('updateEvent', _eventChanging, true);
				_eventChanging = null;
			});
		}

		$('#eventModal').modal('hide');
	});	

	$("#eventDelete").click(function() 
	{
		var id = _eventChanging._id;
		$.get('//lumen.local/events/delete/'+id, function(data) 
		{
			$('#calendar').fullCalendar('removeEvents', id);
		});

		_eventChanging = null;
		$('#eventModal').modal('hide');
	})						
});