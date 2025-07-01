
import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: 480,
  height: 800,
  backgroundColor: 0x222222,
});
document.body.appendChild(app.view);

const buttonStyle = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 36,
  fill: 0xffffff,
  align: 'center',
});

function createButton(label: string, y: number, onClick: () => void): PIXI.Container {
  const container = new PIXI.Container();
  const bg = new PIXI.Graphics();
  bg.beginFill(0x444444);
  bg.drawRoundedRect(0, 0, 300, 70, 12);
  bg.endFill();
  container.addChild(bg);
  const text = new PIXI.Text(label, buttonStyle);
  text.anchor.set(0.5);
  text.x = 150;
  text.y = 35;
  container.addChild(text);
  container.interactive = true;
  container.buttonMode = true;
  container.x = (app.screen.width - 300) / 2;
  container.y = y;
  container.on('pointerdown', onClick);
  return container;
}

const startBtn = createButton("게임 시작", 300, () => {
  console.log("게임 시작 클릭됨");
});
const settingsBtn = createButton("설정", 400, () => {
  console.log("설정 클릭됨");
});

app.stage.addChild(startBtn);
app.stage.addChild(settingsBtn);
