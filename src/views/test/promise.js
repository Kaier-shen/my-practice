const PENDING = 'Pending';
const FULFILLED = 'Fulfilled';
const REJECTED = 'Rejected';
class Promise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError(`Promise resolver ${executor} is not a function`);
    }
    this.value = undefined;
    this.reason = undefined;
    this.status = PENDING;
    this.cbs = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject.bind(this, error);
    }
  }

  resolve(value) {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      setTimeout(() => {
        this.cbs.map(cb => cb.onFulfiilled(value));
      });
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      setTimeout(() => {
        this.cbs.map(cb => cb.onRejected(reason));
      }, 0);
    }
  }

  then(onFulfiilled, onRejected) {
    if (typeof onFulfiilled !== 'function') {
      onFulfiilled = () => this.value;
    }

    if (typeof onRejected !== 'function') {
      onRejected = () => this.reason;
    }

    return new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let res = onFulfiilled(this.value);
            if (res instanceof Promise) {
              res.then(resolve, reject);
            } else {
              resolve(res);
            }
          } catch (error) {
            reject(error);
          }
        });
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let res = onRejected(this.reason);
            if (res instanceof Promise) {
              res.then(resolve, reject);
            } else {
              resolve(res);
            }
          } catch (error) {
            reject(error);
          }
        });
      }

      if (this.status === PENDING) {
        this.cbs.push({
          onFulfiilled: value => {
            try {
              let res = onFulfiilled(value);
              if (res instanceof Promise) {
                res.then(resolve, reject);
              } else {
                resolve(res);
              }
            } catch (error) {
              reject(error);
            }
          },
          onRejected: reason => {
            try {
              let res = onRejected(reason);
              if (res instanceof Promise) {
                res.then(resolve, reject);
              } else {
                resolve(res);
              }
            } catch (error) {
              reject(error);
            }
          }
        });
      }
    });
  }

  handle() {}
}

module.exports = Promise;
