const findTheOldest = function(array) {
    let person = array
        .reduce((acc, item) => { 
            if(Object.keys(acc).length === 0){
                acc = item
            }else {
                let currentYear = new Date().getFullYear()
                let ageAcc = (acc.yearOfDeath || currentYear) - acc.yearOfBirth
                let ageItem = (item.yearOfDeath || currentYear) - item.yearOfBirth

                if( ageAcc < ageItem ){
                    acc = item
                }
            }
            return acc
            
        } 
        ,{})
    return person        
};

// Do not edit below this line
module.exports = findTheOldest;
