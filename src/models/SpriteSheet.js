export default class SpriteSheet {
    constructor({ path, spriteWidth, spriteHeight, sheetWidth, sheetHeight, scale = 1, glyphs }) {
        this.path = path;
        this.glyphs = glyphs;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.sheetWidth = sheetWidth;
        this.sheetHeight = sheetHeight;
        this.scale = scale;

        for (let key of Object.getOwnPropertyNames(this.glyphs)) {
            let glyph = this.glyphs[key];
            if (Array.isArray(glyph)) {
                for (let g of glyph) {
                    this.bind(g);
                }
            } else {
                this.bind(glyph);
            }
        }

    }

    bind(glyph) {
        glyph.getStyle = this.getStyle.bind(this, glyph);
        glyph.getCoordinates = this.getCoordinates.bind(this, glyph);
    }

    getCoordinates(glyph, width, height) {
        return {
            y: (glyph.startY || 0) + glyph.row * height,
            x: (glyph.startX || 0) + glyph.column * width
        };
    }

    getStyle(glyph) {
        let spriteWidth = glyph.spriteWidth || this.spriteWidth;
        let spriteHeight = glyph.spriteHeight || this.spriteHeight;

        let { x, y } = this.getCoordinates(glyph, spriteWidth, spriteHeight);
        y *= this.scale * -1;
        x *= this.scale * -1;

        let width = this.sheetWidth * this.scale;
        let height = this.sheetHeight * this.scale;

        let styles = {
            background: `url(${this.path}) ${x}px ${y}px / ${width}px ${height}px`,
            width: spriteWidth * this.scale,
            height: spriteHeight * this.scale
        };

        return styles;
    }
}