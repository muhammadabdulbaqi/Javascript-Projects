// Object property shorthand

const name = 'Muhammad'
const userAge = '24'

const user = {
    name,
    age: userAge,
    location: 'Rajshahi'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const {label:productLabel, stock, rating = 5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating) // 4.2, as rating is defined in product

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)

