const Promise = require('./promise');

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('heihei');
  }, 1000);
});

p.then(v => {
  return new Promise((resolve, reject) => {
    reject('gaga');
  });
}).then(
  value => {
    console.log('p2-success', value);
  },
  reason => {
    console.log('p2-reject', reason);
  }
);
console.log('123');
