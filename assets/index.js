    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const object = [{
        name: 'apple',
        positionX: 1.25,
        positionY: 2.25,
        imgW: 25,
        imgH: 13,
        textInterval: 1.2
    }, {
        name: 'book',
        positionX: 2.8,
        positionY: 1.67,
        imgW: 12,
        imgH: 17,
        textInterval: 1.6
    }, {
        name: 'balerina',
        positionX: 2,
        positionY: 2.13,
        imgW: 25,
        imgH: 5,
        textInterval: 2.5
    }, {
        name: 'shoe',
        positionX: 2.05,
        positionY: 1.48,
        imgW: 15,
        imgH: 13,
        textInterval: 5
    }]
    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        addElement();
        addHead();
    }
    // Draw header 
    function addHead() {
        context.drawImage(document.getElementById('tutorial'), canvas.width / 2.9, 30, canvas.width / 3.25, canvas.height / 4);
        let txtOne = "Find all the";
        context.fillStyle = '#360d0d';
        context.font = `${correctWidthText(canvas.width,arguments[0])}px serif`;
        context.textAlign = 'center';
        context.textBaseline = 'bottom';
        context.fillText(txtOne, canvas.width / 2, correctHeightText(canvas.height, 0));
        let txtTwo = "hidden objects!"
        context.fillStyle = '#360d0d';
        context.font = `${correctWidthText(canvas.width, arguments[0])}px serif`;
        context.textAlign = 'center';
        context.textBaseline = 'bottom';
        context.fillText(txtTwo, canvas.width / 2, correctHeightText(canvas.height, 1));
    }

    //This function  takes massive-object "object" and then created  
    function addElement() {
        object.forEach((element) => {
            let img = document.getElementById(element.name);
            let width = canvas.width - canvas.width / element.positionX;
            let height = canvas.height / element.positionY;
            let imgW = (canvas.width - img.width) / element.imgW;
            let imgH = (canvas.height - img.height) / element.imgH;
            createElement(img, element.name, width, height, imgW, imgH, element.textInterval);
        });
    }
    //Draw in canvas image and text in the bottom
    function createElement() {
        let arg = [...arguments];
        functionShine(arg[0], arg[1], arg[2], arg[3], arg[4], arg[5]);
        context.drawImage(arg[0], arg[2], arg[3], arg[4], arg[5]);
        context.fillStyle = '#360d0d';
        context.font = `${correctWidthText(canvas.width)}px serif`;
        context.textAlign = 'center';
        context.fillText(arg[1], canvas.width - canvas.width / arg[6], correctHeightBottomText(canvas.height));
        functionClick(arg[2], arg[3], arg[4], arg[5], arg[1], arg[0]);

    }
    // Click function 
    function functionClick() {
        canvas.addEventListener('click', e => {
            // Checking for object, if empty,click doesn`t work
            if (Object.keys(object).length != 0) {
                // Compare client x axis and image x axios and also client y axis and image y axios
                if (arguments[0] < e.clientX && e.clientX < (arguments[0] + arguments[2]) && arguments[1] < e.clientY && e.clientY < (arguments[1] + arguments[3])) {
                    context.clearRect(arguments[0], arguments[1], arguments[2], arguments[3]);
                    context.clearRect(arguments[0] - 2.5, arguments[1] - 2.5, arguments[2] + 5, arguments[3] + 5);

                    //delete text function
                    deleteElement(arguments[4])
                }
            } else {
                setTimeout(() => {
                    addFinish()
                }, 1500);
            }
        })
    }

    // Delete text from canvas and massive element
    function deleteElement() {
        context.clearRect(0, canvas.height - canvas.height / 5.7, canvas.width, canvas.height / 5.7);
        object.forEach((element, value) => {
            if (element.name == arguments[0]) {
                object.splice(value, 1)
            }
        });
        addElement();
    }
    // Adding logo and CTA btn
    function addFinish() {
        clearInterval(timer)
        context.clearRect(0, 0, canvas.width, canvas.height);
        const bg = document.getElementById('bg__blur');
        context.drawImage(bg, 0, 0, canvas.width, canvas.height);
        const button = document.getElementById('button');
        context.drawImage(button, canvas.width / 2.9, canvas.height / 1.8, canvas.width / 3.25, canvas.height / 7);
        let play__text = "Play Free(visited my repositories)"
        context.fillStyle = '#360d0d';
        context.font = `27px serif`;
        context.textAlign = 'center';
        context.fillText(play__text, canvas.width / 2, canvas.height / 1.58);
        canvas.addEventListener('click', e => {
            if (canvas.width / 2.9 < e.clientX && e.clientX < (canvas.width / 2.9 + canvas.width / 3.25) && canvas.height / 1.8 < e.clientY && e.clientY < (canvas.height / 1.8 + canvas.height / 7)) {
                window.location.href = "https://github.com/Teffety";
            }
        })
    }
    //Text header
    function correctHeightText(paramHeight, size) {
        if (paramHeight > 1000) return paramHeight / (6.3 - size * 2);
        else if (1000 > paramHeight && paramHeight > 700) return paramHeight / (6 - size * 2);
        else if (700 > paramHeight && paramHeight > 500) return paramHeight / (5 - size);
        else if (paramHeight < 500) return paramHeight / (4.5 - size);
    }
    // Text Bottom
    function correctHeightBottomText(paramHeight) {
        if (paramHeight > 1000) return paramHeight - paramHeight / 25;
        else if (1000 > paramHeight && paramHeight > 400) return paramHeight - paramHeight / 27;
        else if (paramHeight < 400) return paramHeight - paramHeight / 40
    }
    //correct text width
    function correctWidthText(paramWidth, size = 0) {
        if (paramWidth > 980) return paramWidth / 33 - size;
        else if (paramWidth < 500) return paramWidth / 27 - size;
        else return paramWidth / 22 - size;
    }
    //Shining function
    function functionShine() {
        let massive = [];
        object.forEach(element => {
            massive.push(element.name)
        });
        setTimeout(() => {
            if (arguments[1] == massive[0]) {
                context.clearRect(arguments[2], arguments[3], arguments[4], arguments[5]);
                context.drawImage(arguments[0], arguments[2] - 2.5, arguments[3] - 2.5, arguments[4] + 5, arguments[5] + 5);
                let imgData = context.getImageData(arguments[2] - 2.5, arguments[3] - 2.5, arguments[4] + 5, arguments[5] + 5);
                let pixels = imgData.data;
                let numPixels = imgData.width * imgData.height;
                for (var i = 0; i < numPixels; i++) {
                    pixels[i * 4] = 255; // Red
                    pixels[i * 4 + 1] = 255; // Green
                    pixels[i * 4 + 2] = 0; // Blue
                };
                context.putImageData(imgData, arguments[2] - 2.5, arguments[3] - 2.5);
                context.drawImage(arguments[0], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
        }, 5000);
    }
    /* */
    //Text Pulsar, i doesn`t write this function with new Date and  requestAnimationFrame, i prefer using simple variant
    let i = 1;
    let timer = setInterval(() => {
        if (i <= 0) i = 1;
        if (i < 2) {
            i -= 0.019;
            addHead(i)
        }
    }, 1000 / 60);

    resizeCanvas();