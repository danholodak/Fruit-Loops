import Tile from './tile.js';

class TileColumn{
    constructor(options){
        this.id = options.id;
        this.parentEl = options.parentEl;
        this.numTiles = options.numTiles;
        this.tileChildren = [];
        this.populate();
    }

    populate(){
        let ul = document.createElement('ul');
        ul.classList.add("tile-column")
        this.parentEl.appendChild(ul);
        for (let i=0; i<this.numTiles; i++){
            let options = {parentEl: ul}
            let newTile = new Tile(options);
            this.tileChildren.push(newTile)
        }
    }

}
export default TileColumn