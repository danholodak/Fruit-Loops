

class NoteButton {

    constructor(options){
        this.audio = options.audio;
        this.element = options.element; //element on the html page
        this.id = options.id
        this.emoji = options.emoji
        this.parent = options.parent
        
        this.handleClick = this.handleClick.bind(this)
        this.populate()
        this.element.addEventListener("click", this.handleClick)
        
    }

    populate(){

    }

    handleClick(){
        // console.log("sound!")
        // debugger
        this.audio.play()
        let selectedNote = document.querySelector("ul.notes li.selected")
        if (selectedNote){
            selectedNote.classList.remove('selected');
        }
        // allnotes.forEach(function(note){
        //     note.classList.remove('selected');
        // })
        this.element.classList.add('selected');
        this.selected = !this.selected;
    }
    
    
}

export default NoteButton;