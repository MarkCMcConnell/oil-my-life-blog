var express = require('express'),
    app = express();
    bodyParser = require('body-parser');

var post = [
  {title: 'First post', image: 'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?h=350&auto=compress&cs=tinysrgb', body: 'Lorem ipsum dolor sit amet, nec in aliquip aliquid, has saperet blandit ne. Id cum odio malorum nostrum, viris reformidans id qui. Nec eu tincidunt interpretaris, wisi prima dissentias ex qui. Vel viris mandamus ad, sale persequeris ea nec.'},
  {title: 'Second post', image: 'https://images.pexels.com/photos/204686/pexels-photo-204686.jpeg?h=350&auto=compress&cs=tinysrgb', body: 'Te justo dicta saepe vim, ne rebum populo nam, mei facilis incorrupte no. Vim eu atqui mundi vocent, usu ex vitae ubique scripta, has ignota nostro neglegentur ea. Posse liber consectetuer ex mel, qui et expetenda constituto, quo elitr verterem gubergren te.'},
  {title: 'Third post', image: 'https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?h=350&auto=compress&cs=tinysrgb', body: 'Quem modo efficiantur pro ad, harum iusto praesent ea usu. Mea at meliore intellegam, cu melius apeirian conclusionemque mei. No audire praesent disputando quo, mei cu tota probatus. Mea esse adhuc diceret no, ex duo laboramus rationibus. Mel ad invenire expetenda. Id quo nemore nominavi scriptorem, dolore sensibus has et, in mel facete explicari.'}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); // Allow access to assets

app.get('/', function(req, res) {
  res.render('landing');
});

app.listen(3000, process.env.IP, function() {
  console.log('Server started.');
});
