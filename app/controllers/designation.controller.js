const {
	saveDesignation,
	allDesignations,
	deleteByIdDesig,
	updateByIdDesig,
} = require('../service/designation.service');

exports.saveDesignation = (req, res) => {
	saveDesignation(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};

exports.getAllDesignation = (req, res) => {
	allDesignations(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};

exports.deleteDesignation = (req, res) => {
	const { id } = req.params;
	deleteByIdDesig(Number(id), (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};

exports.updateByIdDesignation = (req, res) => {
	updateByIdDesig(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};
