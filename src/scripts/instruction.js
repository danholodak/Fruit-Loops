class Instruction{

    constructor(options){
        
        this.closebutton = options.closebutton;
        this.startbutton = options.startbutton;
        this.box = options.box;
        this.closeBox = this.closeBox.bind(this);
        this.closebutton.addEventListener("click", this.closeBox);
        this.startbutton.addEventListener("click", this.closeBox);

    }

    closeBox(){
        this.box.classList.add("hidden");
    }
}

export default Instruction