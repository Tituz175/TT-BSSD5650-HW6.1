function DogImageAdapter(target) {

    let dogImage = new DogImage(target);

    return {
        loadData: function (argument) {
            dogImage.loadImage(argument);
        },
        loadArrayToTarget: function () {
            dogImage.loadImageToTarget();
        }
    }
}