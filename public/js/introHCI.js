'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	
	$('.like0').click(function(){ ga('send', 'event', 'like0', 'click');});
	$('.like1').click(function(){ ga('send', 'event', 'like1', 'click');});
	$('.like2').click(function(){ ga('send', 'event', 'like2', 'click');});
	$('.like3').click(function(){ ga('send', 'event', 'like3', 'click');});
	$('.like4').click(function(){ ga('send', 'event', 'like4', 'click');});
	$('.like5').click(function(){ ga('send', 'event', 'like5', 'click');});
	$('.like6').click(function(){ ga('send', 'event', 'like6', 'click');});
	$('.like7').click(function(){ ga('send', 'event', 'like7', 'click');});
	$('.like8').click(function(){ ga('send', 'event', 'like8', 'click');});
	$('.like9').click(function(){ ga('send', 'event', 'like9', 'click');});
	$('.like10').click(function(){ ga('send', 'event', 'like10', 'click');});
	$('.like11').click(function(){ ga('send', 'event', 'like11', 'click');});
	$('.like12').click(function(){ ga('send', 'event', 'like12', 'click');});
	$('.id').click(function(){ ga('send', 'event', 'like id', 'click');});

}