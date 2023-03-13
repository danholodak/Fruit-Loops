const notes = ['c','d','e','f','g','a','b','cc']
class Tile{
    constructor(options){
        this.parentEl = options.parentEl;
        this.populate();
        this.clickHandler = this.clickHandler.bind(this);
        this.element.addEventListener("click", this.clickHandler);
    }

    populate(){
        let li = document.createElement('li')
        this.element = li
        li.classList.add("empty");
        li.classList.add("tile")
        this.parentEl.appendChild(li)

    }

    clickHandler(){
        console.log("clicked")
        if (!this.element.classList.contains('empty')){
            // debugger
            this.audio = null;
            this.element.classList = ["tile empty"]
            this.element.innerText = ""
        }else{
            let selectedSound = document.querySelector("ul.notes li.selected")
            if (selectedSound){
                let selectedNote = selectedSound.classList[0]
                this.element.classList.add(selectedNote);
                this.element.classList.remove("empty");
                this.element.innerText = selectedSound.innerText;
                let instrument = selectedSound.parentElement.id;
                this.audio = new Audio(`/Users/danholodak/Documents/coding/app_academy/JavascriptProject/src/sounds/${instrument}/${selectedNote}.mp3`)
            }
            
        }
    }
    playbarHandler(){

    }

}
export default Tile