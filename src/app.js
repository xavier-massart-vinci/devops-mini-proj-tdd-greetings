class Main {
  greet(name) {
    if (name && typeof name === 'object') return this.multiNames(name);

    if (!name || name.trim() === '') return 'Hello, my friend.';

    if (name === name.toUpperCase()) return `HELLO, ${name}!`;

    return `Hello, ${name}.`;
  }

  multiNames(names) {
    let namesMaj = [];
    let namesMin = [];
    let resultat = '';

    names.forEach((name) => {
      name.slice(1, 2) === name.slice(1, 2).toUpperCase()
        ? namesMaj.push(name)
        : namesMin.push(name);
    });

    if (namesMin.length > 0) resultat += this.minNames(namesMin);
    if (namesMaj.length > 0 && namesMin.length > 0) resultat += ' AND ';
    if (namesMaj.length > 0) resultat += this.majNames(namesMaj);
    return resultat;
  }

  minNames(namesMin) {
    let resultat = `Hello, ${namesMin[0]}`;

    for (let index = 1; index < namesMin.length - 1; index++) {
      resultat += `, ${namesMin[index]}`;
    }
    resultat +=
      namesMin.length > 1 ? ` and ${namesMin[namesMin.length - 1]}.` : '.';
    return resultat;
  }

  majNames(namesMaj) {
    let resultat = `HELLO ${namesMaj[0]}`;
    for (let index = 1; index < namesMaj.length - 1; index++) {
      resultat += `, ${namesMaj[index]}`;
    }
    resultat +=
      namesMaj.length > 1 ? ` AND ${namesMaj[namesMaj.length - 1]}!` : `!`;
    return resultat;
  }
}
module.exports = Main;
