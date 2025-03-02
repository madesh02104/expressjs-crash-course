const notFound = (req, res, next) => {
    const error =  new Error('Not Found');
    error.status = 404;
    next(err);
}

export default notFound;