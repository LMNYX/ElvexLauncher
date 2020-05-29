const remote = require('electron').remote;
let w = remote.getCurrentWindow();

$(document).ready(function()
	{
		SetState(0);
		SetProgressBarVisibility(true);
	});

function SetProgressBarVisibility(v)
{
	if(v){ $(".pgbar").css("display", "block"); }
	else { $(".pgbar").css("display", "none"); }
}

function SetState(state)
{
	switch(state)
	{
		case -1:
			$("#BTN0").prop('disabled', true);
			$("#BTN0").text("Loading");
			break;
		case 0: // Launch
			$("#BTN0").prop('disabled', false);
			$("#BTN0").text("Launch");
			break;
		case 1: // Update
			$("#BTN0").prop('disabled', false);
			$("#BTN0").text("Update");
			break;
		default:
			break;
	}
}