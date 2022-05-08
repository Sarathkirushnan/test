exports.sucessRes = (data) => {
	return { success: true, result: data };
};

exports.errorRes = (err) => {
	return { success: false, error: err || 'internal server error..!' };
};
