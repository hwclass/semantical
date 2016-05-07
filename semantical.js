const cheerio = require('cheerio'),
      $ = cheerio.load('<body><figure>This is the title.</figure></body>');

var total = 0;

const semanticals = {
  article: {
    value : 'article',
    weight: 10
  },
  aside: {
    value : 'aside',
    weight: 10
  },
  details : {
    value : 'details',
    weight: 10
  },
  figcaption : {
    value : 'figcaption',
    weight: 10
  },
  figure : {
    value : 'figure',
    weight: 10
  },
  footer : {
    value : 'footer',
    weight: 10
  },
  header : {
    value : 'header',
    weight: 10
  },
  main : {
    value : 'main',
    weight: 10
  },
  mark : {
    value : 'mark',
    weight: 10
  },
  nav : {
    value : 'nav',
    weight: 10
  },
  section : {
    value : 'section',
    weight: 10
  },
  summary : {
    value : 'summary',
    weight: 10
  },
  time : {
    value : 'time',
    weight: 10
  }
};

for (var semanticalIndex = 0, len = Object.keys(semanticals).length; semanticalIndex < len; semanticalIndex++) {
  var elementExistance = $('body').find(semanticals[Object.keys(semanticals)[semanticalIndex]]);
  console.log(elementExistance);
  if (elementExistance.length > 0) {
    total += semanticals[Object.keys(semanticals)[semanticalIndex]].weight;
  }
}

console.log('Seamntical as ' + total + '%');
