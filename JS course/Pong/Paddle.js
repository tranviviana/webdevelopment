const SPEED = 0.02
export default class Paddle {
    constructor(paddleElem) {
        this.paddleElem = paddleElem
        this.reset()
    }
    get position() {
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
    }
    set position(value) {
        this.paddleElem.style.setProperty("--position", value)
    }
    reset() {
        this.position = 50
    }
    rect() {
        return this.paddleElem.getBoundingClientRect()
    }
    update(value, ball_y) {
        this.position += SPEED * value * (ball_y - this.position) 
    }
}