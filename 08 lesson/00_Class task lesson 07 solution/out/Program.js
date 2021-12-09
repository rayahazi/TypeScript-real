let propertyTax = new PropertyTax(100);
let peopleList = Array(10);
let InitArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * (2 - 0 + 1));
        switch (rand) {
            case 0:
                arr[i] = new Employee('543578996', 'John', 'Cohen', true, 54, 'Ariel', 10000, new Date(1990, 3, 1), 40);
                break;
            case 1:
                arr[i] = new Disabled('543578996', 'John', 'Cohen', true, 54, 'Ariel', '');
                break;
            case 2:
                arr[i] = new BussinessOwner('543578996', 'John', 'Cohen', true, 54, 'Ariel', 'Rami-Levi', 'food', 'Jerusalem');
                break;
        }
    }
};
function Calculation(arr, tax) {
    let fullTax = 0;
    let numOfEmps = 0;
    let numOfDis = 0;
    let numOfBussiness = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Employee) {
            fullTax += tax.Tax - (tax.Tax * (tax.DiscountWorker / 100));
            numOfEmps++;
        }
        else if (arr[i] instanceof Disabled) {
            fullTax += tax.Tax - (tax.Tax * (tax.DiscountDisabled / 100));
            numOfDis++;
        }
        else {
            fullTax += tax.Tax;
            numOfBussiness++;
        }
    }
    console.log(`Tax: ${tax.Tax}, all-tax: ${fullTax}, totalOfPeople: ${arr.length}, Employees: ${numOfEmps}, Disabled: ${numOfDis}, Bussinesses: ${numOfBussiness}`);
}
let tax = new PropertyTax(100);
let personArr = new Array(10);
InitArr(personArr);
Calculation(personArr, tax);
console.log(personArr);
//# sourceMappingURL=Program.js.map