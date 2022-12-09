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
app.renderer.view.style.position = "absolute";

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
displacementMap.scale.set(0.5);

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

// Resize images either by fixed or dynamic values
image.width = 500;
image.height = 500;

// image.scale.x = 1.5;
// image.scale.y = 2;
// image.scale(2, 2);

// Position the image
image.x = 200;
image.y = 500;

// Set position
image.position.set(800, 400);

// Rotate the image
image.rotation = 1;

// Center anchor
// image.anchor.x = 0.5;
// image.anchor.y = 0.5;

// Set anchor
image.anchor.set(0.5, 0.5);

// Animate the image
const loop = function (delta) {
  //   image.x += 1;
  //   image.rotation += 0.01;
};

/*
app.ticker.add((delta) => loop(delta));

// Interactivity
image.on("pointerdown", function () {
  image.scale.x += 0.1;
  image.scale.y += 0.1;
});
image.interactive = true;

// Change cursor
image.buttonMode = true;

// Move the image with keyboard
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") image.x += 10;
  if (e.key === "ArrowLeft") image.x -= 10;
});

// Creating Graphics
// const Graphics = PIXI.Graphics;

// const rectangle = new Graphics();
// rectangle.beginFill(0xaa33bb).drawRect(200, 200, 100, 120).endFill();

// app.stage.addChild(rectangle);

// BG Color
app.renderer.backgroundColor = 0x23395d;

// Set BG Image
const loader = PIXI.Loader.shared;

const setup = function (loader, resources) {
  const backgroundImage = PIXI.Sprite.from(resources.backgroundImage.texture);
  backgroundImage.anchor.set(0.5);
  backgroundImage.x = app.renderer.width / 2;
  backgroundImage.y = app.renderer.height / 2;

  const container = new PIXI.Container();
  container.addChild(backgroundImage);
  app.stage.addChild(container);


};

loader.add("backgroundImage", "./img/logo-shape.jpg").load(setup);

*/
