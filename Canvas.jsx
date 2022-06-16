import { React, useEffect, useRef, useState } from 'react'

export default function Canvas() {
    const canvasRef = useRef(null)
    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        var preloaderEffect = true

        //draw
        class sight {
            constructor(x, y) {
                this.position = {
                    x: x,
                    y: y
                }
                this.color = '#FF5733'
                this.r = 40
                this.outerR = 45
            }
            draw() {
                context.beginPath();
                context.strokeStyle = this.color;
                context.lineWidth = 2.5;
                context.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
                context.stroke();
                context.closePath();
            }
            update() {
                this.draw()

            }
        }

        var Sight = new sight(0, 0)

        function anime() {
            if (preloaderEffect !== true)
                context.clearRect(0, 0, canvas.width, canvas.height);
            Sight.update()
            requestAnimationFrame(anime);
            console.log(MousePosition.left, MousePosition.top)
        }
        anime()
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} className='FullScreenCanvas'></canvas>
        </div>
    )
}
