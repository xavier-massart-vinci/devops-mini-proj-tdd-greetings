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
    let result = '';

    names.forEach((name) => {
      name.slice(1, 2) === name.slice(1, 2).toUpperCase()
        ? namesMaj.push(name)
        : namesMin.push(name);
    });

    if (namesMin.length > 0) result += this.minNames(namesMin);
    if (namesMaj.length > 0 && namesMin.length > 0) result += ' AND ';
    if (namesMaj.length > 0) result += this.majNames(namesMaj);
    return result;
  }

  minNames(namesMin) {
    let result = `Hello, ${namesMin[0]}`;

    for (let index = 1; index < namesMin.length - 1; index++) {
      result += `, ${namesMin[index]}`;
    }
    result +=
      namesMin.length > 1 ? ` and ${namesMin[namesMin.length - 1]}.` : '.';
    return result;
  }

  majNames(namesMaj) {
    let result = `HELLO ${namesMaj[0]}`;
    for (let index = 1; index < namesMaj.length - 1; index++) {
      result += `, ${namesMaj[index]}`;
    }
    result +=
      namesMaj.length > 1 ? ` AND ${namesMaj[namesMaj.length - 1]}!` : `!`;
    return result;
  }
}
module.exports = Main;
