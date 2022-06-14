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
var color = [
    '#D54801',
    '#FFBA56',
    '#7F0800',
]

class fire {
    constructor(x, y, colorCode) {
        this.position = {
            x: x,
            y: y
        }
        this.color = colorCode
        this.r = 5
        this.velocity = {
            x: Math.round(Math.random() * 1) * 2 - 1,
            y: -1
        }
        this.speed = {
            x: 20 * Math.random(),
            y: 100 + 20 * Math.random()
        }
        this.ease = 9.81


    }
    draw() {
        ctx.beginPath();
        ctx.shadowBlur = 30;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
        ctx.shadowBlur = 0;

    }
    update() {
        this.draw();

        this.position.x += this.velocity.x * this.speed.x;
        this.position.y += this.velocity.y * this.speed.y;

        this.speed.y -= this.ease;
    }
};

var Fires = [];

function animate() {
    if (preloaderEffect !== true) return
    requestAnimationFrame(animate);
    /*   ctx.clearRect(0, 0, c.width, c.height)  */

    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, c.width, c.height);

    var a = Math.round(Math.random() * (color.length - 1));

    for (var i = 0; i < 3; i++) {
        Fires.push(new fire(mouse.x, mouse.y, color[a]));

        if (Fires.length > 300) {
            Fires.shift();
        }
    }


    Fires.forEach((x) => {
        x.update();
    })

    console.log(Fires.length);
};

animate();

