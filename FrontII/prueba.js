let array = [
  {
    id: 1,
    slug: 'hola',
    specs: [
      { label: 'qty', value: '1' },
      { label: 'color', value: 'white' },
      { label: 'length', value: '5' },
    ],
  },
  {
    id: 2,
    slug: 'que',
    specs: [
      { label: 'qty', value: '2' },
      { label: 'color', value: 'black' },
      { label: 'length', value: '10' },
    ],
  },
  {
    id: 3,
    slug: 'tal',
    specs: [
      { label: 'qty', value: '3' },
      { label: 'color', value: 'pink' },
      { label: 'length', value: '20' },
    ],
  },
];

for (const product of array) {
  // console.log(product);
  for (const item of product.specs) {
    console.log(item.label);
  }
}
