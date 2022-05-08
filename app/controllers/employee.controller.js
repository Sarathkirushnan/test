const { saveEmploye, getEmploye } = require('../service/employee.service');

exports.saveEmpoyee = (req, res) => {
	saveEmploye(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};

exports.getEmpoyee = (req, res) => {
	getEmploye(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};
