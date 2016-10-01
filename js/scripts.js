$(function() {
  // var carouselList = $("#carousel ul");
  //setInterval(changeSlide, 3000); przeniesione do 60

  function changeSlide() {
    carouselList.animate({
      'marginLeft': -400
    }, 500, moveFirstSlide);
  }

  function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({
      marginLeft: 0
    });
  }

  //klikanie w arrowsy
  $(".arrowRight").click(function() {
    carouselList.animate({
      marginLeft: '-400px'
    }, 200, moveFirstSlide);
  });

  $(".arrowLeft").click(function() {
    carouselList.animate({
      marginLeft: '400px'
    }, 200, moveFirstSlide);
  });

  //tu sie dziejo rzeczy

  var arr = [];
  var i = 0;
  $(".bullet").each(function() {
    arr.push($(this));
  });

  setTimeout(bgChange, 0);

  $(".arrowRight").click(function() {
    bgChange();
  });

  $(".arrowLeft").click(function() {
    bgChangeLeft();
  });

  function bgChange() {
    for (var count = 0; count < arr.length; count++) {
      if (i == count) arr[count].css('background-color', 'black');
      else arr[count].css('background-color', 'grey');
    }
    i++;
    if (i == arr.length) i = 0;
  }

  setInterval(bgChange, 3000);
  var carouselList = $("#carousel ul");
  setInterval(changeSlide, 3000);

  function bgChangeLeft() {
    for (var count = arr.length - 1; count >= 0; count--) {
      if (i == count) arr[count].css('background-color', 'black');
      else arr[count].css('background-color', 'grey');
    }
    i--;
    if (i == -1) i = arr.length - 1
  }

});