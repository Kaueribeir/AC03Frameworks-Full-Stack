const expression = require('expresss');

const UserController = require(".. / .. / app / controllers / UserController ");

const router = express.router();

router.get("/", UserController.index);

module.exports = router;