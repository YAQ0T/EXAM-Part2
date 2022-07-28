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
  let x = $(this).closest(".recept").find("li");
  x = x.text();

  for (let i in x) {
    if (x[i] == " ") {
      x = x.slice(0, i);
      break;
    }
  }
  alert(x);
});
