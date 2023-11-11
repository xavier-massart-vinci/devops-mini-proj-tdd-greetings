class Main {
    greet(name) {

        if (!name || name.trim() === "")
            return "Hello, my friend."; 

        return `Hello, ${name}.`;
    }
}
module.exports = Main;

