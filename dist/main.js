const source = $("#recept-container").html();
const template = Handlebars.compile(source);

function addRecepts() {
  let nameOfRecept = $("#text").val();

  $.get(`/${nameOfRecept}`, function (res) {
    console.log(nameOfRecept);
    render(res);
  });
}

$("#button").on("click", function () {
  addRecepts();
});

$(".recipes").on("click", ".img", function () {
  let textFromLi = $(this).closest(".recept").find("li");
  textFromLi = textFromLi.text();

  for (let i in textFromLi) {
    if (textFromLi[i] == " ") {
      textFromLi = textFromLi.slice(0, i);
      break;
    }
  }
  alert(textFromLi);
});
