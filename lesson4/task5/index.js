const m = 2;
const n = 6;
let i = m;
let result = 0;

for (i = 0; i <= n; i++) {

    if (i % 2 == 0 && i % 4 == 1) {
        result += 2;
        continue;

    } else if (i / 3 == 0) {
        result -= 3;
        continue;

    } else if (i / 4 == 0) {
        result *= 4;
        continue;
    }

    if (i % 5 == 0) {
        console.log(i);
    }


}