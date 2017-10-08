import SpriteSheet from './models/SpriteSheet.js';
import Coordinate from './models/Coordinate';
import Region from './models/Region';
import { range } from './util';

const Main = new Region(0, 0, 8, 8);

const Menu = new SpriteSheet({
    path: '../Images/menu.png',
    spriteWidth: 8,
    spriteHeight: 8,
    sheetWidth: 128,
    sheetHeight: 150,
    scale: 2,
    glyphs: {
        Blob: Main.coord(0, 0),
        EdgeTopLeft: Main.coord(0, 1),
        EdgeTop: Main.coord(0, 2),
        EdgeTopRight: Main.coord(0, 3),
        EdgeLeft: Main.coord(0, 4),
        EdgeRight: Main.coord(0, 5),
        EdgeBottomLeft: Main.coord(0, 6),
        EdgeBottom: Main.coord(0, 7),
        EdgeBottomRight: Main.coord(0, 8),
        Space: Main.coord(0, 9),
        A: Main.coord(4, 0),
        B: Main.coord(4, 1),
        C: Main.coord(4, 2),
        D: Main.coord(4, 3),
        E: Main.coord(4, 4),
        F: Main.coord(4, 5),
        G: Main.coord(4, 6),
        H: Main.coord(4, 7),
        I: Main.coord(4, 8),
        J: Main.coord(4, 9),
        K: Main.coord(4, 10),
        L: Main.coord(4, 11),
        M: Main.coord(4, 12),
        N: Main.coord(4, 13),
        P: Main.coord(4, 15),
        O: Main.coord(4, 14),
        Q: Main.coord(5, 0),
        R: Main.coord(5, 1),
        S: Main.coord(5, 2),
        T: Main.coord(5, 3),
        U: Main.coord(5, 4),
        V: Main.coord(5, 5),
        W: Main.coord(5, 6),
        X: Main.coord(5, 7),
        Y: Main.coord(5, 8),
        Z: Main.coord(5, 9),
        a: Main.coord(5, 10),
        b: Main.coord(5, 11),
        c: Main.coord(5, 12),
        d: Main.coord(5, 13),
        e: Main.coord(5, 14),
        f: Main.coord(5, 15),
        g: Main.coord(6, 0),
        h: Main.coord(6, 1),
        i: Main.coord(6, 2),
        j: Main.coord(6, 3),
        k: Main.coord(6, 4),
        l: Main.coord(6, 5),
        m: Main.coord(6, 6),
        n: Main.coord(6, 7),
        o: Main.coord(6, 8),
        p: Main.coord(6, 9),
        q: Main.coord(6, 10),
        r: Main.coord(6, 11),
        s: Main.coord(6, 12),
        t: Main.coord(6, 13),
        u: Main.coord(6, 14),
        v: Main.coord(6, 15),
        w: Main.coord(7, 0),
        x: Main.coord(7, 1),
        y: Main.coord(7, 2),
        z: Main.coord(7, 3),
        RightSingleQuote: Main.coord(7, 9),
        RightDoubleQuote: Main.coord(7, 10),
        LeftSingleQuote: Main.coord(8, 10),
        LeftDoubleQuote: Main.coord(8, 11),
        Colon: Main.coord(7, 11),
        Semicolon: Main.coord(7, 12),
        Comma: Main.coord(7, 13),
        LeftParen: Main.coord(7, 14),
        RightParen: Main.coord(7, 15),
        Slash: Main.coord(8, 0),
        ExclamationPoint: Main.coord(8, 1),
        QuestionMark: Main.coord(8, 2),
        Period: Main.coord(8, 3),
        Hyphen: Main.coord(10, 5),
        Stone: Main.coord(2, 10),
        Toad: Main.coord(2, 11),
        Mini: Main.coord(2, 12),
        Float: Main.coord(2, 13),
        Poison: Main.coord(2, 14),
        Zombie: Main.coord(2, 15),
        Darkness: Main.coord(3, 0),
        Zero: Main.coord(3, 3),
        One: Main.coord(3, 4),
        Two: Main.coord(3, 5),
        Three: Main.coord(3, 6),
        Four: Main.coord(3, 7),
        Five: Main.coord(3, 8),
        Six: Main.coord(3, 9),
        Seven: Main.coord(3, 10),
        Eight: Main.coord(3, 11),
        Nine: Main.coord(3, 12),
        StatM: Main.coord(3, 13),
        StatH: Main.coord(3, 14),
        StatP: Main.coord(3, 15),
        Key: Main.coord(9, 10),
        Boot: Main.coord(9, 11),
        Throwable: Main.coord(9, 12),
        Hammer: Main.coord(9, 13),
        Tent: Main.coord(10, 0),
        Blobs: Main.coord(10, 1),
        Drink: Main.coord(10, 2),
        Shirt: Main.coord(10, 3),
        Note: Main.coord(10, 4),
        Claw: Main.coord(10, 10),
        Gauntlet: Main.coord(10, 11),
        UpArrow: Main.coord(12, 0),
        RightArrow: Main.coord(12, 1),
        Plus: Main.coord(12, 2),
        Sword: Main.coord(12, 3),
        WhiteMagic: Main.coord(12, 4),
        BlackMagic: Main.coord(12, 5),
        DmMagic: Main.coord(12, 6),
        Dagger: Main.coord(12, 7),
        Lance: Main.coord(12, 8),
        Axe: Main.coord(12, 9),
        Katana: Main.coord(12, 10),
        Rod: Main.coord(12, 11),
        Staff: Main.coord(12, 12),
        Bow: Main.coord(12, 13),
        Harp: Main.coord(12, 14),
        Whip: Main.coord(12, 15),
        Bell: Main.coord(13, 0),
        Shield: Main.coord(13, 1),
        Helmet: Main.coord(13, 2),
        Armor: Main.coord(13, 3),
        Ring: Main.coord(13, 4)
    }
});

const Regions = {
    Fight: new Region(0, 0, 30, 30),
    Toad: new Region(364, 0, 21, 22),
    Mini: new Region(364, 250, 15, 17),
    MiniDead: new Region(474, 250, 18, 17),
    Mini2: new Region(494, 250, 15, 17),
    MiniDead2: new Region(604, 250, 18, 17),
    Field: new Region(362, 450, 20, 20)
};

const Characters = {
    Butz: characterSheet('butz', 700, 658),
    Lenna: characterSheet('lenna', 754, 654),
    Galuf: characterSheet('galuf', 695, 624),
    Cara: characterSheet('cara', 700, 654),
    Faris: characterSheet('faris', 700, 655)
};

function characterSheet(name, width, height) {
    return new SpriteSheet({
        path: `../Images/${name}.png`,
        sheetWidth: width,
        sheetHeight: height,
        scale: 2,
        glyphs: {
            Dead: Regions.Fight.coord(0, 11),
            Normal: range(0, 10).map(col => Regions.Fight.coord(0, col)),
            Knight: range(0, 10).map(col => Regions.Fight.coord(1, col)),
            Monk: range(0, 10).map(col => Regions.Fight.coord(2, col)),
            Thief: range(0, 10).map(col => Regions.Fight.coord(3, col)),
            Dragoon: range(0, 10).map(col => Regions.Fight.coord(4, col)),
            Ninja: range(0, 10).map(col => Regions.Fight.coord(5, col)),
            Samurai: range(0, 10).map(col => Regions.Fight.coord(6, col)),
            Berserker: range(0, 10).map(col => Regions.Fight.coord(7, col)),
            Hunter: range(0, 10).map(col => Regions.Fight.coord(8, col)),
            MagicKnight: range(0, 10).map(col => Regions.Fight.coord(9, col)),
            WhiteMage: range(0, 10).map(col => Regions.Fight.coord(10, col)),
            BlackMage: range(0, 10).map(col => Regions.Fight.coord(11, col)),
            TimeMage: range(0, 10).map(col => Regions.Fight.coord(12, col)),
            Summoner: range(0, 10).map(col => Regions.Fight.coord(13, col)),
            BlueMage: range(0, 10).map(col => Regions.Fight.coord(14, col)),
            RedMage: range(0, 10).map(col => Regions.Fight.coord(15, col)),
            Mediator: range(0, 10).map(col => Regions.Fight.coord(16, col)),
            Chemist: range(0, 10).map(col => Regions.Fight.coord(17, col)),
            Geomancer: range(0, 10).map(col => Regions.Fight.coord(18, col)),
            Bard: range(0, 10).map(col => Regions.Fight.coord(19, col)),
            Dancer: range(0, 10).map(col => Regions.Fight.coord(20, col))
        }
    });
}

export {
    Menu,
    Characters
};