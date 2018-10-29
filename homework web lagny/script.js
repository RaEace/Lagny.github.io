function greet(){
    window.alert("Hello, it's me");
}

function init()
{
    document.getElementById("task1").src = "Icons/flower2.png";
    let images = document.getElementById("task2").getElementsByTagName("img");
    images[1].src = "Icons/flower2.png";
    images[3].src = "Icons/flower2.png";
    document.getElementById("task3").innerHTML = "<div><p>Your are doing great!</p></div>";
    let image = document.createElement("img");
    image.setAttribute("src", "Icons/flower2.png");
    document.getElementById("task4").appendChild(image);
    let spans = document.getElementById("rainbow").getElementsByTagName("span");
    let colors = ["red", "orange","yellow","green","blue","purple","pink"];

    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
    }
    
    var changeSrc = function (event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]/, '');
            if (filename == "flower1.png") {
                event.target.src = "Icons/flower2.png";
            } else {
                event.target.src = "Icons/flower1.png";
            }
        }
        
        
    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);
    /*let filename = event.target.src.replace(/^.*[\\\/]/, '');*/
}
