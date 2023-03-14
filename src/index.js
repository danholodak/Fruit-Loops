// import Example from "./scripts/example";
import NoteButton from "./scripts/note_button";
import FruitButton from "./scripts/fruit_button";
import fruits from "./scripts/fruits"
import TileBoard from "./scripts/tile_board"
import PlayBar from "./scripts/play_bar"
import ControlButtons from "./scripts/control_buttons";
const tileboards = [];
document.addEventListener("DOMContentLoaded", () => {
   
    fruits.forEach(function(fruit){
        new FruitButton(fruit);
    })
    let numMeasures = 1;
    let parentEl = document.querySelector(".tile-board-and-playbar");
    let options = {parentEl: parentEl};
    for (let i=0; i<numMeasures; i++){
        options = {id: i, parentEl: parentEl};
        new PlayBar(options);
        let tileboard = new TileBoard(options);
        tileboards.push(tileboard);
    }
    options = {parentEl: parentEl, tileboard: tileboards[0]}
    new ControlButtons(options);
    
});