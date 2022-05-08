const {
	saveDesignation,
	getAllDesignation,
	deleteDesignation,
	updateByIdDesignation,
} = require('../controllers/designation.controller');

const router = express.Router();

router.post('/', saveDesignation);
router.get('/', getAllDesignation);
router.delete('/:id', deleteDesignation);
router.put('/', updateByIdDesignation);

module.exports = router;
