import TileColumn from './tile_column.js';

class TileBoard{
    constructor(options){
        this.id = options.id
        this.parentEl = options.parentEl
        this.numcolumns = 16;
        this.columns = []
        this.populate()
    }

    populate(){
        let boardUl = document.createElement('ul')
        boardUl.classList.add("tile-board")
        this.parentEl.appendChild(boardUl)
        for (let i=0; i<this.numcolumns; i++){
            let options = {id: i, parentEl: boardUl, numTiles: 6}
            let newCol = new TileColumn(options)
            this.columns.push(newCol)
        }
    }

}
export default TileBoard
