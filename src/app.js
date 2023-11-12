class Main {
  greet(name) {
    if (name && typeof name === 'object') return this.multiNames(name);

    if (!name || name.trim() === '') return 'Hello, my friend.';

    if (name === name.toUpperCase()) return `HELLO, ${name}!`;

    return `Hello, ${name}.`;
  }

  multiNames(names) {
    let majNames = [];
    let minNames = [];
    let resultat = '';

    for (let i = 0; i < names.length; i++) {
      if (names[i].slice(1, 2) === names[i].slice(1, 2).toUpperCase())
        majNames.push(names[i]);
      else {
        minNames.push(names[i]);
      }
    }

    if (minNames.length > 0) {
      resultat = `Hello, ${minNames[0]}`;

      for (let index = 1; index < minNames.length - 1; index++) {
        let element = minNames[index];
        resultat += `, ${element}`;
      }

      if (minNames.length > 1) {
        resultat += ` and ${minNames[minNames.length - 1]}.`;
      } else {
        resultat += '.';
      }
    }

    if (majNames.length > 0 && minNames.length > 0) resultat += ' AND ';

    if (majNames.length > 0) {
      resultat += `HELLO ${majNames[0]}`;
      for (let index = 1; index < majNames.length - 1; index++) {
        let element = majNames[index];
        resultat += `, ${element}`;
      }
      if (majNames.length > 1) {
        resultat += ` AND ${majNames[majNames.length - 1]}!`;
      } else {
        resultat += `!`;
      }
    }

    return resultat;
  }
}
module.exports = Main;
