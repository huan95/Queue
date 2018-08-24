function Queue() {

    this.dataStore = [];

    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.push = push;

}

function push(element) {
    this.dataStore = element;
}

function enqueue(element) {

    this.dataStore.push(element);

}

function dequeue() {

    return this.dataStore.shift();

}

function front() {

    return this.dataStore[0];

}

function back() {

    return this.dataStore[this.dataStore.length-1];

}

function toString() {

    var retStr = "";

    for (var i = 0; i < this.dataStore.length; ++i){

        retStr += this.dataStore[i] + "\n";

    }

    return retStr;

}

function empty() {

    if (this.dataStore.length == 0) {

        return true;

    }

    else {

        return false;
    }
}

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
document.write(q.toString() + "<br>");
q.dequeue();
document.write(q.toString()+ "<br>");
document.write("Front of queue: " + q.front() + "<br>");
document.write("Back of queue: " + q.back());




