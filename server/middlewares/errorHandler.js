const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case 'EmailPasswordRequired':
      res.status(400).json({ message: 'Email and Password is required' });
      break;

    case 'EmailPasswordInvalid':
      res.status(400).json({ message: 'Email or Password is invalid' });
      break;
  
    default:
      break;
  }
}

module.exports = errorHandler;