'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		//step42
		$("#testjs").text("Please wait...");
		//step43
		$(".jumbotron p").addClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#7fff00");

    // lab3 step38 
   // var containingProject = $(this).closest(".project");
    //containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");

    // step40
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.fadeToggle();//"<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>"
    }

}

 

