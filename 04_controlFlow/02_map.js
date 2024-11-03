const mp = new Map();
mp.set(`Sadique`, `Reyaz`);
mp.set(`Abdul`, `Malik`);
mp.set(`Musharraf`, `Hussain`);

console.log(mp);

for (const eachMp of mp) {
    console.log(eachMp);    // array of key and value. like: ['Sadique', 'Reyaz']
}

for (const [ki, walue] of mp) {
    console.log(`Key is: ${ki} and value is: ${walue}`);
}
