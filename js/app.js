/* DEMO1
 *************** */

function init() {
    var square = document.querySelector('.steam');

    new mojs.Tween({
        repeat: 100,
        duration: 2000,
        onUpdate: function(progress) {
            square.style.transform = 'translateX(' + 3 * Math.sin(2*progress*Math.PI) + 'px)';
        }
    }).run();
}

init();
