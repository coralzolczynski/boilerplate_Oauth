const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// set up API routes
// prepends /api to all the routes declared in this file

router.use("/api", apiRoutes);

module.exports = router;