function CatFact(target) {
    result = null;

    this.loadFact = function (url) {
        var request = new XMLHttpRequest();

        request.open('GET', url, true);
        request.onload = function () {
            var data = JSON.parse(this.response)

            if (request.status >= 200 && request.status < 400) {
                result = `<br>${data.fact}`;
            } else {
                console.log("error")
            }
        }
        request.send()
    }

    this.loadArrayToTarget = function () {
        if (result != null) {
            target.innerHTML = result;
        } else {
            setTimeout(this.loadArrayToTarget, 1000)
        }
    }

}