// star pyramid Question
function Star(n){
    for(var i=0; i<n; i++){
        console.log("*".repeat(i));
    }
}

// employees = {emp1: {id: 1, name: 'anuva'}, emp2: {id: 2, name: 'pandya'}}

function Employess(array){
    employessList= [];
    for(var i =0; i<array.length; i++){
        emp = {};
        emp["id"]= i;
       emp["name"]= array[i];
       employessList.push(emp);
    }
    return employessList;
}