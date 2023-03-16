import demoBoardSetup from './demo'
class ControlButtons{
    constructor(options){
        
        this.demoBoardSetup = demoBoardSetup;
        this.parentEl = options.parentEl;
        this.tileboard = options.tileboard;
        this.playing = false;
        this.bpms = 90;
        this.savedBoard = null;
        this.ms = ((.04/this.bpms)* 60000); //equation converts bpms to ms per % of playbar crossed
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
        this.setupDemo = this.setupDemo.bind(this);
        this.demo.addEventListener("click", this.setupDemo);
        this.loadSave = this.loadSave.bind(this);
        this.load.addEventListener("click", this.loadSave);
        this.saveBoard = this.saveBoard.bind(this);
        this.save.addEventListener("click", this.saveBoard);
        

    }
    setupDemo(){
        for (let i=0; i< this.tileboard.columns.length; i++){
            for (let j=0; j< this.tileboard.columns[0].tileChildren.length; j++){
                let child = this.tileboard.columns[i].tileChildren[j]
                child.audio = this.demoBoardSetup[i][j].audio;
                child.element.classList = this.demoBoardSetup[i][j].classList;
                child.element.innerText = this.demoBoardSetup[i][j].emoji;
            }
        }

    }
    loadSave(){
        if (this.savedBoard){
            for (let i=0; i< this.tileboard.columns.length; i++){
                for (let j=0; j< this.tileboard.columns[0].tileChildren.length; j++){
                    let child = this.tileboard.columns[i].tileChildren[j]
                    child.audio = this.savedBoard[i][j].audio;
                    child.element.classList = this.savedBoard[i][j].classList;
                    child.element.innerText = this.savedBoard[i][j].emoji;
                }
            }
        }

    }
    saveBoard(){
        this.savedBoard = []
        for (let i=0; i< this.tileboard.columns.length; i++){
            let column = []
            for (let j=0; j< this.tileboard.columns[0].tileChildren.length; j++){
                let child = this.tileboard.columns[i].tileChildren[j];
                let classlist = ""
                for(let a=0; a<child.element.classList.length; a++){
                    classlist +=`${child.element.classList[a]}`;
                    if (a<child.element.classList.length-1){
                        classlist += " ";
                    }
                }
                let childProperties = {audio: child.audio? child.audio : null, classList: classlist, emoji: child.element.innerText? child.element.innerText : "" };
                column.push(childProperties);
            }
            this.savedBoard.push(column);
        }

    }
    clearTheBoard(){
        for (let i=0; i< this.tileboard.columns.length; i++){
            this.tileboard.columns[i].tileChildren.forEach(function(child){
                child.audio = null;
                child.element.classList = ["empty tile"];
                child.element.innerText = "";
            })
        }
    }
    bpmClickHandler(evt){
        if (evt.target.id === "+"){
            if (this.bpms < 200){
                this.bpms += 10;
            }
        }else if (evt.target.id === "-"){
            if (this.bpms > 60){
                this.bpms -= 10;
            }
        }
        this.bpmsdisplay.innerText = `${this.bpms} BPMs`;
        this.ms = ((.04/this.bpms)* 60000);
        this.PPclickHandler();
        this.PPclickHandler();
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
        bpmdiv.id = "bpm-control";
        bpmdiv.append(minus);
        bpmdiv.append(bpms);
        bpmdiv.append(plus);
        this.element.append(bpmdiv);
        let clearBoard = document.createElement('button');
        this.clearBoard = clearBoard;
        clearBoard.innerText = "Clear Board";
        this.element.append(clearBoard);
        let demo = document.createElement('button');
        this.demo = demo;
        demo.innerText = "Demo Setup";
        this.element.append(demo);
        let save = document.createElement('button');
        this.save = save;
        save.innerText = "Save Loop";
        this.element.append(save);
        let load = document.createElement('button');
        this.load =load;
        load.innerText = "Load Saved Loop";
        this.element.append(load);
    }
    PPclickHandler(){
        this.playhead = document.querySelector("img.playhead");
        this.playing = !this.playing;
        this.playing? this.PPElement.innerText = 'Pause' : this.PPElement.innerText = 'Play';
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
                let section = Math.floor(this.pos/6.25);
                this.tileboard.columns[section].tileChildren.forEach(function(child){
                    if (child.audio && !child.played){
                        child.audio.play();
                        child.glow();
                        child.played = true;
                    }
                }) 
                
              } else {
                this.pos = 0;
                for(let i=0; i<this.tileboard.columns.length; i++){
                    this.tileboard.columns[i].tileChildren.forEach(function(child){
                        child.played = false;
                    })
                }
              }
        }
    
    }
}
export default ControlButtons