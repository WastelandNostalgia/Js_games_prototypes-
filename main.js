import {World} from "./world.js";
import {Hero} from "./hero.js";
import {Input} from "./input.js";
export const TILE_SIZE = 32;
export const COLS = 15;
export const ROWS = 20;

const GAME_WIDTH = TILE_SIZE * COLS;
const GAME_HEIGHT = TILE_SIZE * ROWS;

window.addEventListener('load', function () {
    const canvas = document.querySelector('#canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    const world = new World();
    world.drawGrid(ctx);

    const myHero = new Hero({
        position: {x:5, y:2},
    });
    myHero.draw(ctx);
    const input = new Input();
})