// setTimeout(() => {
//     console.log('This is a callback function executed after 2 seconds');
// }, 2000);


// const names = ['Alice', 'Bob', 'Charlie'];

// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             lat: 34.0522,
//             lon: -118.2437
//         }
//         callback(data);
//     }, 2000);
// }

// geocode('Los Angeles', (data) => {
//     console.log(data);
// })


const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 2000);
}

add(5, 10, (result) => {
    console.log('The sum is:', result);
});
