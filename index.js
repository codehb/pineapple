
var can = document.getElementById("canvas"),
    ctx = can.getContext('2d'),
    img = new Image();

img.src = 'fish.png';
can.onclick= function(evt) {
    var x = evt.offsetX - img.width/2,
        y = evt.offsetY - img.height/2;
	
    ctx.drawImage(img, x, y);
};
/*
can.onmousemove= function(evt) {
    var x = evt.offsetX - img.width/2,
        y = evt.offsetY - img.height/2;

    ctx.drawImage(img, x, y);
};
*/
function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	render();
}
window.addEventListener('resize', resize, false); resize();
function render() { // draw to screen here
}
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 49) {
        img.src = 'fish.png';
    }
});
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 50) {
        img.src = 'fish2.png';
    }
});
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 51) {
        img.src = 'fish3.png';
    }
});
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 52) {
        img.src = 'fish4.png';
    }
});
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 53) {
        img.src = 'fish5.png';
    }
});
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 191) {
        img.src = 'secret.png';
    }
});
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32) {
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
        alert("Fish will be KILLED")
    }
});