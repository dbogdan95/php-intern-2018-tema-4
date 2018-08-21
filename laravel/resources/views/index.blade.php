
<!DOCTYPE html>
<html>
	<head>
		<meta charset='utf-8' />

		<link href='css/fullcalendar.min.css' rel='stylesheet' />
		<link href='css/fullcalendar.print.css' rel='stylesheet' media='print' />		

 		<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.5.3/css/bootstrap-colorpicker.css" rel="stylesheet">

		<script src='//momentjs.com/downloads/moment.js'></script>
		<script src='js/jquery.min.js'></script>
		<script src='js/fullcalendar.min.js'></script>

		<link rel="stylesheet" href="css/bootstrap.min.css">
		
		<script src="js/popper.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.5.3/js/bootstrap-colorpicker.min.js"></script>		

		<link href='css/style.css' rel='stylesheet' />

		<script src="js/calendar/init.js"></script>		
		<script src="js/calendar/main.js"></script>		
		<script src="js/calendar/manipulation.js"></script>		
	</head>

	<body>
		<div id='calendar'></div>
		<div class="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">New event</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-group">
								<label class="col-form-label">Event Title:</label>
								<input type="text" class="form-control" id="event-name">
							</div>
							<div class="form-group">
								<labelclass="col-form-label">Description:</label>
								<textarea class="form-control" id="event-desc"></textarea>
							</div>
							<div id="colorpicker" class="input-group colorpicker-component"> 
								<input type="text" value="#00AABB" class="form-control" id="event-color"/> 
								<div class="input-group-append">
									<i class="input-group-addon input-group-text"></i>
								</div>
							</div>						
						</form>
						<hr>
						<div id="eventTime"></div> 
					</div>
					<div class="modal-footer">
						<button id="eventSave" type="button" class="btn btn-primary">Save</button>
						<button id="eventDelete" type="button" class="btn btn-danger">Delete</button>
						<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>	
	</body>
</html>
