const m = 2;
const n = 10;
let i = m;
let result = 0;

for (i = 0; i <= n; i++) {

    if (i % 2 == true) {
        result += i;


    }
    if (i / 3 == true) {
        result -= i;


    }
    if (i / 4 == true) {
        result *= i;


    }
    if (i % 5 == 0) {
        console.log(i);
    }


}