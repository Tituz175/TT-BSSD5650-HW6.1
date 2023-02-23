// console.log("Hello world!");
let resultTypes = [
    function (target) { return new CatFactAdapter(target) },
    function (target) { return new FDAResult(target) },
    function (target) { return new DogImageAdapter(target) },
]

let urls = [
    "https://catfact.ninja/fact",
    "http://api.fda.gov/food/enforcement.json?limit=10",
    "https://dog.ceo/api/breeds/image/random"
];

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("submit").
        addEventListener("click", (event) => {
            createNewResult();
        })
});

function createNewResult() {
    let div = document.createElement("div");
    document.getElementById("results").prepend(div);

    let randomIndex = Math.floor(Math.random() * resultTypes.length);
    let result = resultTypes[randomIndex](div);
    result.loadData(urls[randomIndex]);
    result.loadArrayToTarget();
}