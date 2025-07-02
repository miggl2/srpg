"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pixi_js_1 = require("pixi.js");
const app = new pixi_js_1.Application({
    width: 640,
    height: 360,
    backgroundColor: 0x2c3e50,
});
document.body.appendChild(app.canvas);
const text = new pixi_js_1.Text("PixiJS + TypeScript", {
    fill: 0xffffff,
    fontSize: 36,
});
text.anchor.set(0.5);
text.x = app.screen.width / 2;
text.y = app.screen.height / 2;
app.stage.addChild(text);
