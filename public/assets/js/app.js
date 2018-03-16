// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newDevour");
  
      var newDevourState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#submit1").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
       burger_name: $("#addBurger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added new burger" + newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  