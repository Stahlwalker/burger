$(document).ready(function () {

    $("#submit1").on("click", function(event) {
        event.preventDefault();

        // Make a newBurger object
        var newBurger = {
          burger_name: $("#addBurger").val().trim(),
        };

        console.log(newBurger);

    $.ajax("/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function(data) {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();

          var insert = "<div>" + data.burger_name + "</div>"
          $("#addBurger").append(insert)
        }
      );
    });


    // ---------------------- UPDATE FUNCTION ----------------------------- //

    $("#devour").on("click", function (event) {
        event.preventDefault()

        var updateID = $(this).data('id');
        var updatePath = "/burgers/" + updateID;
        var updatedBurger = {
            id: updateID,
            devoured: true
        };

        $.ajax(updatePath, {
            type: "PUT",
            data: updatedBurger
        }).then(function () {
            console.log("Burger at: " + updateID + "updated!");
            location.reload()

        })
    });


});
