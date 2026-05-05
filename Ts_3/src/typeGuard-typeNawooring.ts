// type guard/narrowing
// in typeof

const add = (num1: number | string, num2: number | string) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    num1.toString() + num2.toString();
  }
};

add(2, 2); // 4
add(2, "2"); // 22
add("2", "2"); // 22

// in grurd

type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "Admin";
};

function getUserInfo(user: NormalUser | AdminUser) {
  if ("role" in user) {
    console.log(`This user ${user.name} and his role is :${user.role}`);
  } else {
    console.log(`This user ${user.name}`);
  }
}

getUserInfo({ name: "sinsn" });
