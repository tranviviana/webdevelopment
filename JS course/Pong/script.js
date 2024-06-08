import Ball from "./Ball.js"
import Paddle from "./Paddle.js"
const ball = new Ball (document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        // update code
        
        
        //ball.update(delta)
    }
    lastTime = time
    //causes an infinite time loop
    window.requestAnimationFrame(update)
}
document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
})
//calls when something can be changed
window.requestAnimationFrame(update)