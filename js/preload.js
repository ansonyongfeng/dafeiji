$(document).ready(function(){
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("complete", handleComplete, this);
    queue.loadManifest([
        {id: "myImage", src:"assets/image0.jpg"}
    ]);
    function handleComplete() {
        var image = queue.getResult("myImage");
        document.body.appendChild(image);
        $('#thisImageCanvas').append(image);
    }
})

