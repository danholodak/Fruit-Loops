class PlayBar{
    constructor(options){
        this.parentEl = options.parentEl;
        this.id = options.id
        this.populate()
    }

    populate(){
        let div = document.createElement('div')
        div.classList.add("playbar")
        let playhead = document.createElement('img')
        playhead.classList.add("playhead")
        playhead.src = './images/playhead.png'
        div.appendChild(playhead)
        this.parentEl.appendChild(div)
    }
}
export default PlayBar