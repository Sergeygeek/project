class Carousel {
    constructor(source, container, imgContainer) {
        this.source = source;
        this.container = container;
        this.imgContainer = imgContainer;
        this.images = [];
        this.curImg = 0;
        this._init(source);
    }
    _init(source) {
        fetch(source)
            .then(result => result.json())
            .then(data => {
                for(let img of data) {
                    this.images.push(img);
                }
                this._renderImg();
            })
    }
    _renderImg() {
        let src = this.images[this.curImg].src;

        $(this.imgContainer).attr("src", src);

        $(this.container).click((e) => {
            e.preventDefault();        
            if(e.target.classList.contains('left')){
                this.curImg = --this.curImg;
                this._renderImg();
            } else if (e.target.classList.contains('right')){
                this.curImg = ++this.curImg;
                this._renderImg();
            } else {
                return
            }
        }) 
    }

}