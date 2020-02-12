const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
/**
 * desc Get all bootcamps
 * GET /api/v1/bootcamps
 * Access Public
 */
exports.getBootcamps = asyncHandler(async (req, res, next) => {
	const bootcamps = await Bootcamp.find();
	res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
});

/**
 * desc Get single bootcamps
 * GET /api/v1/bootcamps/:id
 * Access Public
 */
exports.getBootcamp = asyncHandler(async (req, res, next) => {
	const bootcamp = await Bootcamp.findById(req.params.id);
	if (!bootcamp) {		
		return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
		
	}
	res.status(200).json({ success: true, data: bootcamp });
});

/**
 * desc  create new bootcamp
 * POST /api/v1/bootcamps
 * Access Private
 */
exports.createBootcamp = asyncHandler(async (req, res, next) => {
	const bootcamp = await Bootcamp.create(req.body);
	res.status(201).json({ success: true, data: bootcamp });
});

/**
 * desc  update bootcamp
 * PUT /api/v1/bootcamp/:id
 * Access Private
 */
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
	const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true
	});
	if (!bootcamp) {
		return next(
			new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
		);
	}
	res.status(200).json({ success: true, data: bootcamp });
});

/**
 * desc  delete bootcamp
 * DELETE /api/v1/bootcamp/:id
 * Access Private
 */
exports.deleteBootcamp = asyncHandler( async (req, res, next) => {
	const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
	if (!bootcamp) {
		return next(
			new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
		);
	}
	res.status(200).json({ success: true, data: {} });
});