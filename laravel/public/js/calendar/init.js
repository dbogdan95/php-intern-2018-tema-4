
var _startNewEvent, _endNewEvent, _eventChanging;


$(document).ready(function() 
{
	$.get('//lumen.local/events', function(data) 
	{
		data.forEach(function(data) 
		{
			data['_id'] = data['id'];
			$('#calendar').fullCalendar('renderEvent', data, true);
		});
	});

	$('#colorpicker').colorpicker();
});