const { designationReqFormet } = require('../dto/request-schema/designation');
const {
	addDesig,
	getAllDesig,
	deleteDesigById,
	updateDesigById,
} = require('../repository/designation.repo');

exports.saveDesignation = async (req, resCallBack) => {
	const paylode = {
		name: req.body.name,
	};
	const result = designationReqFormet(paylode);
	if (result.error != null) {
		return resCallBack(true, result.error);
	}
	return addDesig(paylode)
		.then(({ rows }) => {
			return resCallBack(false, rows);
		})
		.catch((error) => resCallBack(true, error));
};

exports.allDesignations = async (req, resCallBack) => {
	return getAllDesig()
		.then(({ rows }) => {
			return resCallBack(false, rows);
		})
		.catch((error) => resCallBack(true, error));
};

exports.deleteByIdDesig = async (id, resCallBack) => {
	return deleteDesigById(id)
		.then(({ rows }) => {
			return resCallBack(false, rows);
		})
		.catch((error) => resCallBack(true, error));
};

exports.updateByIdDesig = async (req, resCallBack) => {
	const paylode = {
		id: req.body.id,
		name: req.body.name,
	};
	const result = designationReqFormet(paylode);
	if (result.error != null) {
		return resCallBack(true, result.error);
	}
	return updateDesigById(paylode)
		.then(({ rows }) => {
			return resCallBack(false, rows);
		})
		.catch((error) => resCallBack(true, error));
};
