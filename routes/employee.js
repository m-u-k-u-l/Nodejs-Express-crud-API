const router = require("express").Router();
const employeeController = require('../controllers/employeeController');

router.post("/", employeeController.employee_create);
router.get("/", employeeController.employee_all);
router.get("/:employeeId", employeeController.employee_details);
router.put("/:employeeId", employeeController.employee_update);
router.patch("/:employeeId", employeeController.employee_update);
router.delete("/:employeeId", employeeController.employee_delete);

module.exports = router;
