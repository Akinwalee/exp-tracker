export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  } else {
    res.status(500).json({ error: err.message, stack: err.stack });
  }
};
