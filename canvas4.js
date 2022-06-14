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

class board {
    constructor(x, y) {
        this.position = {
            x: x,
            y, y
        }
        this.velocity = Math.round(Math.random() * 1) * 2 - 1
        this.speed = 10 + 10 * Math.random()
        this.width = c.width / 10
        this.height = c.height
        this.color = 'blue'
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, c.height);
        ctx.fill();
        ctx.closePath();
    }
    update() {
        this.draw()

        this.position.y += this.velocity * this.speed
    }
}

var Boards = []

for (var i = 0; i < 10; i++) {
    Boards.push(new board(c.width * i / 10, 0))
}

function animate() {
    if (preloaderEffect !== true) return
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, c.width, c.height)

    /*     ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.fillRect(0, 0, c.width, c.height); */



    Boards.forEach((x) => {
        x.update();
    })
};

animate();
