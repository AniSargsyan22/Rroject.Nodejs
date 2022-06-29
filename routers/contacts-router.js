import express from "express";
const contactRouter = express.Router();
import contactsCtrl from '../controllers/contacts-controller.js';


contactRouter.get('/contacts', contactsCtrl.getContactsController);
contactRouter.post('/contacts', contactsCtrl.postContactsController);
contactRouter.delete('/contacts', contactsCtrl.deleteContactsController);
contactRouter.put('/contacts', contactsCtrl.editContactsController);


export default contactRouter;