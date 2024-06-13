import * as PIXI from 'pixi.js'

let POINTER_RADIUS = window.innerWidth * 0.01;

function isColliding(hex: PIXI.AnimatedSprite, clientX: number, clientY: number) {
  if (hex.x < clientX - POINTER_RADIUS * 1.445) return false;
  if (hex.x > clientX + POINTER_RADIUS * 1.445) return false;
  if (hex.y < clientY - POINTER_RADIUS) return false;
  if (hex.y > clientY + POINTER_RADIUS) return false;
  return true;
}

export async function initGrid () {
  const app = new PIXI.Application();
  const targetElement = document.getElementById('grid-gradient-overlay')
  if (!targetElement) return
    // Initialize the application
    await app.init({
      resolution: window.devicePixelRatio || 1,
      background: "#FFFFFF",
      resizeTo: targetElement,
      antialias: true,
      autoDensity: true,
      canvas: document.getElementById("canvas") as HTMLCanvasElement,
    });
  
    // Load the animation sprite sheet
    await PIXI.Assets.load("https://nimiq-2.vercel.app/test-sheet.json");
  
    // Create an array of textures from the sprite sheet
    const allFrames = <Array<PIXI.Texture[]>>[];


    // BLANK HEX TEXTURE FRAMES
    const blankHexSpriteFrames = [];
    for (let i = 0; i < 8; i++) {
      const val = i;
      // Magically works since the spritesheet was loaded with the pixi loader
      const tex = PIXI.Texture.from(`hex-${val}.png`);
      tex.source.scaleMode = "linear";
      blankHexSpriteFrames.push(tex);
    }
  
    for (let j = 0; j < 13; j++) {
      // Copy blank hex frames to new sprite frames
      const singleIdentAnim = [...blankHexSpriteFrames];
  
      // Add Identicon to end of frames
      for (let i = 0; i < 4; i++) {
        const val = i;
        const iden = PIXI.Texture.from(`ident-${j}-${val}.png`);
        singleIdentAnim.push(iden);
      }
      allFrames.push(singleIdentAnim);
    }
  
    function drawAllHexagons() {
      const SCREEN_WIDTH = document.body.clientWidth;
      const WIDTH = SCREEN_WIDTH * 0.0136986;
      const HEIGHT = WIDTH / 1.101;
  
      POINTER_RADIUS = (73.5 / 80) * WIDTH;
      const X = WIDTH * 0.4;
      const Y = HEIGHT * 0.35;
      const altRowOffset = WIDTH * 1;
      const heightOffset = HEIGHT * 0.66;
      const numberInRow = Math.ceil(SCREEN_WIDTH / 37);
      for (let row = 0; row < 100; row++) {
        for (let col = 0; col < 37; col++) {
          const hex = new PIXI.AnimatedSprite(
            allFrames[Math.floor(Math.random() * 13)]
          );
  
          hex.x =
            col === 0
              ? X + 0 + altRowOffset * (row % 2)
              : X + Math.round(WIDTH * 2 * col + altRowOffset * (row % 2));
          hex.y = Y + Math.round(heightOffset * row);
          // hex.height = HEIGHT;
          // hex.width = WIDTH;
          hex.scale = SCREEN_WIDTH * 0.0136986 / hex.width;
  
          hex.anchor.set(0.4);
          hex.animationSpeed = 0.4;
          hex.loop = false;
  
          // Remove last hex from alternate rows
          if (!(row % 2) || col < 36) {
            app.stage.addChild(hex);
          }
  
          let isFlipped = false;
          app.stage.eventMode = "static";
          app.stage.on("globalpointermove", (event) => {
            const { clientX, clientY } = event;
  
            const scrolledY = clientY + window.scrollY;
  
            if (!isFlipped) {
              if (!isColliding(hex, clientX, scrolledY)) return;
  
              hex.animationSpeed = 0.8;
              hex.play();
              isFlipped = true;
            } else {
              if (isColliding(hex, clientX, scrolledY)) return;
  
              setTimeout(() => {
                hex.animationSpeed = -0.4;
                hex.play();
                isFlipped = false;
              }, 400);
            }
          });
        }
      }
    }
  
    drawAllHexagons();
  
    window.addEventListener("resize", () => {
      app.stage.removeChildren();
      setTimeout(() => {
        console.log(app.stage)
        drawAllHexagons();
      }, 500);
    });
}
