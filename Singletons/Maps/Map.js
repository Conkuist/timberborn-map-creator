export class Map {

    constructor(width, height, value) {

        let array = new Array(height).fill(value).map(e => new Array(width).fill(e));
        
        this.Array = array.flat().join(" ");

    }

}