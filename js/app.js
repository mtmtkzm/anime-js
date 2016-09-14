/* DEMO2
 *************** */
var circleLength = 12;
var r = 100;
var container = document.querySelector('#container');

for (var i=0; i<circleLength; i++) {
  var div = document.createElement('div');
  var dx = r * Math.sin(Math.PI*2/circleLength * i);
  var dy = r * Math.cos(Math.PI*2/circleLength * i);
  div.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
  div.classList.add('circle2');
  container.appendChild(div);
}



/* DEMO1
 *************** */
anime({
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
