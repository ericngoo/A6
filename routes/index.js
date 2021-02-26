
/*
 * GET home page.
 */

exports.login = function (req, res) {
  res.render('login');
}

exports.required = function (req, res) {
  res.render('required');
};

exports.completed = function (req, res) {
  res.render('completed');
};

// In Progress page
exports.wip = function (req, res) {
  res.render('wip');
}

exports.print = function (req, res) {
  res.render('print');
}

exports.eval = function (req, res) {
  res.render('eval');
}

exports.journey = function (req, res) {
  res.render('journey');
};

exports.checkpoint = function (req, res) {
  res.render('checkpoint');
};