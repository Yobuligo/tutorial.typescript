let startTimer;
let endTimer;
const evaluateTimer = () => {
    return new Promise((resolve) => {
        startTimer = new Date();
        setTimeout(() => {
            endTimer = new Date();
            resolve([startTimer, endTimer]);
        }, 1000);
        for (let i = 0; i < 10000000000; i++) {
            const z = i * 2;
        }
    });
};
evaluateTimer().then(([startTimer, endTimer]) => {
    console.log(`Starttime was ${startTimer.getTime()}`);
    console.log(`Endtime was ${endTimer.getTime()}`);
    console.log(`Difference ${endTimer.getTime() - startTimer.getTime()}`);
});
//# sourceMappingURL=Playground.js.map