// union |  ,mane or kora

type UserRole = "admin" | "user";

const getDashBoard = (role: UserRole) => {
  if (role === "admin") {
    return "admin dashboard";
  } else if (role === "user") {
    return "user dashboar";
  } else {
    return "guest dashobard";
  }
};

//intersections hocce 1ta &

type Employee = {
  id: string;
  name: string;
  phone: string;
};

type Manneger = {
  designation: string;
  timeSize: number;
};

type EmployeeManeger = Employee & Manneger;

const sinan:EmployeeManeger={
    id:'12',
    name:'sina',
    phone:'0125',
    designation:'controll',
    timeSize:21

}
