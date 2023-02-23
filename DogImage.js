function DogImage(target) {
    result = null;
    target = target;

    this.loadImage = function (url) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true)
        request.onload = function () {
            var data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                result = data.message;
            } else {
                console.log("error")
            }
        }
        request.send();
    };

    this.loadImageToTarget = function () {
        if(result != null) {
            let dogImg = document.createElement("img");
            dogImg.style.width = "100%"
            dogImg.src = result
            target.style.width = "30rem";
            target.innerHTML = "<br />"
            target += target.append(dogImg)
        } else {
            setTimeout(this.loadImageToTarget, 1000);
        }
    };
}