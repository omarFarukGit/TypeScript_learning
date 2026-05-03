// conditonal type: je type codition er upor nirvorshill

type A = null;
type B = undefined;

type C = A extends null ? true : B extends undefined ? true : false;


type RichpPeople={
    id:string,
    car:string
}
// type cheakVehicle<T>=T extends "bike"|'car'? true:false;

// type HashBike=cheakVehicle<'bike'>
type cheakVehicle<T>=T extends keyof RichpPeople ? true:false;

type HashBike=cheakVehicle<'car'>

// use kom hoy