// initialize the count as 0
// listen for clicks on the incr button
// incr the count variable when btn is clicked
// chg the counter in html to reflect the new count
// create a func save() ro log the count when called

let count = 0;
let counter = document.getElementById("counter");

function increment() {
    count = count + 1;
    counter.innerText = count;
    console.log("Count = ", count);
}
