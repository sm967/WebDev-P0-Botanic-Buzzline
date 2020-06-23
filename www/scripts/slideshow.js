$(document).ready(function() {
  var index = 0;
  var slideshow = $('#slideshowImage')[0];
  var slideshowcapt = $("#slideshowCapt")[0];
  var images = [
    "images/1.JPG",  // index 0
    // Photo given to us to use by Botanic Buzzline Team
    "images/2.JPG",  // index 1
    // Photo given to us to use by Botanic Buzzline Team
    "images/3.JPG",  // index 2
    // Photo given to us to use by Botanic Buzzline Team
    "images/4.jpg",  // index 3
    // Photo given to us to use by Botanic Buzzline Team
    "images/5.JPG",  // index 4
    // Photo given to us to use by Botanic Buzzline Team
    "images/6.JPG",  // index 5
    // Photo given to us to use by Botanic Buzzline Team
    "images/7.jpg",  // index 6
    // Photo given to us to use by Botanic Buzzline Team
    "images/8.jpg",  // index 7
    // Photo given to us to use by Botanic Buzzline Team
    "images/9.JPG", // index 8
    // Photo given to us to use by Botanic Buzzline Team
  ];
  var captions = [
    "Soil preparation in Fall 2018.",  // index 0
    // Caption given to us to use by the Botanic Buzzline Team
    "Team members Nick and Sam placing compost during the Soil Preparation Day.",  // index 1
    // Caption given to us to use by the Botanic Buzzline Team
    "Volunteers and team members on soil preparation day with Green Star donations.",  // index 2
    // Caption given to us to use by the Botanic Buzzline Team
    "Bees in the Pounder Garden.",  // index 3
    // Caption given to us to use by the Botanic Buzzline Team
    "The Lewis Building in the Botanic Gardens.",  // index 4
    // Caption given to us to use by the Botanic Buzzline Team
    "Hibiscus flower in the Botanic Gardens.",  // index 5
    // Caption given to us to use by the Botanic Buzzline Team
    "Monarch butterfly in the Gardens.",  // index 6
    // Caption given to us to use by the Botanic Buzzline Team
    "Vegetables harvested from the Pounder Garden.",  // index 7
    // Caption given to us to use by the Botanic Buzzline Team
    "Buzzline in mid-November 2018.", // index 8
    // Caption given to us to use by the Botanic Buzzline Team
  ];
  $("#slideshowNext").click(function () {
    index += 1;
    if (index === 9) {
      index = 0;
    }
    slideshow.src = images[index];
    slideshowcapt.innerHTML = captions[index];
  });
  $("#slideshowPrev").click(function () {
    index -= 1;
    if (index === -1) {
      index = 8;
    }
    slideshow.src = images[index];
    slideshowcapt.innerHTML = captions[index];
  });
});
