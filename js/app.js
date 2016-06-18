/* DEMO2
 *************** */
var timeline = new mojs.Timeline();
var circle = document.querySelector('#mo-toggle'),
    parent = document.querySelector('#particle-burst');

burstTween = new mojs.Burst({
    parent: parent,
    duration: 2500,
    shape: 'circle',
    fill: 'orange',
    x: '50%',
    y: '50%',
    count: 12,
    isRunLess: true, // trueにするとload時に発火しない
    easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
}),
fadeTween = new mojs.Tween({
	duration : 300,
	onUpdate: function(progress) {
		circle.style.transform = 'scale(' + (1 - progress*0.6) + ')';
	}
});

timeline.add(burstTween, fadeTween);

circle.addEventListener('click', function() {
    timeline.start();
    console.log(timeline);
})



/* DEMO1
 *************** */

function init() {
    var square = document.querySelector('.steam');

    new mojs.Tween({
        repeat: 100,
        duration: 2000,
        onUpdate: function(progress) {
            square.style.transform = 'translateX(' + 3 * Math.sin(2 * progress * Math.PI) + 'px)';
        }
    }).run();
}

init();
