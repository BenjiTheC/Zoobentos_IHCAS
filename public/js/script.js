// set the first slides to be active
$("ul.carousel-indicators li[data-slide-to=0]").addClass("active");
$("#intro-photo-0").addClass("active");
$(`#nav-side-bar a[href="${location.pathname}"]`).addClass("active");

const carouselAspectRatio = (width, height) => {
  const aspectRatio = width / height; // get aspect ratio
  const carouselInner = $("#intro-photos div.carousel-inner");

  const computedHeight = carouselInner.width() / aspectRatio; // compute the height based on width of the element.

  carouselInner.height(computedHeight);
};

carouselAspectRatio(2.4, 1);

$(window).resize(function() {
  carouselAspectRatio(2.4, 1);
});
