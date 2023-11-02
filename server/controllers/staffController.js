const Staff = require('../models/staffModel')

const getAllStaffs = async(req, res) => {
   await Staff.find()
    .then((result) => {
        console.log("Server Started");
        res.json(result)
    })
    .catch((err) => {
        res.send(err)
    })
}

const createNewStaff = async(req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.send("There must be a body.");
    } else {
    console.log(req.body);
    const staff = await new Staff(req.body);
    await staff.save()
    .then((result) => {
        res.json({message: "New Staff Created Successfully"})
    })
    .catch((err) => {
        res.send(err)
    })
}
}

const deleteStaff = async(req, res) => {
    const staffid = req.params.id
    await Staff.findByIdAndDelete(staffid)
    .then((result) => {
        res.json({message: "Staff Deleted Successfully"})
    })
    .catch((error) => {
        res.send(error)
    })
}

const detailsStaff = async(req, res) => {
    const staffid = req.params.id
    await Staff.findById(staffid)
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        res.send(err)
    })
}

const editStaff = async(req, res) => {
    const staffid = req.params.id;
    await Staff.findById(staffid)
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        res.send(err)
    })
}



module.exports = {
    getAllStaffs,
    createNewStaff,
    deleteStaff,
    detailsStaff,
    editStaff
}