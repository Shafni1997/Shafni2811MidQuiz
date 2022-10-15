var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


readline.question('Please enter a number: ' , function (num){

    if (num>=0) {
        if(num % 2 === 0) {
            console.log("This Is An Even Number");
        }
        
        else {
            console.log("This Is An Odd Number");
        }
        
        
    } else {
        console.log("Invalid Number")
    }
    
    readline.close();

})