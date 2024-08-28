import * as PIXI from 'pixi.js'

// let POINTER_RADIUS = window.innerWidth * 0.01

export async function initGrid() {
  const app = new PIXI.Application()
  const targetElement = document.getElementById('hero')
  if (!targetElement)
    return
  // Initialize the application
  await app.init({
    resolution: window.devicePixelRatio || 1,
    // 262B55
    background: '#191D3F',
    resizeTo: targetElement,
    antialias: true,
    autoDensity: true,
    canvas: document.getElementById('canvas') as HTMLCanvasElement,
  })

  // Load the animation sprite sheet
  await PIXI.Assets.load('/img/test-sheet-dark.json')

  // Create an array of textures from the sprite sheet
  const allFrames = <Array<PIXI.Texture[]>>[]

  // BLANK HEX TEXTURE FRAMES
  const blankHexSpriteFrames = []
  for (let i = 0; i < 8; i++) {
    const val = i
    // Magically works since the spritesheet was loaded with the pixi loader
    const tex = PIXI.Texture.from(`hex-${val}.png`)
    tex.source.scaleMode = 'linear'
    blankHexSpriteFrames.push(tex)
  }

  for (let j = 0; j < 13; j++) {
    // Copy blank hex frames to new sprite frames
    const singleIdentAnim = [...blankHexSpriteFrames]

    // Add Identicon to end of frames
    for (let i = 0; i < 4; i++) {
      const val = i
      const iden = PIXI.Texture.from(`ident-${j}-${val}.png`)
      singleIdentAnim.push(iden)
    }
    allFrames.push(singleIdentAnim)
  }

  function drawAllHexagons() {
    // SVG BASE IS 1440
    // At which the hexagons are 26w and 23.4h
    // hex width to container width factor is 0.01805555555
    const SVGWIDTHTOHEXWIDTHFACTOR = 0.01805555555
    const SCREEN_WIDTH = document.body.clientWidth
    // width is 20, gap is 20, so one hex = 40
    const WIDTH = SCREEN_WIDTH * SVGWIDTHTOHEXWIDTHFACTOR
    // Aspect ratio of calculated 26px equivalent to give 23.6px
    const HEIGHT = WIDTH * 0.90769230769

    // POINTER_RADIUS = (73.5 / 80) * WIDTH
    const X = -HEIGHT / 3
    const Y = 0
    const altRowOffset = WIDTH
    // 15.6px height offset in svg
    // factor of height as 0.66101694915
    const heightOffset = HEIGHT * 0.66101694915
    // const numberInRow = Math.ceil(SCREEN_WIDTH / 37);
    for (let row = 0; row < 100; row++) {
      for (let col = 0; col < 68; col++) {
        const hex = new PIXI.AnimatedSprite(
          allFrames[Math.floor(Math.random() * 13)],
        )

        hex.x
            = col === 0
            ? X + 0 + altRowOffset * (row % 2)
            : X + ((WIDTH * 2) * col) + altRowOffset * (row % 2)
        hex.y = Y + heightOffset * row
        // hex.height = HEIGHT;
        // hex.width = WIDTH;
        const percentage = WIDTH / hex.width
        hex.scale = percentage

        hex.anchor.set(0.4)
        hex.animationSpeed = 0.4
        hex.alpha = Math.floor(Math.random() * 3) < 1 ? 0.5 : 1
        hex.loop = false

        // Remove last hex from alternate rows
        if (!(row % 2) || col < 36) {
          app.stage.addChild(hex)
        }

        app.stage.eventMode = 'static'
      }
    }
  }

  drawAllHexagons()

  window.addEventListener('resize', () => {
    app.stage.removeChildren()
    setTimeout(() => {
      drawAllHexagons()
    }, 500)
  })
}
