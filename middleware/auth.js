module.exports = function ensureAuth(req,res,next){
  if(req.isAuthenticated()){
    return next()
  }else{
    res.redirect('/')
  }
}

// module.exports = {
//     ensureAuth: function (req, res, next) {
//       if (req.isAuthenticated()) {
//         return next()
//       } else {
//         res.redirect('/')
//       }
//     }
//   }
  