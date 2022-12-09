// Get PIXI started
const Application = PIXI.Application;

// Set width, height, and (transparent) background
const app = new Application({
  width: 800,
  height: 800,
  backgroundAlpha: 0,
});

// Resize
app.renderer.resize(window.innerWidth, window.innerHeight);
// app.renderer.view.style.position = "absolute";

// Import PIXI canvas to DOM (or any container)
document.body.appendChild(app.view);

// Import Image
const texture = PIXI.Texture.from("./img/logo-shape.jpg");
const image = new PIXI.Sprite(texture);

// Import Displacement Map
const displacementMap = PIXI.Sprite.from("./img/noise.jpeg");
const displacementFilter = new PIXI.filters.DisplacementFilter(displacementMap);

// Something like CSS background-repeat
displacementMap.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

// Create Container
const container = new PIXI.Container();

// Add Image to container
container.addChild(image);

// Scale Displacement Map if needed
displacementMap.scale.set(0.3);

// Add Displacement Map to container
container.addChild(displacementMap);

// Set Displacement Filters
container.filters = [displacementFilter];

// Add container to the Stage (main)
app.stage.addChild(container);

// Animate Displacement
app.ticker.add(function () {
  displacementMap.x++;

  // Reset in case it moves out of our target
  if (displacementMap.x > displacementMap.width) displacementMap.x = 0;
});

// OPTIONAL
// // Resize images either by fixed or dynamic values
// image.scale.set(0.5);
image.width = window.innerWidth;
image.height = window.innerHeight;

// // Set position
// image.position.set(800, 400);

// // Set anchor
// image.anchor.set(0.5, 0.5);
