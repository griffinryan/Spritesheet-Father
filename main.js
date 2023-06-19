const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// ASSET_MANAGER.queueDownload("./assets/car.png");
// ASSET_MANAGER.queueDownload("./assets/dad.png");
// ASSET_MANAGER.queueDownload("./assets/grad.png");
// ASSET_MANAGER.queueDownload("./assets/grandpa.png");
ASSET_MANAGER.queueDownload("./assets/kid.png");
// ASSET_MANAGER.queueDownload("./assets/me-drew.png");
ASSET_MANAGER.queueDownload("./assets/me.png");
// ASSET_MANAGER.queueDownload("./assets/plane.png");
ASSET_MANAGER.queueDownload("./assets/ramona.png");
ASSET_MANAGER.queueDownload("./assets/sounds/fart.mp3");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new father(gameEngine));
	gameEngine.addEntity(new child(gameEngine));
	//gameEngine.addEntity(new ramona(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
