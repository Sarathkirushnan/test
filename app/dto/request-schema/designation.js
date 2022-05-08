const Joi = require('joi');

exports.designationReqFormet = (paylode) => {
	const designation = Joi.object().keys({
		id: Joi.number(),
		name: Joi.string().required(),
	});
	return designation.validate(paylode);
};
