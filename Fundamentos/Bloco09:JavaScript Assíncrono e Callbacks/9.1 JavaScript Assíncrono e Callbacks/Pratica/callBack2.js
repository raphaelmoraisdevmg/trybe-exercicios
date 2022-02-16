const userFullName=({firstName, lastName}) => `Hello! my name is ${firstName} ${lastName}`;
const hisNationality=(({firstName, nationality}) => `${firstName} is ${nationality}`)
const getUser =(param) => {
    const userToReturn ={
        firstName:'Ivan',
        lastName:'Ivanovich',
        nationality:'Russian'
    };
    return param(userToReturn);
}

console.log(getUser(userFullName));
console.log(getUser(hisNationality));