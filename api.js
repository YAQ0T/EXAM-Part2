const express = require("express");

const router = express.Router();
const axios = require("axios").default;

let recept;
let orderdReceptData;
router.get("/:recept", (req, res) => {
  recept = req.params.recept;
  axios
    .get(`https://recipes-goodness.herokuapp.com/recipes/${recept}`)
    .then((res) => {
      orderdReceptData = res.data.results.map((recept) => {
        return {
          youtube: recept.href,
          title: recept.title,
          ingredients: recept.ingredients,
          img: recept.thumbnail,
        };
      });
      sendToMainPost();
    })
    .catch((err) => {
      console.error(err);
    });
  function sendToMainPost() {
    res.send(orderdReceptData);
  }
});

router.get("/", (req, res) => {
  res.send("GET request to the homepage");
});
module.exports = router;
