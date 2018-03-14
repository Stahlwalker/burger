var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  res.redirect("/burgers");
})

// router.get("/", function(req, res) {
//   burger.selectAll(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/add", function(req, res) {
  burger.create(
    "burger_name", req.body.burger_name, function() {
        res.redirect("/burgers");
  });
});

// router.post("/api/burgers", function(req, res) {
//   burger.create(
//     "burger_name", req.body.burger_name, function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });


// router.put("/burgers/devour/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     devoured: req.body.devoured
//   }, condition, function() {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

router.put("/burgers/devour/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
      res.redirect("/burgers");
  });
});



// Export routes for server.js to use.
module.exports = router;
