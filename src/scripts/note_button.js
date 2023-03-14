

class NoteButton {

    constructor(options){
        this.audio = options.audio;
        this.id = options.id
        this.emoji = options.emoji
        this.parent = options.parent
        this.handleClick = this.handleClick.bind(this)
        this.populate()
        this.element.addEventListener("click", this.handleClick)
    }

    populate(){
        this.element = document.createElement('li');
        this.element.innerText = this.emoji;
        this.element.classList.add(this.id);
        this.parent.appendChild(this.element);
    }

    handleClick(){
        this.audio.play()
        let selectedNote = document.querySelector("ul.notes li.selected")
        if (selectedNote){
            selectedNote.classList.remove('selected');
        }
        this.element.classList.add('selected');
        this.selected = !this.selected;
    }
    
    
}

export default NoteButton;