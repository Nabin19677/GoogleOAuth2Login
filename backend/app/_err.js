

export default (err, req, res, next) => {
    res.json({msg : err.message})
}