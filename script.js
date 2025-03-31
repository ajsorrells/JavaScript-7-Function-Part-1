function sendText() {
    console.log('Hey do you want to hang out later today?');
}

sendText();

function sendText(name) {
    console.log('Hey ' + name + ' do you want to hang out later today?');
}

sendText('Grace');
sendText('Jada');
sendText('Michael');
sendText('William');
sendText('Sean');

function sendText(name, time) {
    console.log('Hey ' + name + ' do you want to hang out later today at ' + time + '?');
}

sendText('Erica', 10);
sendText('Michael', 9);
sendText('William', 6);
sendText('Sean', 5);

function sendReminder(name, time) {
    console.log('Dear ' + name + ' your meeting is at ' + time + '.');
}

sendReminder('Sanjay', 7);
sendReminder('Tiffany', 5);
sendReminder('Oscar', 3);
sendReminder('Anabelle', 2);

let name = 'Terrence';
let count = 1;
function showAlert() {
    console.log(name + ', wake up! This is your alarm number ' + count + '!');
    count += 1;
}

showAlert();
showAlert();
showAlert();
showAlert();

function calculate() {
    console.log('hello');
    console.log(2 + 2);
}

calculate();
calculate();

function calculateTax(cost, taxPercent = 0.1) {
    console.log(cost * taxPercent);
}

calculateTax(1000);
calculateTax(2000);
calculateTax(5000);
calculateTax(2000, 0.3);
calculateTax(5000, 0.2);
