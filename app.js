function addition(){
    let no1 = parseFloat(document.getElementById("num1").value);
    let no2 = parseFloat(document.getElementById("num2").value);

    let sum = no1 + no2 ;

    document.getElementById("final").innerHTML = "Total Is : " + sum;
}
