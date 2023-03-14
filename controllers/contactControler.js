const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// @route get /api/conacts

const getContacts =  asyncHandler( async(req, res) =>{
    const conacts = await Contact.find();
    res.status(200).json(conacts);
});

// route post /api/conacts 

const createContact = asyncHandler( async(req, res) =>{
    console.log(req.body);
    const {name, email , phone} =req.body;
    if(!name ||  !email  || !phone){
        res.status(400);
        // massage:"All fields are mandatory"
        throw new Error ("all fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact);
});


// @route get /api/conacts/:id


const getContact = asyncHandler( async(req, res ) =>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(400);
        throw new Error("Contact not found ");
    }
    res.status(200).json({
        message:`get contact for ${req.params.id}`
    });
});


// @route put /api/conacts/:id


const updateContact = asyncHandler( async(req, res) => {
    res.status(200).json({
        massage: `update contect for ${req.params.id}`
    });
});


// route delete /api/conacts/:id


const deleteContact = asyncHandler( async(req, res) => {
    res.status(200).json({
        massage: `delete contect for ${req.params.id}`
    });
});



// exports all functions
module.exports ={getContacts, createContact,getContact,updateContact,deleteContact};