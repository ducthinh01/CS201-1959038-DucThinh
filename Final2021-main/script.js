$(document).ready(function () {
  $(".btn-ajax").click(function () {
    fetchDataAndDisplay();
  });
});

function fetchDataAndDisplay() {
  $.ajax({
    url: "https://fakestoreapi.herokuapp.com/products",
    method: "GET",
  }).done(function (data) {
    let start = 0;
    let end = 5;
    let str = "";
    for (let i = start; i < end; ++i) {
      str +=
        "<div>" +
        data[i].id +
        "</br>" +
        data[i].title +
        "</br>" +
        data[i].price +
        "</br>" +
        data[i].category +
        "</br>" +
        data[i].description +
        "</br>" +
        data[i].image +
        "</div>" +
        "</br>";
    }
    $(".display-data").empty();
    $(".display-data").append(str);
  });
}

var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false,
});
