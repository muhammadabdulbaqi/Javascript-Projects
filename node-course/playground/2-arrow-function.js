// const square = function (s) {
//     return s * s;
// }

// const square = (x) => {
//     return x * x
// }

// const square = (s) => s * s;

// console.log(square(4)); // 16

const event = {
    name: 'Birthday Party',
    guestList: ['Muhammad', 'Thomas', 'Sarah'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
}

event.printGuestList(); // Guest list for Birthday Party