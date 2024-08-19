const button = document.getElementById('btn');
const button2 = document.getElementById('btn2');

button.addEventListener('click', async (e) => {
    // import('./logger.js').then((module) => {
    //     module.default(e.currentTarget);
    //     module.timeLogger();
    // });

    const module = await import('./logger.js');
    module.default(e.target);
    module.timeLogger();
});

button2.addEventListener('click', () => {
    import('./math.js').then((module) => {
        console.log('Add: ', module.add(1, 2));
        console.log('Multiply: ', module.multiply(3, 2));

        const button = document.getElementById('btn2');
        button.innerHTML = 'Check the console';
    });
});
