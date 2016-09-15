/* DEMO2
 *************** */
var circleLength = 12;
var r = 70;
var container = document.querySelector('#container');

for (var i=0; i<circleLength; i++) {
  var div = document.createElement('div');
  div.classList.add('circle2');
  container.appendChild(div);
}

var simpleLoadAnime = anime({
  targets: '.circle2',
  scale: [1, 1],
  translateX: function(element, index) {
    var dx = Math.floor(r * Math.sin(Math.PI*2/circleLength * index));
    return dx + 'px';
  },
  translateY: function(element, index) {
    var dy = Math.floor(r * Math.cos(Math.PI*2/circleLength * index));
    return dy + 'px';
  },
  delay: function(element, index) {
    return index * 100;
  },
  elasticity: 200,
  duration: 1000,
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
