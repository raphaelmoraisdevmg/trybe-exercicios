const employeeGenerator =(fullname) =>{
const email = fullname.toLowerCase().split(' ').join('_');
return {fullname, email: `${email}@betrybe.com`}
}
const newEmployees = (employeeGenerator) => {
    const employees = {
        id1: employeeGenerator('Pedro Guerra'),
        id2: employeeGenerator('Luiza Drumond'),
        id3: employeeGenerator('Carla Paiva'),
    }
    return employees
};
console.log(newEmployees(employeeGenerator));