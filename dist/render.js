function render(recept) {
  $(".recipes").empty();
  for (i in recept) {
    let receptObject = {};
    receptObject.title = recept[i].title;
    receptObject.img = recept[i].img;

    receptObject.youtubeLink = recept[i].youtube;
    receptObject.ingredients = recept[i].ingredients;
    const newHTML = template(receptObject);
    $(".recipes").append(newHTML);
  }
}
