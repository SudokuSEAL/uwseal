"use strict";

(function () {
  let slideIndex = 1;
  let curAlbumGallery = "";

  window.addEventListener("load", init);

  function init() {
    curAlbumGallery = "spr17-gallery";
    showSlides(slideIndex);

    // Scales the iframe in project showcase to the right size.
    iframeScaler();
    window.addEventListener("resize", iframeScaler);

    const demoPhotos = document.querySelectorAll(".demo");
    demoPhotos.forEach((element) => {
      element.addEventListener("click", () =>
        currentSlide(
          parseInt(element.alt.substring(0, element.alt.indexOf(".")))
        )
      );
    });

    document
      .querySelectorAll(".prev")
      .forEach((elem) => elem.addEventListener("click", () => plusSlides(-1)));
    document
      .querySelectorAll(".next")
      .forEach((elem) => elem.addEventListener("click", () => plusSlides(1)));

    const spr17GalleryView = document.getElementById("spr17-thumbnail");
    const spr18GalleryView = document.getElementById("spr18-thumbnail");

    spr17GalleryView.addEventListener("click", () => {
      curAlbumGallery = "spr17-gallery";
      switchGalleryView();
    });
    spr18GalleryView.addEventListener("click", () => {
      curAlbumGallery = "spr18-gallery";
      switchGalleryView();
    });

  }

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    // "#" + curAlbumGallery + "-gallery > .mySlides"
    let slides = document.querySelectorAll(
      "#" + curAlbumGallery + " > .mySlides"
    );
    let imageSelections = document.querySelectorAll(
      "#" + curAlbumGallery + " .demo"
    );
    let captionText = document.querySelector(
      "#" + curAlbumGallery + " > .caption-container > p"
    );

    // console.log("slides: ", slides, ", dots: ", imageSelections, " ", n);
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < imageSelections.length; i++) {
      imageSelections[i].className = imageSelections[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    imageSelections[slideIndex - 1].className += " active";
    let imgAlt = imageSelections[slideIndex - 1].alt;
    captionText.textContent = imgAlt.substring(imgAlt.indexOf(" ") + 1);
  }

  function switchGalleryView() {
    const galleryViews = new Set(["spr17-gallery", "spr18-gallery"]);

    galleryViews.forEach(view => {
      if (view != curAlbumGallery) {
        // console.log('testing');
        document.getElementById(view).style.display = "none";
      } else {
        document.getElementById(view).style.display = "block";
      }
    })
    slideIndex = 1;
    showSlides(slideIndex);
  }

  // Scales the iframe in the project showcase depending on window size.
  function iframeScaler() {
    let wrap = document.querySelector('.frame-wrap');
    let wrapWidth = wrap.clientWidth;
    let maxWrapWidth = 1152;
    let scale = wrapWidth / maxWrapWidth;
    let iframe = document.querySelector('.frame-wrap > iframe');
    iframe.style.setProperty('--iframe-scale', scale);
    iframe.width = iframe.clientWidth / scale + 'px';
    iframe.height = iframe.clientHeight / scale + 'px';
  }
})();
