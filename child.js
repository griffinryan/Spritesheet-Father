class child {
    constructor() {
        this.game = gameEngine;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./assets/me.png"), 0, 0, 1600, 1200, 1, 0.6);

    };

    update() {

    };

    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("assets/ramona.png"),0,0);
        this.animator.drawFrame(this.game.clockTick, ctx, 10, 10);
    }
}