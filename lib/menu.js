const fs = require('fs');
const path = require('path');
const ccase = require('change-case');

module.exports = {
  get: (pagePath) => {
    if (pagePath.slice(-1) != '/') pagePath += '/';
    let files = fs.readdirSync(pagePath);
    files = files.filter((file) => {
      if (file == '_app.js') return false;
      const stat = fs.lstatSync(pagePath + file);
      return stat.isFile();
    });

    return files.map((file) => {
      if (file == 'index.jsx') {
        return {
          name: 'Home',
          link: '/',
        };
      } else {
        link = path.parse(file).name;
        return {
          link: '/pages/' + link,
          name: ccase.capitalCase(link),
        };
      }
    });
  },
};
