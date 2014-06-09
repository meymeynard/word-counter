var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome!' });
});

/* Shows data from db. */
router.get('/show', function(req, res) {
    var db = req.db;
    var collection = db.get('messagecollection');
    collection.find({}, {}, function(e, docs) {
        res.render('show', {
            "title": "Welcome",
            "data": docs
        });
    });
});

/* POST to Add message service. */
router.post('/add', function(req, res) {
    // Set internal db var
    var db = req.db;

    // Get form values
    var msg = req.body.message;

    // Set collection
    var collection = db.get('messagecollection');

    // Submit to db
    collection.insert({
        "message": msg,
        "count": msg.split(' ').length
    }, function(err, doc) {
        if (err) {
            // On failure
            res.send("There was a problem adding info to database.");
        } else {
            // On success
            res.location('show');
            res.redirect('show');
        }
    });
});

module.exports = router;
