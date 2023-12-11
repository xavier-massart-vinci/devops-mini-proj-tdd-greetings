class Main {
    constructor() {
        this.language = {
            fr: { word1: 'Bonjour', word2: 'et' },
            en: { word1: 'Hello', word2: 'and' },
            nl: { word1: 'Dag', word2: 'en' },
        };
    }

    greet(name) {
        if (name && typeof name === 'object') return this.multiNames(name);

        if (!name || name.trim() === '') return 'Hello, my friend.';

        if (name === name.toUpperCase()) return `HELLO, ${name}!`;

        return `Hello, ${name}.`;
    }

    multiNames(names) {
        let namesMaj = [];
        let namesMin = [];
        let result = '';
        let lang = 'en';

        names.forEach((name) => {
            if (name.length !== 2) {
                name.slice(1, 2) === name.slice(1, 2).toUpperCase()
                    ? namesMaj.push(name)
                    : namesMin.push(name);
            } else lang = name.toLowerCase();
        });

        if (namesMin.length > 0) result += this.minNames(namesMin, lang);
        if (namesMaj.length > 0 && namesMin.length > 0)
            result += ` ${this.language[lang].word2.toUpperCase()} `;
        if (namesMaj.length > 0) result += this.majNames(namesMaj, lang);
        return result;
    }

    minNames(namesMin, lang) {
        let result = `${this.language[lang].word1}, ${namesMin[0]}`;

        for (let index = 1; index < namesMin.length - 1; index++) {
            result += `, ${namesMin[index]}`;
        }
        result +=
            namesMin.length > 1
                ? ` ${this.language[lang].word2} ${
                      namesMin[namesMin.length - 1]
                  }.`
                : '.';
        return result;
    }

    majNames(namesMaj, lang) {
        let result = `${this.language[lang].word1.toUpperCase()} ${
            namesMaj[0]
        }`;
        for (let index = 1; index < namesMaj.length - 1; index++) {
            result += `, ${namesMaj[index]}`;
        }
        result +=
            namesMaj.length > 1
                ? ` ${this.language[lang].word2.toUpperCase()} ${
                      namesMaj[namesMaj.length - 1]
                  }!`
                : `!`;
        return result;
    }
}
module.exports = Main;
