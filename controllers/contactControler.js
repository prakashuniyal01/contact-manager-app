const asyncHandler = require("express-async-handler");
// @route get /api/conacts

const getContacts =  asyncHandler( async(req, res) =>{
    res.status(200).json({
        message:"get all contect"    
    });
});

// route post /api/conacts 

const createContact = asyncHandler( async(req, res) =>{
    console.log(req.body);
    const {name, email , phoneNumber} =req.body;
    if(!name ||  !email  || !phoneNumber){
        res.status(400);
        // massage:"All fields are mandatory"
        throw new Error ("all fields are mandatory");
    }
    res.status(201).json({
        message:"create  contect"    
    });
});


// @route get /api/conacts/:id


const getContact = asyncHandler( async(req, res ) =>{
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