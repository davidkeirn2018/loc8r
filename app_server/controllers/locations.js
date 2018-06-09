/* GET Home page. */
module.exports.homelist = function(req, res, next) {
    res.render('index', { title: 'Home' });
};

/* GET Location Info page. */
module.exports.about = function(req, res, next) {
    res.render('index', { title: 'Location Info' });
};

/* GET Add Review page. */
module.exports.about = function(req, res, next) {
    res.render('index', { title: 'Add Review' });
};