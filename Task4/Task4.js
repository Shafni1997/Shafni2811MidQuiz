function arrayfunc(){
    var Movies = ["World War Z", "Lord of The Rings", "Harry Potter", "Tranformers", "Iron Man"];
var FourthArrayVL = Movies[3];
if (FourthArrayVL.charAt(0) === "I") {
    console.log("Yay");
}
else {
    console.log("Nay");
}

var Movies = [];
Movies.push("World War Z")
Movies.push("Lord of The Rings")
Movies.push("Harry Potter")
Movies.push("Iron Man")
Movies.push("Tranformers")
var FourthArrayVL = Movies[3];
if (FourthArrayVL.charAt(0) === "I") {
    console.log("Yay");
}
else {
    console.log("Nay");
}
}

function objectfunc(){
    var car = {
        model: "Benz",
        color: "Black",
        price: 60
    
    };
    
    if (car.price > 50){
        console.log("expensive");
    }
    else{
        console.log("affordable");
    }
    
    console.log(car.color);
}

arrayfunc();
objectfunc();
