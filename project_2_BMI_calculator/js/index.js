function calculateBtn(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    weight = parseFloat(weight);
    height = parseFloat(height);
    height = height ** 2;

    var bmi = weight / height;
    bmi = bmi.toFixed(2);

    var bmiValue = document.getElementById("bmiValue");
    let health = "";
    if(bmi < 18.5) {
        health = " Underweight";
    } else if ( bmi < 25){
        health = " Normal weight";
    } else if ( bmi < 30) {
        health = " Overweight";
    } else {
        health = " Obese";
    }

    bmiValue.innerHTML = bmi;
    bmiValue.innerHTML += health;

    document.getElementById("bmiId").style.display = "flex";

    console.log(weight, height, bmi);
}

function resetValue(){
    document.getElementById("weight").value = null;
    document.getElementById("height").value = null;
}