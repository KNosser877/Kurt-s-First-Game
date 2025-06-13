class Dungeon {
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d")
    }

    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0,0)
        };
        image.src = "Images/Dungeon 1-1.png (1).png";

        ghost.scr = "Images/ghost.png"
        const x = 1;
        const y = 4;
        const ghost = new Image();
        ghost.onload = () => {
            this.ctx.drawImage(
                ghost, 
                0,
                0,
                32,
                32,
                x * 16,
                y * 16,
                32,
                32,
            )
        }
    }
}