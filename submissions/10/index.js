
function PromiseQueue(promises = [], concurrentCount = 1) {
    this.total = promises.length;
    this.todo = promises;
    this.running = [];
    this.complete = [];
    this.count = concurrentCount;
}

PromiseQueue.prototype.runNext = function () {
    return ((this.running.length < this.count) && this.todo.length);
}

PromiseQueue.prototype.run = function () {
    while (this.runNext()) {
        const promise = this.todo.shift();
        promise.then(() => {
            this.complete.push(this.running.shift());
            this.run();
        });
        this.running.push(promise);
    }
}

const promises = [...Array(100).keys()].map(i => new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 900) + 100)).then(_ => console.log(i)))
const taskQueue = new PromiseQueue(promises, 3);
taskQueue.run();