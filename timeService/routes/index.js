var express = require('express');
var router = express.Router();

accounts = [
  {
    "_id": 1,
    "accountName": "Account 1 - from the service",
    "accountLink": "http://mongodb.com",
    "opps": [
      {
        _id: "A1O1",
        oppName: "A1 Opp 1 - from the service"
      },
      {
        _id: "A1O2",
        oppName: "A1 Opp 2 - from the service"
      },
      {
        _id: "A1O3",
        oppName: "A1 Opp 3 - from the service"
      },
      {
        _id: "A1O4",
        oppName: "A1 Opp 4"
      },
      {
        _id: "A1O5",
        oppName: "A1 Opp 5"
      },
      {
        _id: "A1O6",
        oppName: "A1 Opp 6"
      },
      {
        _id: "A1O7",
        oppName: "A1 Opp 7"
      },
      {
        _id: "A1O8",
        oppName: "A1 Opp 8"
      },
      {
        _id: "A1O9",
        oppName: "A1 Opp 9"
      },
      {
        _id: "A1O10",
        oppName: "A1 Opp 10"
      }
    ]
  },
  {
    "_id": 2,
    "accountName": "Account 2",
    "accountLink": "http://mongodb.com",
    "opps": [
      {
        _id: "A2O1",
        oppName: "A2 Opp 1"
      },
      {
        _id: "A2O2",
        oppName: "A2 Opp 2"
      },
      {
        _id: "A2O3",
        oppName: "A2 Opp 3"
      },
      {
        _id: "A2O4",
        oppName: "A2 Opp 4"
      },
      {
        _id: "A2O5",
        oppName: "A2 Opp 5"
      }
    ]
  },
  {
    "_id": 3,
    "accountName": "Account 3",
    "accountLink": "http://mongodb.com",
    "opps": [
      {
        _id: "A3O1",
        oppName: "A3 Opp 1 - from the service"
      },
      {
        _id: "A3O2",
        oppName: "A3 Opp 2"
      },
      {
        _id: "A3O3",
        oppName: "A3 Opp 3"
      }
    ]
  },
  {
    "_id": 4,
    "accountName": "Account 4",
    "accountLink": "http://mongodb.com",
    opps: []
  },
  {
    "_id": 5,
    "accountName": "Account 5",
    "accountLink": "http://mongodb.com",
    opps: []
  }
]
;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/timeEntries', (req,res,next) => {
  res.header('Access-Control-Allow-Origin',"http://localhost:4200");
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  // console.log("Sending accounts: " + JSON.stringify(accounts));
  res.send(accounts);
});

module.exports = router;
