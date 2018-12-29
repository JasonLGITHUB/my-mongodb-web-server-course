
var mongoose = require('mongoose');
var User = mongoose.model('User', {
  email: {
        type: String,
    required: true,
        trim: true,
   minlength: 1,
 }
});

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
