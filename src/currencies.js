const currencies = [
  {
    id: 1,
    code: 'USD',
    label: 'Доллар США',
    rate: 1,
    base: true,
  },
  {
    id: 2,
    code: 'EUR',
    label: 'Евро',
    rate: 0.905,
  },
  {
    id: 3,
    code: 'RUB',
    label: 'Российский рубль',
    rate: 61.7754417762,
  },
  {
    id: 4,
    code: 'BYN',
    label: 'Белорусский рубль',
    rate: 2.1123,
  },
  {
    id: 5,
    code: 'INR',
    label: 'Индийская рупия',
    rate: 71.2915,
  },
  {
    id: 6,
    code: 'CNY',
    label: 'Китайский юань',
    rate: 6.9367,
  },
  {
    id: 7,
    code: 'NOK',
    label: 'Норвежская крона',
    rate: 8.9826,
  },
  {
    id: 8,
    code: 'CHE',
    label: 'Чебурек',
    rate: 1.637,
  },
  {
    id: 9,
    code: 'PLN',
    label: 'Польский злотый',
    rate: 3.8386,
  },
];

export default currencies;
export const baseCurrency = currencies[0];
