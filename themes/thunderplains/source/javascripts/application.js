


function thunderplains() {
  equalizeLocationImages();
  initModals();
  initTabs();
  initSmoothScroll();
  initRoomColumnHover();
  initSlideshow();
}


function thunderplainsWindowLoad(){
    equalizeLocationImages();
}

function initTabs() {



}


function equalizeLocationImages(){
  var $locationPanorama = $('#location-panorama');
  var $locationParking = $('#location-parking');
  var $locationParkingImg = $('#location-parking-image');
  var $locationPanoramaImg = $('#location-panorama-image');
  var $locationPanoramaSrc = $('#location-panorama-image-src');
  var $locationParkingSrc = $('#location-parking-image-src');

  var panoramaHeight = $locationPanorama.height();
  var parkingHeight = $locationParking.height();

  var min = 175;
  var max = 550;

  if(panoramaHeight < min){
    panoramaHeight = min;
  }

  if(panoramaHeight > max){
    panoramaHeight = max;
  }

  $locationParking.height(panoramaHeight);
  $locationPanorama.height(panoramaHeight);


  $locationPanoramaImg.css({
    'background-image' : 'url(' + $locationPanoramaSrc.attr('src') + ')'
  })

  $locationParkingImg.css({
    'background-image' : 'url('+ $locationParkingSrc.attr('src') + ')'
  })

}

function initSmoothScroll() {
  // Smooth Scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}

function initModals() {
  function deployModal() {

    function toggleTab(eve) {
      eve.preventDefault();

      $modal
        .find('.tab-pane')
        .hide()
        .end()
        .find('.nav-tabs li')
        .removeClass('active');

      $(this)
        .parent()
        .addClass('active');

      $modal
        .find($(this).attr('href'))
        .fadeIn(250);
    }

    var $talk = $(this).clone(),
      $modal = $('#modal-talks');

    $modal
      .modal();

    $modal
      .find('.modal-dialog')
      .addClass('modal-lg')

    $modal
      .find('.modal-body')
      .html($talk);

    $modal
      .find('.nav-tabs a')
      .click(toggleTab);
  }

  $('.schedule-talk:not(".no-modal")')
    .on("click", deployModal);
}


function initRoomColumnHover() {
  function attachHandlers(room) {

    var sroom = '.schedule-' + room,
      legend = '.legend-' + room,
      $room = $(sroom),
      $legend = $(legend);

    function lightColumn() {
      $legend.addClass('hover');
      $room.addClass('hover');
    }

    function darkColumn() {
      $legend.addClass('hover');
      $room.removeClass('hover');
    }

    $legend
      .on('mouseenter', lightColumn)
      .on('mouseleave', darkColumn);
  }

  var rooms = ['room1', 'room2', 'room3'];

  for (var i = 0, ii = rooms.length; i < ii; i++) {
    attachHandlers(rooms[i]);
  }
}

function initSlideshow() {
  var SLIDE_DURATION = 10000;
  var active_index = 0;
  var $slides = $('#js-slideshow>section');

  function changeSlides() {
    if (active_index >= $slides.length) {
      active_index = 0;
    }

    $slides
      .removeClass('active')
      .eq(active_index++)
      .addClass('active');
  }

  setInterval(changeSlides, SLIDE_DURATION);
}


$(document).ready(thunderplains);
