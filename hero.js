import {GameObject} from "./gameObject.js";
import {LEFT,RIGHT, UP,DOWN} from "./input.js";
export class Hero extends GameObject {
    constructor({game, sprite,position, scale}){
        super({game, sprite,position, scale});
    }
    update(){
        if(this.game.input.lastKey === UP){
            console.log("moving up");
            this.position.y--;
        } else if(this.game.input.lastKey === DOWN){
            console.log("moving down");
            this.position.y++;
        } else if(this.game.input.lastKey === RIGHT){
            console.log("moving right");
            this.position.x++;
        } else if(this.game.input.lastKey === LEFT){
            console.log("moving left");
            this.position.x--;
        }
        console.log('x = ', this.position.x,' y = ', this.position.y, );
    }
}