class Main {
    multiNames(names){
        if(names.length === 2)
            return `Hello, ${names[0]} and ${names[1]}.`;

        return `Hello, ${names[0]}, ${names[1]} and ${names[2]}.`;
    }

    greet(name) {
        
        if(name && typeof name === 'object' )
           return this.multiNames(name);

        if (!name || name.trim() === "")
            return "Hello, my friend."; 

        if (name === name.toUpperCase())
            return `HELLO, ${name}!`;

        return `Hello, ${name}.`;
    }
}
module.exports = Main;

