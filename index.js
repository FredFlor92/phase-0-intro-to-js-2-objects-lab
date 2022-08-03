// Write your solution in this file!
//o start, assign an employee variable to an Object containing name and streetAddress keys
var employee = {
    name : "",
    streetAddress : ""
};
//updateEmployeeWithKeyAndValue(): this function should take in three arguments: an employee Object, a key and a value
//This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!
function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, { [key]: value})
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    let newEmployee = Object.assign({}, employee)
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}