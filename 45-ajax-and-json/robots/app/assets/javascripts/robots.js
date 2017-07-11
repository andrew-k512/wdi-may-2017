// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener('DOMContentLoaded', function() {

  // Step 1: Listen to the click event on each link
  var robotLinks = document.querySelectorAll('.robot > a')
  for(var i = 0; i < robotLinks.length; i++) {
    robotLinks[i].addEventListener('click', function(event) {

      // Step 2: Prevent default behaviour of clicking on a link
      event.preventDefault();

      // Step 3: Make the ajax request
      var url = this.getAttribute('href');

      $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json'
      }).done(function(data) {
        // Step 4: Update the page
        var robotDetails = document.querySelector('#robot-details');
        robotDetails.innerHTML = data;
      });

    });
  }

});
