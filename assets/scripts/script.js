//Use pointer events when dealing with inputs more crossplatform
//Listeners
var slider_clr_1 = document.getElementById("clr-1");
var slider_clr_2 = document.getElementById("clr-2");
var slider_clr_3 = document.getElementById("clr-3");

slider_clr_1.oninput = function(){
    inputValidation(slider_clr_1);
    changeColor();
}
slider_clr_2.oninput = function(){
    inputValidation(slider_clr_2);
    changeColor();
}
slider_clr_3.oninput = function(){
    inputValidation(slider_clr_3);
    changeColor();
}

window.addEventListener("load", function loadAction(){
    slider_clr_1.value = 10;
    slider_clr_2.value = 72;
    slider_clr_3.value = 22;
    setAnswer();
    changeColor();
    setColourText();
    //console.log(document.getElementById("clr-sol").style.backgroundColor)
})

document.getElementById("btn_submit").onclick = function() {
    //console.log(document.getElementById("clr-sol").style.backgroundColor);
    answer = document.getElementById("clr-guess").style.backgroundColor.toString();
    guess = document.getElementById("clr-sol").style.backgroundColor.toString();
    matchUserCheck();
    
}

function inputValidation(inputElement){
    if (inputElement.value.length > 3){
        inputElement.value = inputElement.value.slice(0,3);
    }
    if (inputElement.value > 255){
        inputElement.value = 255;
    }
}

function setColourText(){
    str_rgb_sol = document.getElementById("clr-sol").style.backgroundColor.toString().replace("rgb","");
    arr_rgb_sol = str_rgb_sol.replace("(","").replace(")","").replace(" ","").replace(" ","").split(',');

    str_rgb_g = document.getElementById("clr-guess").style.backgroundColor.toString().replace("rgb","");
    arr_rgb_g = str_rgb_g.replace("(","").replace(")","").replace(" ","").replace(" ","").split(',');

    //console.log(arr_rgb);
    if (document.getElementById("value").style.color === "yellow"){
        document.getElementById("value").style.color = "black";
    }
    
    document.getElementById("value").innerHTML = str_rgb_g;

    matchCheck(arr_rgb_sol[0],arr_rgb_sol[1],arr_rgb_sol[2]);

}


function matchUserCheck(){
    str_rgb_g = document.getElementById("clr-sol").style.backgroundColor.toString().replace("rgb","");
    arr_rgb_g = str_rgb_g.replace("(","").replace(")","").replace(" ","").replace(" ","").split(',');
    //console.log(arr_rgb_g)
    if (arr_rgb_g[0]===slider_clr_1.value && arr_rgb_g[1]===slider_clr_2.value && arr_rgb_g[2]===slider_clr_3.value){
        document.getElementById("value").style.color = "lightgreen";
        setTimeout(setBlack, 1500);
        setAnswer();
    } else {
        document.getElementById("value").style.color = "red";
        setTimeout(setBlack, 1500);
    }
}

function setBlack(){
    document.getElementById("value").style.color = "black"
}

function matchCheck(){

    Value1 = slider_clr_1.value;
    Value2 = slider_clr_2.value;
    Value3 = slider_clr_3.value;

    arr_rgb_sol = str_rgb_sol.replace("(","").replace(")","").replace(" ","").replace(" ","").split(',');

    numCorrect = 0;

    if (arr_rgb_sol[0]===Value1){
        numCorrect++;
    }
    if (arr_rgb_sol[1]===Value2){
        numCorrect++;
    }
    if (arr_rgb_sol[2]===Value3){
        numCorrect++;
    }

    //console.log(numCorrect)

    if (numCorrect===0){
        document.getElementById("value").style.color = "black";
    } 
    if (numCorrect===1){
        document.getElementById("value").style.color = "orange";
    }
    if (numCorrect===2){
        document.getElementById("value").style.color = "yellow";
    }
    if (numCorrect===3){
        document.getElementById("value").style.color = "yellow";
    }


}

function changeColor(){
    document.getElementById("clr-guess").style.backgroundColor = rgb(document.getElementById("clr-1").value,document.getElementById("clr-2").value,document.getElementById("clr-3").value);
    setColourText()
}

function rgb(r,g,b){
    return "rgb("+r+","+g+","+b+")";
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

function setAnswer(){
    col_r = randomNumber();
    col_g = randomNumber();
    col_b = randomNumber();

    str_rgb = rgb(col_r,col_g,col_b);

    document.getElementById("clr-sol").style.innerHTML = col_r + "," + col_g + "," + col_b ;
    document.getElementById("clr-sol").style.backgroundColor = str_rgb;

}

function randomNumber(){
    return Math.floor(Math.random()*255);
}
