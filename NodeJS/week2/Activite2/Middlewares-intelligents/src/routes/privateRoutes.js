const express = require("express");
const router = express.Router();

router.get("/secret", (req, res) => {
    res.json({
        success: true,
        msg: "Voici une info secrète"
    });
});

module.exports = router;
