// import Example from "./scripts/example";
import NoteButton from "./scripts/note_button";
import FruitButton from "./scripts/fruit_button";
import fruits from "./scripts/fruits"
import TileBoard from "./scripts/tile_board"
import PlayBar from "./scripts/play_bar"
document.addEventListener("DOMContentLoaded", () => {
   
    // const snareAudio = new Audio('/Users/danholodak/Documents/coding/app_academy/JavascriptProject/src/sounds/snare.mp3');
    // const snareButtonElement = document.querySelector("#snare")
    // const snareButton = new NoteButton(snareButtonElement, snareAudio);
    //generate 8 fruits, ,  96 tiles
    // const fruitsArray = []
    fruits.forEach(function(fruit){
        // debugger
        new FruitButton(fruit)
    })
    let numMeasures = 1
    let parentEl = document.querySelector(".tile-board-and-playbar")
    for (let i=0; i<numMeasures; i++){
        let options = {id: i, parentEl: parentEl}
        new PlayBar(options)
        new TileBoard(options)
    }
    
});