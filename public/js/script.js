// set the first slides to be active
$("ul.carousel-indicators li[data-slide-to=0]").addClass("active");
$("#intro-photo-0").addClass("active");

const carouselAspectRatio = (width, height) => {
  const aspectRatio = width / height;
  const carouselInner = $("#intro-photos div.carousel-inner");

  const computedHeight = carouselInner.width() / aspectRatio;

  carouselInner.height(computedHeight);
};

carouselAspectRatio(2.4, 1);

$(window).resize(function() {
  carouselAspectRatio(2.4, 1);
});
