
$(document).ready(function () {

    $("#addburger").on("click", function(event) {
        event.preventDefault();

        // Make a newBurger object
        var newBurger = {
          burger_name: $("#addBurger").val().trim(),
        };

        console.log(newBurger);

    $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function(data) {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        //   object.reload(forcedReload);

          var insert = "<div>" + data.burger_name + "</div>"
          $("#newBurger").append(insert)
        }
      );
    });


    $("#devour").on("click", function (event) {
        event.preventDefault()

        var updateID = $(this).data('id');
        var updatePath = "/api/burgers/" + updateID;
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
