const express = require("express");
const router = express.Router();
const jsDocOptions = require("../config/swagger");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("swagger-jsdoc");

/**
 * @openapi
 * /greet:
 *   get:
 *     description: Returns a greeting message
 *     responses:
 *       200:
 *         description: message.
 *     parameters:
 *       - in: body
 *         name: name
 *         required: true
 *         schema: 
 *          type: string
 */
router.get("/greet", function (req, res, next) {
    if(req.body.name) {
        const name = req.body.name;
        res.send(`Happy Birthday, ${name}!` )
    }
    res.status(404);
    res.send("Requested route is not found");
});

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDoc(jsDocOptions)));


module.exports = router;
