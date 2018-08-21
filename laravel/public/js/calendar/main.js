$(document).ready(function() 
{
	$('#calendar').fullCalendar({
		header: 
		{
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		navLinks: true,
		selectable: true,
		selectHelper: true,
		editable: true,
		eventLimit: true,
		displayEventTime: false,
		eventTextColor: 'white',				
		select: function(start, end) 
		{
			_startNewEvent = start;
			_endNewEvent = end;
			_eventChanging = null;

			$("#eventTime").html("Time period: "+moment(start._d).format("dddd DD/MM/YYYY")+" - "+moment(end._d).format("dddd DD/MM/YYYY"));

			$('.modal-title').html('New event');
			$('#event-name').val("");
			$('#event-desc').val("");

			$('#event-name').removeClass('is-invalid');
			$('#event-desc').removeClass('is-invalid');

			$('#eventTime').show();
			$('#eventDelete').hide();
			$('#eventModal').modal('show');
			$('#calendar').fullCalendar('unselect');
		},
		eventClick: function(event, jsEvent, view) 
		{
			_eventChanging = event;

			$('.modal-title').html('Update event');
			$('#event-name').val(event.title);
			$('#event-desc').val(event.description);
			$('#colorpicker').colorpicker('setValue', event.color);

			$('#eventTime').hide();
			$('#eventDelete').show();
			$('#eventModal').modal('show');
			$('#calendar').fullCalendar('unselect');					
		},
		eventRender: function(event, el) 
		{
			el.popover({
				title: event.title,
				content: event.description,
				trigger: 'hover',
				placement: 'top',
				container: 'body'
			});
		},
		eventDrop: function(event, delta, revertFunc) 
		{
			var start = moment(event.start).format('YYYY-MM-DD HH:mm:ss');
			var end = moment(event.end).format('YYYY-MM-DD HH:mm:ss');

			$.post( '//lumen.local/events/update/'+event._id, 
			{ 
				title: event.title,
				start: start,
				end: end,
				description: event.description,
				color: event.color
			})
		}						
	});
});