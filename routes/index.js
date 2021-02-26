var requiredData = require('../data/required.json');
var wipData = require('../data/wip.json');
var completedData = require('../data/completed.json');


exports.login = function (req, res) {
  res.render('login');
}

exports.required = function (req, res) {
  res.render('required', {
    majors: requiredData.majors,
    minors: requiredData.minors,
  });
};

exports.completed = function (req, res) {
  res.render('completed', {
    majors: completedData.majors,
    minors: completedData.minors,
  });
};

// In Progress page
exports.wip = function (req, res) {
  res.render('wip', {
    majors: wipData.majors,
    minors: wipData.minors,
  });
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