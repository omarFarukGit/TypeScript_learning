// ? ternary operator :decision making
// ?? : nullish  coalescing operator :null/undefaind
// ?. optional chingig

const biye = (age: number) => {
  // if(age>=21){
  //     console.log('you are eligible');
  // }else{
  //     console.log('you are noteligible')
  // }

  const result = age >= 21 ? "youre eligible" : "you are not elegible";
  console.log(result);
};

biye(21);

//nalish
const userTheme = undefined;
const selectedTheme = userTheme ?? "light-them";
console.log(selectedTheme);
const isAuth = null;
const resultWithTernanry = isAuth ? isAuth : "you are geust";
const resultWithNullish = isAuth ?? "you are geust";

console.log({ resultWithNullish, resultWithTernanry });

//optional chaining
const user: {
  address: {
    city: string;
    town: string;
    postalCode?: number;
  };
} = {
  address: {
    city: "rangpur",
    town: "bodanmi",
  },
};

const postalCode1 = user.address.postalCode; //undefiend asbe web crash korbe
const postalCode = user?.address?.postalCode; //undefiend asbe web crsh korbe nah
