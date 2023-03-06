// .........................task_#1.............................................
// let car = {
//     model: "taycan",
//     year: 2020,
//     color: "black",
//     signal(){
//         alert("fa! fa!");
//     }
// }
// car.color = "red";
// car.type = "electric"
// console.log(car.color);
// console.log(car.type);
// car.signal()

// .........................task_#2.............................................
// let salaries = {
//         fronted: 12000,
//         backend: 10000,
//         designer: 8000,
//         dayPay() {
//             alert('We must pay salary on Tuesday!');
//         },
//         total() {
//             let sum = 0;
//             for (let key in salaries){
//             if (typeof this[key] === 'number'){
//             sum += this[key];
//             }
//             }
//             console.log(sum);
//             }
//         }
//     salaries.dayPay()
//     salaries.total();
//     salaries.manager = 5000;
//     salaries.total();
   

    // .........................task_#3.............................................
// function Laptop (brand, system, cost){
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
// }
// let dell = new Laptop ('dell', 'windows', 800);
// let apple = new Laptop ('Apple', 'Mac_OS', 1700);
// console.log(apple.cost)
// console.log(apple.system)
// console.log(dell.brand)


    // .........................task_#4.............................................
    function laptop (brand, system, cost){
        this.brand = brand;
        this.system = system;
        this.cost = cost;
        this[Symbol.toPrimitive] = function(hint){
            switch(hint){
                case 'string':
                    return this.brand
                case 'number':
                    return this.cost
                case 'default':
                    return `${this.brand} ${this.system} ${this.cost} // `
                }
        }
    }
    let dell = new laptop('Dell', 'Windows', 800);
    let apple = new laptop('Apple', 'Mac_OS', 1700);
    // let group = {};
    // group[apple] = '// ' + dell + apple;
    // console.log(group);
    console.log(String(dell));
    console.log(+apple);
    console.log(dell + apple);