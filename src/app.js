class Main {
    greet(names) {

        if (typeof names == "string") return `Hello, ${names}.`; 


        if (typeof names == "object") {
            
            let resultat = `Hello, `;
            const namesMaj = [];
            const namesMin = [];

            for (let index = 0; index < names.length; index++) {
                let element = names[index];
                let firstLetterOut = element.slice(1, 2);
                (firstLetterOut === firstLetterOut.toLowerCase()) ? namesMin.push(element) : namesMaj.push(element);
            }

            resultat += `${namesMin[0]}`;

            for (let index = 1; index < namesMin.length; index++) {
                resultat +=  ` and ${namesMin[index]}`;

                if (index + 1 === namesMin.length) resultat += '.';
            
            }
            if (1 === namesMin.length) resultat += '.';

            
            if (namesMin.length!==0) {
                resultat += ` AND `;
            }
            resultat += `HELLO ${namesMaj[0]}`;

            for (let index = 1; index < namesMaj.length; index++) {
                resultat += ` AND ${namesMaj[index]}`;
            
                if (index + 1 === namesMaj.length) resultat +='!';
            }
            if (1 === namesMaj.length) resultat += '!';
            return resultat;
            console.log(resultat);
        }
    }
}
module.exports = Main;
