document.addEventListener('DOMContentLoaded', function () {
    class Options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }

        createDiv() {
            let newDiv = document.createElement('div');
            document.body.appendChild(newDiv);
            let param = `height:${this.height}px;width:${this.width}px;background-color:${this.bg};font-size:${this.fontSize}px;text-align:${this.textAlign};`;
            newDiv.style.cssText = param;
        }

    }

    let options = new Options(400, 500, 'red', 20, 'center');
    console.log(options.createDiv());
});

