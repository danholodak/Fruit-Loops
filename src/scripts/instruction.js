class Instruction{

    constructor(options){
        
        this.closebutton = options.closebutton;
        this.startbutton = options.startbutton;
        this.box = options.box;
        this.closeBox = this.closeBox.bind(this);
        this.openBox = this.openBox.bind(this);
        this.closebutton.addEventListener("click", this.closeBox);
        this.startbutton.addEventListener("click", this.closeBox);
        this.instructionButton = options.instructionButton;
        this.instructionButton.addEventListener("click", this.openBox);
    }

    closeBox(){
        this.box.classList.add("hidden");
        
    }
    openBox(){
        this.box.classList.remove("hidden");
        console.log("unhidden")
    }
}

export default Instruction