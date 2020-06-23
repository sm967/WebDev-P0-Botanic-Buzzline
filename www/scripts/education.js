$(document).ready(function() {
  var beetle = $('#beetles');
  $("#show-beetles").click(function() {
    if(beetle.css("display") === 'block'){
      beetle.css("display", 'none');
    }else{
      beetle.css("display", 'block');
    }
  });

  var moth = $('#moths');
  $("#show-moths").click(function() {
    if(moth.css("display") === 'block'){
      moth.css("display", 'none');
    }else{
      moth.css("display", 'block');
    }
  });

  var bee = $('#bees');
  $("#show-bees").click(function() {
    if(bee.css("display") === 'block'){
      bee.css("display", 'none');
    }else{
      bee.css("display", 'block');
    }
});

  var butterfly = $('#butterflies');
  $("#show-butterflies").click(function() {
    if(butterfly.css("display") === 'block'){
      butterfly.css("display", 'none');
    }else{
      butterfly.css("display", 'block');
    }
  });
});
