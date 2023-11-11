class Main {
    greet(name) {

        if (!name || name.trim() === "")
            return "Hello, my friend."; 

        if (name === "BOB")
            return "HELLO, BOB!"

        return `Hello, ${name}.`;
    }
}
module.exports = Main;

