function yu_gi_oh(num) {
    //creating the the array
    let numbers = [];
    for (let i = 1; i <= num; i++) {
        let currentValueGoingIntoArray = null;
        //conditions
        if (i % 2 == 0) { 
            currentValueGoingIntoArray = "yu";
           
        } 
        
        if (i % 3 == 0) {
            currentValueGoingIntoArray = "gi";
        } 
        
        if (i % 5 == 0) {
            currentValueGoingIntoArray = "oh";
        }
        
        if (i % 2 == 0 && i % 3 == 0) {
            currentValueGoingIntoArray = "yu-gi";
        }
        
        if (i % 2 == 0 && i % 5 == 0) {
            currentValueGoingIntoArray = "yu-oh";
        }
        
        if (i % 3 == 0 && i % 5 == 0) {
            currentValueGoingIntoArray = "gi-oh";
        } 
        
        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            currentValueGoingIntoArray = "yu-gi-oh";
        } 
        
        if (currentValueGoingIntoArray == null) {
            currentValueGoingIntoArray = i;
        }
        numbers.push(currentValueGoingIntoArray);
    }
    return numbers;

}
    
    


console.log(yu_gi_oh(100));