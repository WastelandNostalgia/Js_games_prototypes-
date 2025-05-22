export const LEFT = "LEFT";
export const RIGHT = "RIGHT";
export const UP = "UP";
export const DOWN = "DOWN";

export class Input{
    constructor() {
        this.keys = [];
        window.addEventListener('keydown', e=>{
            if (e.key === "ArrowUp" || e.key.toLowerCase() === "w"|| e.key.toLowerCase() === "ц"){
                this.keyPressed(UP);
            } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s"|| e.key.toLowerCase() === "ы"){
                this.keyPressed(DOWN);
            } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d"|| e.key.toLowerCase() === "в"){
                this.keyPressed(RIGHT);
            } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a"|| e.key.toLowerCase() === "ф"){
                this.keyPressed(LEFT);
            }
        })
        window.addEventListener('keyup', e=>{
            if (e.key === "ArrowUp" || e.key.toLowerCase() === "w"|| e.key.toLowerCase() === "ц"){
                this.keyReleased(UP);
            } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s"|| e.key.toLowerCase() === "ы"){
                this.keyReleased(DOWN);
            } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d"|| e.key.toLowerCase() === "в"){
                this.keyReleased(RIGHT);
            } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a"|| e.key.toLowerCase() === "ф"){
                this.keyReleased(LEFT);
            }
        })
    }
    keyPressed(key){
        if(this.keys.indexOf(key) === -1){
            this.keys.unshift(key);
        }
        console.log(key);
    }

    keyReleased(key){
        const index = this.keys.indexOf(key);
        if(index === -1) return;
        this.keys.splice(index, 1);
    }
    get lastKey(){
        return this.keys[0];
    }
}