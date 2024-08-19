export function timeLogger() {
    console.log(`Current time is ${new Date().getTime()}`);
}

export default function dataLogger(data) {
    console.log(`Data from the event ${data}`);
}
