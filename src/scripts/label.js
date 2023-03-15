class Label {
    constructor(options){
        this.value = options.value
        this.parent= options.parent
        this.populate()
    }
    populate(){
        this.element = document.createElement('div');
        this.element.classList = ["label hidden"];
        let box = document.createElement('div');
        box.classList.add("box");
        let text = document.createElement('h2');
        text.innerText = `${this.value}`;
        box.appendChild(text);
        let point = document.createElement('div');
        point.classList.add("point");
        box.appendChild(point)
        this.element.appendChild(box);
        this.parent.appendChild(this.element);
    }
}
export default Label