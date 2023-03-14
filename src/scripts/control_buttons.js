
class ControlButtons{
    constructor(options){
        this.parentEl = options.parentEl;
        this.tileboard = options.tileboard;
        this.playing = false;
        this.bpms = 90;
        this.ms = ((.04/this.bpms)* 60000);
        this.populate();
        //for animation
        this.pos = 0;
        this.PPclickHandler = this.PPclickHandler.bind(this);
        this.interval = null;
        this.PPElement.addEventListener("click", this.PPclickHandler);
        this.playhead = document.getElementsByClassName("playhead")[0];
        //buttons for changing BPMs
        this.bpmClickHandler = this.bpmClickHandler.bind(this);
        this.minus.addEventListener("click", this.bpmClickHandler);
        this.plus.addEventListener("click", this.bpmClickHandler);
        //button to clear board
        this.clearTheBoard = this.clearTheBoard.bind(this);
        this.clearBoard.addEventListener("click", this.clearTheBoard);
    }
    clearTheBoard(){
        console.log("clearing")
        for (let i=0; i< this.tileboard.columns.length; i++){
            this.tileboard.columns[i].tileChildren.forEach(function(child){
                child.audio = null;
                child.element.classList = ["empty tile"]
                child.element.innerText = ""
            })
        }
    }
    bpmClickHandler(evt){
        if (evt.target.id === "+"){
            if (this.bpms < 200){
                this.bpms += 10
            }
        }else if (evt.target.id === "-"){
            if (this.bpms > 60){
                this.bpms -= 10
            }
        }
        this.bpmsdisplay.innerText = `${this.bpms} BPMs`
        this.ms = ((.04/this.bpms)* 60000);
        this.PPclickHandler()
        this.PPclickHandler()
    }
    populate(){
        let buttonCenter = document.createElement('div')
        this.element = buttonCenter;
        buttonCenter.classList.add("buttons");
        let playbar = document.querySelector("div.playbar");
        this.parentEl.insertBefore(buttonCenter, playbar);
        let button = document.createElement('button');
        this.PPElement = button;
        button.innerText = 'Play';
        button.classList.add("play-pause");
        this.element.appendChild(button);
        let minus = document.createElement('button');
        this.minus = minus;
        minus.innerText = ' - ';
        minus.id = '-';
        let bpms = document.createElement('h2');
        this.bpmsdisplay = bpms;
        bpms.innerText = '90 BPMs';
        bpms.id = 'bpms';
        let plus = document.createElement('button');
        this.plus = plus;
        plus.innerText = ' + ';
        plus.id = "+";
        let bpmdiv = document.createElement('section')
        bpmdiv.id = "bpm-control"
        bpmdiv.append(minus);
        bpmdiv.append(bpms);
        bpmdiv.append(plus);
        this.element.append(bpmdiv);
        let clearBoard = document.createElement('button');
        this.clearBoard = clearBoard;
        clearBoard.innerText = "Clear Board";
        this.element.append(clearBoard);
    }
    PPclickHandler(){
        this.playhead = document.querySelector("img.playhead")
        this.playing = !this.playing;
        this.playing? this.PPElement.innerText = 'Pause' : this.PPElement.innerText = 'Play';
        console.log(this.playing? "playing" : "pausing")
        frame = frame.bind(this);
        if (this.playing){
            this.interval = setInterval(frame, this.ms);
        }else{
            clearInterval(this.interval);
        }
        function frame(){
            if (this.pos < 99) {
                this.pos++;
                this.playhead.style.marginLeft = this.pos + "%"; 
                let section = Math.floor(this.pos/6.25)
                this.tileboard.columns[section].tileChildren.forEach(function(child){
                    if (child.audio){
                        child.audio.play()
                        child.glow()
                    }
                }) 
                
              } else {
                this.pos = 0;
              }
        }
    
    }
}
export default ControlButtons