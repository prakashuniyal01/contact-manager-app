const express = require("express");
const {getContacts, createContact,getContact, updateContact, deleteContact } = require("../controllers/contactControler");
const router = express.Router();


// first methods to define routes 
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


// =============================******************************====================================
// second methods 
//  sending a get request 
// router.route("/").get(getContacts)
//  sending a put request 
// router.route("/").post(createContact);
//  sending a get request using params methodes 
// router.route("/:id").get(getContact);
//  sending a put request using params methode
// router.route("/:id").put(updateContact);
//  sending a delete  request using params methode
// router.route("/:id").delete(deleteContact);

// exports routers 
module.exports = router;