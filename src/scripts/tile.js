const notes = ['c','d','e','f','g','a','b','cc']
class Tile{
    constructor(options){
        this.parentEl = options.parentEl;
        this.populate();
        this.clickHandler = this.clickHandler.bind(this);
        this.element.addEventListener("click", this.clickHandler);
        this.glow = this.glow.bind(this);
        this.deglow = this.deglow.bind(this);
        this.played = false;
    }

    populate(){
        let li = document.createElement('li')
        this.element = li
        this.element.classList = ["empty tile"];
        this.parentEl.appendChild(li)
    }

    clickHandler(){
        if (!this.element.classList.contains('empty')){
            this.audio = null;
            this.element.classList = ["empty tile"];
            this.element.innerText = "";
        }else{
            let selectedSound = document.querySelector("ul.notes li.selected")
            if (selectedSound){
                let selectedNote = selectedSound.classList[0]
                this.element.classList.add(selectedNote);
                this.element.classList.remove("empty");
                this.element.classList.add("active");
                this.element.innerText = selectedSound.innerText;
                let instrument = selectedSound.parentElement.id;
                this.audio = new Audio(`./src/sounds/${instrument}/${selectedNote}.mp3`)
            }
            
        }
    }
    glow(){
        this.element.classList.add("glow")
        setTimeout(this.deglow, 200)
    }
    deglow(){
        this.element.classList.remove("glow")
    }
}
export default Tile