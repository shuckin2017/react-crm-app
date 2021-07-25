module.exports = (req, res, next) => {
  res.header('Content-Range', 'calendar 0-20/20')
  next()
}