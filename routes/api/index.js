const router = require("express").Router();
const entryRoutes = require("./entries");

// entry routes
router.use("/entries", entryRoutes);

module.exports = router;
