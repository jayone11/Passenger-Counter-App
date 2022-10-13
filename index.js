// initialize the count as 0
// listen for clicks on the incr button
// incr the count variable when btn is clicked
// chg the counter in html to reflect the new count
// create a func save() ro log the count when called

let count = 0;
let counter = document.getElementById("counter");
let savedNumber = document.getElementById

function increment() {
    count = count + 1;
    counter.innerText = count;
    // console.log("Count = ", count);
    save();
}

function save() {
    if(count == 4) {
        console.log("The count is now ", count)
    } else {
        console.log("The count is ", count);
    } if(count == 10) {
        console.log("STOP PRESSING THE DAMN BUTTON, the damn count is", count,"!");
    }
}

