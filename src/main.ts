import * as PIXI from "pixi.js";

async function main() {
  const app = await PIXI.Application.init({
    width: 640,
    height: 360,
    backgroundColor: 0x2c3e50,
  });

  document.body.appendChild(app.canvas);

  const text = new PIXI.Text("Hello, PixiJS v8!", {
    fill: 0xffffff,
    fontSize: 36,
  });

  text.anchor.set(0.5);
  text.x = app.screen.width / 2;
  text.y = app.screen.height / 2;
  app.stage.addChild(text);
}

main();
