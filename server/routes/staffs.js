const express = require("express");
const router = express.Router();
const staffControl = require('../controllers/staffController')

router.get('/', (req, res) => {
    res.send("Hello World!")
})

router.get('/allstaffs', staffControl.getAllStaffs)
router.post('/create', staffControl.createNewStaff)
router.get('/delete/:id', staffControl.deleteStaff)
router.get('/details/:id', staffControl.detailsStaff)
router.get('/edit/:id', staffControl.editStaff)


module.exports = router