/**
 * desc Get all bootcamps
 * GET /api/v1/bootcamps
 * Access Public
 */
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'show all bootcamps'});
}

/**
 * desc Get single bootcamps
 * GET /api/v1/bootcamps/:id
 * Access Public
 */
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `show bootcamp ${req.params.id}`});
}

/**
 * desc  create new bootcamp
 * POST /api/v1/bootcamps
 * Access Private
 */
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'create bootcamp'});
}

/**
 * desc  update bootcamp
 * PUT /api/v1/bootcamp/:id
 * Access Private
 */
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `update bootcamp ${req.params.id}`});
}

/**
 * desc  delete bootcamp
 * DELETE /api/v1/bootcamp/:id
 * Access Private
 */
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `delete bootcamp ${req.params.id}`});
}