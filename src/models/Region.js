import Coordinate from './Coordinate.js';

export default class Region {
    constructor(startX, startY, spriteWidth, spriteHeight) {
        this.startX = startX;
        this.startY = startY;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
    }

    coord(row, column) {
        return new Coordinate(this.spriteWidth, this.spriteHeight, row, column);
    }
}