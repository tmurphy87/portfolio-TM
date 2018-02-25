//twitter button
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){js=d.createElement(s);
		js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}
	
	}(document, 'script', 'twitter-wjs');

//google maps
function initMap() {
  var uluru = {lat: 34.605925, lng: -86.983342};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

//document ready
$(document).ready(function(){
	// Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    return false;
  });

	// Stellar
  $('#contact-background').stellar();
  });

	// Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

	//tooltip jQuery
  $(function() {
    $('#item1').tooltip();
  });

    //submit button
  $('#bttn-submit').on('click', function() {
  	var comment = $('#message').val();
  	if (comment==='') {
  		$('#message').css('border', '2px solid red');
  	}  else {
  		$('#visible-comment').html('Message submitted successfully.');
  		$('#message').hide();
  		$('#name').hide();
  		$('#email').hide();
  	}
    console.log(comment);
    return false;
  });

    //textarea
  $('#message').css("backgroundColor", "#c3d8d8");
  $('#message').on('keyup', function() {
  	console.log('keyup happened');
  	var charCount = $('#message').val().length;
  	console.log(charCount);
  	$('#char-count').html(charCount);
  	if (charCount>140) {
  		$('#char-count').css('color', 'red');
  	} else {
  		$('#char-count').css('color', 'white');
  	}
  });

  //work section
  for(var i = 0; i < works.length; ++i ) {
  	$('#work1').append('\
  		<div class="col-xs-12 col-sm-6 col-md-3">\
  		<a href="#work1" class="work-img">\
          <img class="img-responsive" src="'+ works[i].pic +'">\
          <span class="info"><p class="proj-title">Title:</p>'+ works[i].title +'</span>\
        </a>\
      </div>\
      ');
  	var images = $('#work1 img');
  	if (i%2===0){
  		$(images[i]).css('border', '4px solid #ce9e62');
  	}  else {
  		$(images[i]).css('border', '4px solid #ce9e62');
  	};
};

$('.work-img').mouseenter( function() {
	$('.info', this).show();
}).mouseleave(function() {
	$('.info', this).hide();
});








	



