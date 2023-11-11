class Main {
    multiNames(names){
        let hello = 'Hello, ';
        for (let i = 0; i < names.length - 1; i++) {
            hello += `${names[i]}`;
            if(i !== names.length - 2)
                hello += `, `;
        }
        return hello + ` and ${names[names.length-1]}.`;
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

