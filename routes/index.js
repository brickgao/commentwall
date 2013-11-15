module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {
      title: 'Home',
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    });
  });

  app.post('/', function(req, res) {
    var word = req.body.sentence,
        color = req.body.color;
    if(word === '') {
      req.flash('error', '请输入弹幕哦_(:з」∠)_');
      return res.redirect('/');
    }
  });
}
