var emitter = class Emitter {
    constructor() {
        this.events = {};
        this.on = function(type, listener) {
                if (this.events[type] == undefined) {
                    this.events[type] = [];
                }
                // this.events[type] = [];
                this.events[type].push(listener);
            },
            this.emit = function(type) {
                this.events[type].forEach(element => {
                    element();
                });
            }
    }
};


//instaciar a class Emitter
var emtr = new Emitter();
emtr.on("LOGIN", function() {
    console.log("Welcome user");
});
emtr.on("LOGIN", function() {
    console.log("Welcome user teste");
});
emtr.on("LOGIN", function() {
    console.log("Welcome user XP");
});

if (user == validated) {
    emtr.emit("LOGIN");
}

emtr.on("LOGOUT", function() {
    console.log("Goodbye user");
});
emtr.emit("LOGIN");
emtr.emit("LOGOUT");

module.exports = emitter;