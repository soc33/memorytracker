const router = require("express").Router();
// const entryRoutes = require("./entries");
const userRoutes = require("./users");

// entry routes
// router.use("/entries", entryRoutes);
router.use("/user", userRoutes);

module.exports = router;
