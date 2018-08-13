var sideA = parseInt (prompt("Enter side A"));
var sideB =parseInt(prompt("Enter side B"));
var sideC = parseInt(prompt("Enter side C"));
if (sideA+sideB<=sideC || sideB+sideC<=sideA || sideA+sideB<=sideC) {
alert("not a triangle");
}
else if (sideA ===sideB && sideB ===sideC) {
  alert("Equilateral triangle");
}
else if(sideA ===sideB && sideB !==sideC || sideA ===sideC && sideC !==sideB){
alert("Isoscles");
}
else{
  alert("scalene")
}
