$(function() {

  //tu sie dziejo rzeczy
  

  var arr = $(".bullet"),
      i = 0,
      carouselList = $("#carousel ul");
  
  
  function changeSlide() {
    
    bgChange();

    carouselList.animate({
      marginLeft: -1000
    }, 1000, moveFirstSlide);    
    
  }

  function moveFirstSlide() {
    
    var firstItem = carouselList.find("li:first"),
        lastItem = carouselList.find("li:last");
    
    lastItem.after(firstItem);
    carouselList.css({
      marginLeft: 0
    });
    
  }
  
  function moveLastSlide() {
    
    var firstItem = carouselList.find("li:first"),
        lastItem = carouselList.find("li:last");
    
    firstItem.before(lastItem);
    
    carouselList.css({
      marginLeft: -1000
    });
    
  }

  //klikanie w arrowsy
  $(".arrowRight")
    .click(changeSlide);

  $(".arrowLeft").click(function() {
    
    bgChange(true);
    
    moveLastSlide()
    
    carouselList.animate({
      marginLeft: 0
    }, 4000);
  });
  
  function bgChange(isLeft) {
    
    i = (isLeft) ? i-1 : i+1;
    i = i%(arr.length);
    
    arr.css('background-color', 'grey');
    
    arr
      .eq(i)
      .css('background-color', 'black');
    
  }
 
  arr
    .eq(i)
    .css('background-color', 'black');
 
  setInterval(changeSlide, 4000);

});