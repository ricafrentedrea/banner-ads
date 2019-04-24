function changeElementStyle(myElement, styleObj) {
    for (let style in styleObj) {
      myElement.style[style] = styleObj[style];
    }
  }
  
  function fadeIn(element, duration, callback) {
    let opacity = 0;
    const setIntervalDuration = 10;
    const myInterval = setInterval(function(){
      if(opacity < 1) {
        opacity += setIntervalDuration / duration;
        element.style.opacity = opacity;
      } else {
         if (callback && typeof(callback) === "function") {
            callback();
            clearInterval(myInterval);
          }
      }
    }, setIntervalDuration);
  }
  
  function fadeOut(element, duration, callback) {
    let opacity = 1;
    const setIntervalDuration = 10;
    const myInterval = setInterval(function(){
      if(opacity > 0) {
        opacity -= setIntervalDuration / duration;
        element.style.opacity = opacity;
      } else {
        if (callback && typeof(callback) === "function") {
          callback();
          clearInterval(myInterval);
        }
      }
    }, setIntervalDuration);
  }
    
  function slideObj(rightElement, startPosition, endPosition, duration) {
    const setIntervalDuration = 20;
    const totalDistance = endPosition - startPosition;
    const myInterval = setInterval(function(){
      if (startPosition === endPosition) {
        clearInterval(myInterval);
      } else {
        startPosition += totalDistance / (duration / setIntervalDuration);
        if (startPosition > endPosition) {
          startPosition = endPosition;
        }
        rightElement.style.marginLeft = startPosition + "px";
      } 
    }, setIntervalDuration);
  }
  
  function slideLeft(rightElement, startPosition, endPosition, duration, callback) {
    const setIntervalDuration = 20;
    const totalDistance = endPosition - startPosition;
    const myInterval = setInterval(function(){
      if (startPosition === endPosition) { 
       if (callback && typeof(callback) === "function") {
         callback();
         clearInterval(myInterval);
        }
      } else {
        startPosition += totalDistance / (duration / setIntervalDuration);
        if (startPosition < endPosition) {
          startPosition = endPosition;
        }
        rightElement.style.marginLeft = startPosition + "px";
      } 
    }, setIntervalDuration);
  }
  
  function changeFrame() {
    const secondCarousel = document.getElementById('carouselSecondImg');
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');
    if (secondCarousel.style.zIndex == 1) {
      secondCarousel.style.zIndex = 2;
      btnLeft.style.display = "block";
      btnRight.style.display = "none";
    } else {
      secondCarousel.style.zIndex = 1;
      btnLeft.style.display = "none";
      btnRight.style.display = "block";
    }
  }
  
  window.addEventListener('load', function(){
    const border = document.getElementById('borderline');
    const firstText = document.getElementById('headline1');
    const secondText = document.getElementById('headline2');
    const secondFrame = document.getElementById('headlines');
    const cta = document.getElementById('ctadescription');
    const showCarousel = document.getElementById('carousel');
    const endPosition = 65;
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');
    
    fadeIn(border, 1000, function(){
      slideObj(firstText, -170, endPosition, 1000);
      slideLeft(secondText, 300, endPosition, 1000, function() {
        fadeOut(secondFrame, 2000, function(){
          fadeIn(cta, 2000, function(){
            fadeIn(showCarousel, 2000);
          });
        });
      });
    });

    btnLeft.addEventListener('click', changeFrame)
    btnRight.addEventListener('click', changeFrame)
  }, false);