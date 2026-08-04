function draw() {

    let numbers = [];

    while (numbers.length < 5) {

        let n = Math.floor(Math.random() * 90) + 1;

        if (!numbers.includes(n)) {
            numbers.push(n);
        }

    }

    numbers.sort((a, b) => a - b);

    document.getElementById("output").innerHTML =
        numbers.join(" - ");
}
