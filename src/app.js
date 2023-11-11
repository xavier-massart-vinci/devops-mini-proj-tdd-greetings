class Main {
    greet(name) {

        if (!name || name.trim() === "")
            return "Hello, my friend."; 

        if (name === name.toUpperCase())
            return "HELLO, " + name +"!";

        return `Hello, ${name}.`;
    }
}
module.exports = Main;

