const produts = [
    { name: 'leptop', price: 50000, brand: 'asus', color: 'black' },
    { name: 'mobile', price: 30000, brand: 'xiaomi', color: 'mate' },
    { name: 'watch', price: 5000, brand: 'samsung', color: 'red' },
    { name: 'speaker', price: 500, brand: 'D7', color: 'blue' },
    { name: 'sunglass', price: 500, brand: 'Plice', color: 'reddish' }
]

const brands = produts.map(product => product.brand);
console.log(brands);

const cheap = produts.filter(prise => prise.price <= 10000);
console.log(cheap);

const specificName = produts.filter(p => p.name.includes('e'));
console.log(specificName);


const specificName1 = produts.find(p => p.name.includes('z'));
console.log(specificName1);