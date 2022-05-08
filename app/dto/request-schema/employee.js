const Joi = require('joi'); //yup

exports.employeeReqFormet = (paylode) => {
	const employee = Joi.object().keys({
		id: Joi.number(),
		firstName: Joi.string().min(3).max(30).required(),
		lastName: Joi.string().min(3).max(30).required(),
		dateOfBirth: Joi.date(),
		contactNo: Joi.number().required(),
		address: Joi.string().alphanum().min(3).max(30).required(),
		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
			.required(),
		nic: Joi.string().alphanum().required(),
		joinDate: Joi.date().required(),
		religon: Joi.string(),
		gender: Joi.string().valid('Male', 'Female').required(),
		deactivateStatus: Joi.boolean().required(),
		deactivateReason: Joi.string().required(false),
		approverStatus: Joi.boolean(),
		designationId: Joi.number().required(),
	});
	return employee.validate(paylode);
};
