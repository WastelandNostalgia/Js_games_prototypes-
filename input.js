const LEFT = "LEFT";
const RIGHT = "RIGHT";
const UP = "UP";
const DOWN = "DOWN";

export class Input{
    constructor() {
        this.keys = [];
        window.addEventListener('keydown', e=>{
            if (e.key === "ArrowUp"|| e.key.toLowerCase() === "w"){
                this.keyPress(UP);
            }
        })
        window.addEventListener('keyup', e=>{
            if (e.key === "ArrowUp"|| e.key.toLowerCase() === "w"){
                this.keyRelease(UP);
            }
        })
    }
    keyPress(key){
        if(this.keys.indexOf(key) === -1){
            this.keys.unshift(key);
        }
        console.log(key, this.keys);
    }

    keyRelease(key){
        const index = this.keys.indexOf(key);
        this.keys.splice(index, 1);
        console.log(key, this.keys);
    }
}