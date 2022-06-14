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

window.onload = () => {
    setTimeout(() => {
        document.querySelector('.Preloader').style.display = 'none'
        preloaderEffect = false
    }, 5000);
};
//http://www.downtownuplighting.com/rgb-color-chart
var color = [
    'rgb(65%, 16%, 16%)',
    'rgb(80%, 20%, 20%)',
    'rgb(75%, 15%, 15%)',
    'rgb(70%, 13%, 13%)',
    'rgb(80%, 15%, 15%)',
    'rgb(86%, 16%, 16%)',
    'rgb(94%, 50%, 50%)',
    'rgb(93%, 39%, 39%)',
    'rgb(93%, 23%, 23%)',
    'rgb(93%, 17%, 17%)',
    'rgb(80%, 0%, 0%)',
    'rgb(93%, 0%, 0%)',
    'rgb(100%, 0%, 0%)',
    'rgb(100%, 19%, 19%)',
    'rgb(100%, 25%, 25%)',
    'rgb(100%, 42%, 42%)',
    'rgb(100%, 76%, 76%)',
    'rgb(100%, 80%, 80%)',
    'rgb(95%, 28%, 25%)',
    'rgb(89%, 9%, 5%)',
    'rgb(99%, 8%, 0%)',
    'rgb(80%, 7%, 0%)',
    'rgb(98%, 50%, 45%)',
    'rgb(100%, 89%, 88%)',
    'rgb(100%, 14%, 0%)',
    'rgb(100%, 33%, 20%)',
    'rgb(100%, 39%, 28%)',
    'rgb(100%, 20%, 0%)',
    'rgb(100%, 55%, 41%)',
    'rgb(100%, 34%, 13%)',
    'rgb(80%, 22%, 0%)',
    'rgb(93%, 25%, 0%)',
    'rgb(100%, 27%, 0%)',
    'rgb(100%, 50%, 31%)',
    'rgb(100%, 63%, 48%)',
    'rgb(97%, 46%, 19%)',
    'rgb(98%, 63%, 42%)',
    'rgb(100%, 38%, 1%)',
    'rgb(100%, 45%, 9%)',
    'rgb(100%, 91%, 84%)',
    'rgb(100%, 55%, 0%)',
    'rgb(100%, 83%, 61%)',
    'rgb(100%, 94%, 86%)',
    'rgb(100%, 65%, 0%)',
    'rgb(100%, 91%, 73%)',
    'rgb(100%, 67%, 0%)',
    'rgb(100%, 69%, 6%)',
    'rgb(93%, 68%, 5%)',
    'rgb(100%, 76%, 15%)',
    'rgb(90%, 71%, 15%)',
    'rgb(93%, 80%, 38%)',
    'rgb(90%, 74%, 23%)',
    'rgb(80%, 67%, 18%)',
    'rgb(100%, 80%, 7%)',
    'rgb(99%, 82%, 9%)',
    'rgb(100%, 95%, 71%)',
    'rgb(99%, 86%, 23%)',
    'rgb(100%, 93%, 55%)',
    'rgb(93%, 87%, 51%)',
    'rgb(80%, 68%, 0%)',
    'rgb(93%, 79%, 0%)',
    'rgb(100%, 84%, 0%)',
    'rgb(100%, 89%, 1%)',
    'rgb(94%, 90%, 55%)',
    'rgb(98%, 93%, 36%)',
    'rgb(100%, 90%, 0%)',
    'rgb(100%, 98%, 80%)',
    'rgb(93%, 91%, 67%)',
    'rgb(93%, 90%, 52%)',
    'rgb(100%, 96%, 56%)',
    'rgb(100%, 99%, 81%)',
    'rgb(93%, 93%, 0%)',
    'rgb(100%, 100%, 0%)',
    'rgb(100%, 100%, 49%',
    'rgb(100%, 100%, 67%)',
    'rgb(100%, 100%, 80%)',
    'rgb(100%, 100%, 88%)',
    'rgb(96%, 97%, 46%)',
    'rgb(82%, 89%, 19%)',
    'rgb(78%, 96%, 15%)',
    'rgb(67%, 87%, 0%)',
    'rgb(74%, 91%, 22%)',
    'rgb(83%, 93%, 57%)',
    'rgb(75%, 90%, 33%)',
    'rgb(61%, 80%, 10%)',
    'rgb(91%, 95%, 83%)',
    'rgb(75%, 100%, 24%)',
    'rgb(87%, 100%, 65%)',
    'rgb(74%, 93%, 41%)',
    'rgb(79%, 100%, 44%)',
    'rgb(68%, 100%, 18%)',
    'rgb(46%, 93%, 0%)',
    'rgb(49%, 99%, 0%)',
    'rgb(71%, 93%, 71%)',
    'rgb(56%, 93%, 56%)',
    'rgb(60%, 98%, 60%)',
    'rgb(0%, 100%, 0%)',
    'rgb(20%, 100%, 20%)',
    'rgb(40%, 100%, 40%)',
    'rgb(60%, 100%, 60%)',
    'rgb(76%, 100%, 76%)',
    'rgb(80%, 100%, 80%)',
    'rgb(94%, 100%, 94%)',
    'rgb(0%, 100%, 20%)',
    'rgb(33%, 100%, 62%)',
    'rgb(82%, 98%, 93%)',
    'rgb(29%, 91%, 74%)',
    'rgb(6%, 87%, 69%)',
    'rgb(64%, 86%, 82%)',
    'rgb(0%, 100%, 80%)',
    'rgb(86%, 100%, 97%)',
    'rgb(85%, 96%, 94%)',
    'rgb(21%, 86%, 79%)',
    'rgb(25%, 88%, 82%)',
    'rgb(56%, 100%, 98%)',
    'rgb(55%, 93%, 93%)',
    'rgb(22%, 99%, 99%)',
    'rgb(0%, 93%, 93%)',
    'rgb(0%, 100%, 100%)',
    'rgb(73%, 100%, 100%)',
    'rgb(88%, 100%, 100%)',
    'rgb(0%, 90%, 93%)',
    'rgb(0%, 96%, 100%)',
    'rgb(40%, 90%, 93%)',
    'rgb(2%, 93%, 100%)',
    'rgb(60%, 96%, 100%)',
    'rgb(39%, 82%, 96%)',
    'rgb(75%, 94%, 100%)',
    'rgb(4%, 71%, 100%)',
    'rgb(26%, 75%, 98%)',
    'rgb(64%, 83%, 93%)',
    'rgb(51%, 81%, 99%)',
    'rgb(40%, 78%, 100%)',
    'rgb(69%, 89%, 100%)',
    'rgb(53%, 81%, 98%)',
    'rgb(39%, 72%, 100%)',
    'rgb(45%, 73%, 98%)',
    'rgb(0%, 50%, 100%)',
    'rgb(78%, 89%, 100%)',
    'rgb(49%, 71%, 100%)',
    'rgb(36%, 56%, 96%)',
    'rgb(8%, 39%, 96%)',
    'rgb(0%, 28%, 98%)',
    'rgb(0%, 24%, 100%)',
    'rgb(90%, 90%, 98%)',
    'rgb(0%, 0%, 100%)',
    'rgb(30%, 30%, 100%)',
    'rgb(67%, 67%, 100%)',
    'rgb(80%, 80%, 100%)',
    'rgb(97%, 97%, 100%)',
    'rgb(20%, 0%, 100%)',
    'rgb(67%, 51%, 100%)',
    'rgb(40%, 0%, 100%)',
    'rgb(50%, 0%, 100%)',
    'rgb(61%, 19%, 100%)',
    'rgb(75%, 37%, 100%)',
    'rgb(60%, 20%, 80%)',
    'rgb(67%, 0%, 100%)',
    'rgb(58%, 0%, 83%)',
    'rgb(80%, 0%, 100%)',
    'rgb(88%, 40%, 100%)',
    'rgb(87%, 63%, 87%)',
    'rgb(86%, 44%, 86%)',
    'rgb(93%, 68%, 93%)',
    'rgb(93%, 51%, 93%)',
    'rgb(80%, 0%, 80%)',
    'rgb(93%, 0%, 93%)',
    'rgb(100%, 0%, 100%)',
    'rgb(100%, 73%, 100%)',
    'rgb(100%, 88%, 100%)',
    'rgb(100%, 51%, 98%)',
    'rgb(100%, 0%, 80%)',
    'rgb(100%, 0%, 67%)',
    'rgb(100%, 20%, 70%)',
    'rgb(100%, 41%, 71%)',
    'rgb(100%, 24%, 59%)',
    'rgb(100%, 0%, 40%)',
    'rgb(96%, 80%, 85%)',
    'rgb(100%, 51%, 67%)',
    'rgb(100%, 94%, 96%)',
    'rgb(100%, 71%, 77%)',
    'rgb(100%, 0%, 20%)',
    'rgb(96%, 30%, 33%)',
    'rgb(100%, 1%, 5%)'
]

var radius = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class ball {
    constructor(x, y, colorCode, r) {
        this.position = {
            x: x,
            y: y
        }
        this.color = colorCode
        this.r = r
        this.velocity = {
            x: Math.round(Math.random() * 1) * 2 - 1,
            y: Math.round(Math.random() * 1) * 2 - 1
        }
        this.speed = {
            x: 20 * Math.random(),
            y: 20 * Math.random()
        }
        this.ease = 0.9


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
        this.draw()

        this.position.x += this.velocity.x * this.speed.x
        this.position.y += this.velocity.y * this.speed.y

        this.speed.x *= this.ease
        this.speed.y *= this.ease
    }
};

var Balls = [];

function animate() {
    if (preloaderEffect !== true) return
    requestAnimationFrame(animate);
    /*  ctx.clearRect(0, 0, c.width, c.height) */

    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, c.width, c.height);

    var a = Math.round(Math.random() * (color.length - 1));
    var b = Math.round(Math.random() * (radius.length - 1));
    console.log(a, b);
    Balls.push(new ball(mouse.x, mouse.y, color[a], radius[b]));

    if (Balls.length > 100) {
        Balls.shift();
    }

    Balls.forEach((x) => {
        x.update();
    })

    console.log(Balls.length);
};

animate();

