//type alias
type User = {
  name: string;
  age: number;
};
type Role = {
  role: "admin" | "user";
};
// inter face

interface IUser {
  name: string;
  age: 21;
  role: "admin" | "user";
}

// type intersections
type UserWithRole = User & Role;

interface IuserWithRole extends IUser{
    role:'admin'|'user'
}

const user: IuserWithRole = {
  name: "sinsn",
  age: 21,
  role: "admin",
};


// ? primite type er somoy interface use korte parbo nah shudu object type er shate kaj korte pare => array object function

// function
type Add=(num1:number,num2:number)=>number;

// interface dara index signature
interface IAdd{
    (num1:number,num2:number):number
}

const add:IAdd=(num1,num2)=>{
    return num1+num2
}


