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
        playhead.src = '/Users/danholodak/Documents/coding/app_academy/JavascriptProject/images/playhead.png'
        div.appendChild(playhead)
        this.parentEl.appendChild(div)
    }
}
export default PlayBar