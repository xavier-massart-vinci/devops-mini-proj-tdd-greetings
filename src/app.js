class Main {
    greet(names) {

        if (typeof names == "string") return `Hello, ${names}.`;


        if (typeof names == "object") {
            
            const namesMaj = [];
            const namesMin = [];

            names.forEach((name) => {
                name.slice(1, 2) === name.slice(1, 2).toLowerCase()
                    ? namesMin.push(name)
                    : namesMaj.push(name);
            });

            let resultat = `${this.greetMin(namesMin)}`;

            if (namesMin.length!==0) {
                resultat += ' AND ';
            }

            resultat += `${this.greetMaj(namesMaj)}`;

            
            return resultat;
            
        }
    }


    greetMin(namesMin) {
                
        let resultat = `Hello, ${namesMin[0]}`;

        for (let index = 1; index < namesMin.length - 1; index++) {
            
            resultat += `, ${namesMin[index]}`;
        }

        resultat += (namesMin.length === 1) ? `.` : ` and ${namesMin[namesMin.length - 1]}.`;
        return resultat;
        
    }

    greetMaj(namesMaj) {

        let resultat = `HELLO ${namesMaj[0]}`;

        for (let index = 1; index < namesMaj.length - 1; index++) {
            
            resultat += `, ${namesMaj[index]}`;
        }

        resultat += (namesMaj.length === 1) ? `!`: ` AND ${namesMaj[namesMaj.length-1]}!`;
        return resultat;
    }
        
}

module.exports = Main;
