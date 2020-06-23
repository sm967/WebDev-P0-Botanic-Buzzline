$(document).ready(function() {
  var index = 0;
  var slideshow = $('#slideshowImageP')[0];
  var slideshowcapt = $("#slideshowCapt")[0];
  var images = [
    "images/pathway1.jpg", // index 0
    // Photo given to us to use by Botanic Buzzline Team
    "images/pathway2.jpg", // index 1
    // Photo given to us to use by Botanic Buzzline Team
    "images/pathway3.jpg", // index 2
    // Photo given to us to use by Botanic Buzzline Team
    "images/pathway4.jpg", // index 3
    // Photo given to us to use by Botanic Buzzline Team
    "images/pathway5.jpg"  // index 4
    // Photo given to us to use by Botanic Buzzline Team
  ];
  var captions = [
    "The view of the Botanic Gardens from the pathway.",  // index 0
    // Caption given to us to use by the Botanic Buzzline Team
    "Volunteers and project members helping to prepare the soil for the pathway. The preparation involved a sustainable method called sheet mulching. Sheet mulching is a no-dig method that uses a biodegradable weed barrier - in this case we sued cardboard and newspaper - covered in a thick layer of Cayuga compost and mulch. This method suppresses weeds, improves soil health and reduces the need for irrigation.",  // index 1
    // Caption given to us to use by the Botanic Buzzline Team
    "The completed soil preparation for the pathway that occurred on Prep Day.",  // index 2
    // Caption given to us to use by the Botanic Buzzline Team
    "The freshly laid soil with the changing leaves of fall.",  // index 3
    // Caption given to us to use by the Botanic Buzzline Team
    "Soon this won't just be soil. In the Spring of 2019 flowers will be planted in the pathway.",  // index 4
    // Caption given to us to use by the Botanic Buzzline Team
  ];
  $("#slideshowNextP").click(function () {
    index += 1;
    if (index === 5) {
      index = 0;
    }
    slideshow.src = images[index];
    slideshowcapt.innerHTML = captions[index];
  });
  $("#slideshowPrevP").click(function () {
    index -= 1;
    if (index === -1) {
      index = 4;
    }
    slideshow.src = images[index];
    slideshowcapt.innerHTML = captions[index];
  });
});
