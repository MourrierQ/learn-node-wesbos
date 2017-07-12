const passport = require ('passport');
const crypto = require('crypto');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');
const mail = require('../handlers/mail');

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Failed Login',
  successRedirect: '/',
  successFlash: 'You are now logged in'
});

exports.logout = (req,res) => {
  req.logout();
  req.flash('success', 'You are now logged out');
  res.redirect('/')
};

exports.isLoggedIn = (req, res, next) => {
  // first check if he user is authenticated
  if(req.isAuthenticated()){
    next();
    return;
  }
  req.flash('error', 'You must be logged in !');
  res.redirect('/login');
};

exports.forgot = async (req,res) => {
  //1. See if a user with that email exists
  const user = await User.findOne({email:req.body.email});
  if(!user){
    req.flash('error', 'No account with that emai');
    return res.redirect('/login');
  }
  //2. Set reset tokens and expiry on their account
  user.resetPasswordToken = crypto.randomBytes(20).toString('hex');
  user.resetPasswordExpires = Date.now() + 3600000;//one hour from now
  await user.save();
  //3. Send them an email with that token
  const resetURL = `http://${req.headers.host}/account/reset/${user.resetPasswordToken}`;
  await mail.send({
    user,
    filename: 'password-reset',
    subject: 'Password Reset',
    resetURL,
  })
  req.flash('success', `You hav ebeen sent an email with a password reset link.`);
  //4. redirect to login page
  res.redirect('/login');
};

exports.reset = async (req,res) => {
  const user = await User.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: { $gt: Date.now()}
  });
  if(!user){
    req.flash('error', 'Token is invalid or has expired');
    return res.redirect('/login');
  }
  res.render('reset', { title: 'Reset your password'});
}

exports.confirmedPassword = (req,res,next) => {
  if(req.body.password === req.body["password-confirm"]){
    return next();//Keep going
  }
  req.flash("error", "Oops, your passwords don't match");
  res.redirect("back");
};

exports.update = async (req,res) => {
  const user = await User.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: { $gt: Date.now()}
  });

  if(!user){
    req.flash('error', 'Password reset is invalid or has expired');
    return res.redirect('/login');
  }

  const setPassword = promisify(user.setPassword, user);
  await setPassword(req.body.password);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  const updatedUser = await user.save();
  await req.login(updatedUser);
  req.flash('success', "Password updated");
  res.redirect('/');


}