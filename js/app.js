/* DEMO5
 *************** */


/* DEMO4
 *************** */
var rippleTarget = document.getElementsByClassName('ripple');
var rippleDuration = 1000;
function rippleAnimation (i) {
  setTimeout(function() {
    var scaleRipple = anime({
      targets: rippleTarget[i],
      width: 120,
      height: 120,
      top: '-60px',
      left: '-60px',
      opacity: 1,
      elasticity: 0,
      duration: rippleDuration,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    });
  }, rippleDuration * i);
}

for (var i=0; i<rippleTarget.length; i++) {
  rippleAnimation(i);
}

/* DEMO3
 *************** */
var boundedTarget = document.getElementsByClassName('bounded-letter-obj');

function boundedAnimation (i) {
  var timeout = 100 + (i*100);

  setTimeout(function() {
    anime({
      targets: boundedTarget[i],
      scaleY: 1.25,
      translateY: -20,
      elasticity: 300,
      duration: 1150,
      direction: 'alternate',
      loop: true
    });
  }, timeout);
}

for (var i=0; i<boundedTarget.length; i++) {
    boundedAnimation(i);
}

/* DEMO2
 *************** */
var circleLength = 12;
var r = 60;
var container = document.querySelector('.runnning-box');

for (var i=0; i<circleLength; i++) {
  var div = document.createElement('div');
  div.classList.add('circle2');
  container.appendChild(div);
}

var simpleLoadAnime = anime({
  targets: '.circle2',
  scale: [1.5, 0.75],
  translateX: function(element, index) {
    var dx = Math.floor(r * Math.sin(Math.PI*2/circleLength * index));
    return dx + 'px';
  },
  translateY: function(element, index) {
    var dy = Math.floor(r * Math.cos(Math.PI*2/circleLength * index));
    return dy + 'px';
  },
  delay: function(element, index) {
    return 75 * index;
  },
  elasticity: 150,
  duration: 1000,
  direction: 'alternate',
  loop: true
});


/* DEMO1
 *************** */
var googleAnime = anime({
  targets: '.circle1',
  translateY: '30px',
  delay: function(el, index) {
    return index * 160;
  },
  direction: 'alternate',
  elasticity: 100,
  duration: 1000,
  loop: true
});
