const userFullName=({firstName,lastName}) => `Hello! My name is ${firstName} ${lastName}`
const userNationallity =({firstName,nationality}) => `${firstName} is ${nationality}`;

const delay =(maxMilliseconds=5000) =>Math.floor(Math.random()* maxMilliseconds);

const getUser = () =>{
    setTimeout(()=> {
        const user ={
            firstName: "Ivan",
            lastName: "Ivanovich",
            nationality: "Russian",
        };
        console.log(user);
    }, delay());
};
console.log(getUser(userFullName));
console.log(getUser(userNationallity));