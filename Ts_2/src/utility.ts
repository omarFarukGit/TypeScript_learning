// utility types

type Products = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

// type ProductsSummary={
//     id:number;
//     name:string;
//     price:string;
// }

type ProductsSummary = Pick<Products, "id" | "name" | "price">;

type ProductsWithoutStock = Omit<Products, "stock">;

type ProductsWithColor = Required<Products>;

type optionalProducts = Partial<Products>;

type productReadOnly = Readonly<Products>;

const emtyObj: Record<string, unknown> = {};

const product1 = {
  id: 22,
  name: "mouse",
  price: "20",
};
