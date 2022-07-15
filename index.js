const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const boundary = new Boundries({
    position: {
        x: 0,
        y: 0
    }
})

boundary.draw()