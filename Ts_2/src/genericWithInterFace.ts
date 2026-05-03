interface Devoloper<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: number;
  };
  smartWatch: T;
  bike?: X;
}

// daynamic vabe inter face er type define korte pari

const poorDeveloper: Devoloper<
  {
    heartRate: string;
    stopWacth: boolean;
  },
  { model: string }
> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenevo",
    model: "a21",
    releasedYear: 2010,
  },
  smartWatch: {
    heartRate: "200",
    stopWacth: true,
  },
  bike: {
    model: "Yemaha",
  },
};
const richDeveloper: Devoloper<{
  heartRate: string;
  callSuport: boolean;
  calculator: boolean;
  aIFeature: boolean;
}> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenevo",
    model: "a21",
    releasedYear: 2010,
  },
  smartWatch: {
    heartRate: "200",
    callSuport: true,
    calculator: true,
    aIFeature: true,
  },
};

console.log(poorDeveloper);
