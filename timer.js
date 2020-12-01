const timers = process.argv
  .splice(2)
  .map(number => Number(number))
  .filter(number => number > 0);

for (let i in timers) setTimeout(() => process.stdout.write('\x07'), timers[i] * 1000)
