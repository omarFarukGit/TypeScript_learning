// object destructrucring
// array destructuing

const user={
    id:'120',
    name:{
        firstName:'mezbaul',
        middleName:'abedin',
        lastName:'forhan'
    },
    gender:'male',
    favoriteColor:'black'
}
// const MyFraviteColor=user.favoriteColor;
// const MyMiddleName=user.name.middleName;

const {favoriteColor,name:{middleName}}=user
const {favoriteColor:MyFraviteColor}=user // name alias / nam deya

console.log(favoriteColor)


// array destructre

const friends=['karim','rahim','karim']

// const myBest=friends[1]

const [karim,rahim ,mahim]=friends
const [, ,A]=friends // ager value ke skip korte hole koma use korte hobe