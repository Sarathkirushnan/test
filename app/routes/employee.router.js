const {
	saveEmpoyee,
	getEmpoyee,
} = require('../controllers/employee.controller');

const router = express.Router();

router.post('/', saveEmpoyee);
router.get('/', getEmpoyee);

module.exports = router;
