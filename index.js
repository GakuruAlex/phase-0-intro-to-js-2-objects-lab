const employee = {
name:"Alex",
streetAddress:"Site,Naivasha",
};

function updateEmployeeWithKeyAndValue(employee,key,value){

    return {...employee,[key]:value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key , value){
      return Object.assign(employee,{[key]:value});
}
function deleteFromEmployeeByKey(employee, key){

      let newEmployee=Object.assign({},employee)

      delete newEmployee[key]

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee

}