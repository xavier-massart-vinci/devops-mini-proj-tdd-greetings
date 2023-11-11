class Main {
    greet(name) {
        if(name && typeof name === 'object')
            return `Hello, ${name[0]} and ${name[1]}.`;

        if (!name || name.trim() === "")
            return "Hello, my friend."; 

        if (name === name.toUpperCase())
            return `HELLO, ${name}!`;

        return `Hello, ${name}.`;
    }
}
module.exports = Main;

