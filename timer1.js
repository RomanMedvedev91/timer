const args = process.argv.slice(2);

const timer = function (timeArray) {
  if(!timeArray.length) return;
  for (const el of timeArray) {
    if(Number(el) > 0) {
      setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(el) * 1000);
    }
  }
};
timer(args);
