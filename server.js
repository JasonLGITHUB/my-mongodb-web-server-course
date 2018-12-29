// var mongoose = require('mongoose')
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true } );
var express = require('express')
var bodyParser = require('body-parser')

var {mongoose } = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos', (req, res) => {
  var todo = new Todo ({
    text: req.body.text

  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});
  app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
    res.send({todos});
  }, (e)=> {
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log(' Started on port 3000')
});
//Todo model
// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//
//   completed: {
//     type: Boolean,
//     default:false
//   },
//
//   completedAt: {
//     type: Number,
//     default:null
//
//   }
//
// });

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
//
// newTodo.save().then((doc) => {
//   console.log(' Saved todo', doc);
// }, (e) => {
//    console.log('Unable to save todo')
// });

// var otherTodo = new Todo({
//   text: 'Edit this video '
//   // completed: true,
//   // completedAt: 123
//
//   });
//
//   otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
//  }, (e) => {
//     console.log('Unable to save', e);
//
//   });
//
//   //User model
//   var User = mongoose.model('User', {
//     email: {
//       type:String,
//       required: true,
//       minlength: 1
//     }
//   });
//
//   var user = new User ({
//     email: 'sanwiii@yahoo.com'
//
//   });
//
//   user.save().then((doc) => {
//     console.log('User saved', doc);
//   }, (e) => {
//     console.log('Unable to save user', e)
//
//   });
//   //email-require trim-set minlength 0f 1
