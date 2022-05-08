const { employeeReqFormet } = require('../dto/request-schema/employee');
const { Designation, Employee } = require('../models');

exports.saveEmploye = async (req, resCallBack) => {
	res = [];
	const employeePaylode = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		dateOfBirth: req.body.dateOfBirth,
		contactNo: req.body.contactNo,
		address: req.body.address,
		email: req.body.email,
		nic: req.body.nic,
		joinDate: req.body.joinDate,
		religon: req.body.religon,
		gender: req.body.gender,
		deactivateStatus: req.body.deactivateStatus,
		deactivateReason: req.body.deactivateReason,
		approverStatus: req.body.approverStatus,
		designationId: req.body.designationId,
	};
	const result = employeeReqFormet(employeePaylode);
	if (result.error != null) {
		return resCallBack(true, result.error);
	}
	try {
		Employee.create(employeePaylode)
			.then((emplo) => {
				return resCallBack(false, emplo);
			})
			.catch((e) => {
				return resCallBack(true, e);
			});
	} catch (error) {
		console.log(error);
		return resCallBack(true, error);
	}
};

exports.getEmploye = async (req, resCallBack) => {
	Employee.findAll({ include: ['designation'] })
		.then((emp) => {
			return resCallBack(false, emp);
		})
		.catch((e) => {
			return resCallBack(true, e);
		});
};
exports.getFullName = async (req, resCallBack) => {
	Employee.getFullName()
		.then((emp) => {
			return resCallBack(false, emp);
		})
		.catch((e) => {
			return resCallBack(true, e);
		});
};
