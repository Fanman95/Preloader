var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

window.addEventListener("resize", function () {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
});

var mouse = { x: c.width / 2, y: c.height / 2 }

window.addEventListener("mousemove", function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

var preloaderEffect = true

/* window.onload = () => {
    setTimeout(() => {
        document.querySelector('.Preloader').style.display = 'none'
        preloaderEffect = false
    }, 5000);
}; */

class star {
    constructor(x, y, color) {
        this.position = {
            x: x,
            y, y
        }
        this.color = color
        this.r = 2
    }
    draw() {
        ctx.beginPath();
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
        ctx.shadowBlur = 0;
    }
    update() {
        this.draw()
    }
}

var Stars = []

function animate() {
    if (preloaderEffect !== true) return
    requestAnimationFrame(animate);
    /*   ctx.clearRect(0, 0, c.width, c.height)  */

    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, c.width, c.height);

    for (var i = 0; i < 10; i++) {
        Stars.push(new star(c.width * Math.random(), c.height * Math.random(), 'white'))

        if (Stars.length > 100) {
            Stars.shift();
        }
    }

    Stars.forEach((x) => {
        x.update();
    })
};

animate();
