import NoteButton from "./note_button";
const notes = ['c','d','e','f','g','a','b','cc']

class FruitButton{
    constructor(options){
        this.emoji = options.emoji;
        this.selected = options.selected;
        this.value = options.value
        this.id = options.id
        this.populate()
        this.clickHandler = this.clickHandler.bind(this);
        this.element.addEventListener("click", this.clickHandler);

    }
    populate(){
        let ul = document.querySelector("#instruments");
        let li = document.createElement('li');
        this.element = li;
        li.innerText = this.emoji;
        li.id = this.id;
        li.setAttribute("name", this.value)
        if (this.selected){
            li.classList.add('selected');
        }
        li.classList.add('fruit')
        ul.appendChild(li);
        let div = document.querySelector("#fruits-and-notes");
        let notesUl = document.createElement('ul')
        notesUl.classList.add("hidden")
        notesUl.id = this.value;
        notesUl.classList.add("notes")
        let emoj = this.emoji
        let instrument = this.value
        notes.forEach(function(val){
            let options = {emoji: emoj, id: val,
                parent: notesUl, audio: new Audio(`../src/sounds/${instrument}/${val}.mp3`)}
            new NoteButton(options)
        })
        div.appendChild(notesUl)

    }

    clickHandler(){
        let h2 = document.querySelector("#select-note");
        h2.classList.remove("hidden");
        let allfruits = document.querySelectorAll(".fruit");
        allfruits.forEach(function(fruit){
            fruit.classList.remove('selected');
        })
        this.element.classList.add('selected');
        this.selected = !this.selected;
        let viznotes = document.querySelector("ul.notes:not(.hidden)");
        if (viznotes){
            viznotes.classList.add("hidden");
        }
        let mynotes = document.querySelector(`ul#${this.value}`);
        mynotes.classList.remove("hidden");

    }

}
export default FruitButton