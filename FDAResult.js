function FDAResult(target) {
    result = [];

    this.loadData = function (url) {
        var request = new XMLHttpRequest();

        request.open('GET', url, true);
        request.onload = function () {
            var data = JSON.parse(this.response)
            data = data.results;
            if (request.status >= 200 && request.status < 400) {
                data.forEach((recall) => {
                    result.push(`<br>${recall.reason_for_recall}`)
                })
            } else {
                console.log("error")
            }
        }
        request.send()
    }

    this.loadArrayToTarget = function () {
        if (result.length > 0) {
            target.innerHTML = result.join(" ");
        } else {
            setTimeout(this.loadArrayToTarget, 1000)
        }
    }

}