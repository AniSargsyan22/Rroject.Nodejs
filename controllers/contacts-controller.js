
import Contact from '../schemas/contacts.js';

async function getContactsController(req, res) {
    const contacts = await Contact.find();
    return res
    .send({
        data: contacts,
    });
}

async function postContactsController(req, res) {
   const contactBody = req.body;
    
    const saveData = await Contact.create(contactBody);

    return res
    .status(201)
    .send({
        data: saveData
    });
}

async function deleteContactsController(req, res) {

    const requestQuery = req.query;
    const requestBody = req.body;

    console.log('requestQuery', requestQuery);

    const result = await Contact.updateOne(
        {_id: requestQuery._id}, 
        {title: requestBody.title}, {isPublic: true});

    console.log('result', result)

    if (result.modifiedCount === 0) {
        return res
        .status(404)
        .send({message: 'Contact not found'}); 
    }
   
    return res
    .status(201)
    .send({message: 'Data was modified'});
}

function editContactsController(req, res) {

    const requestQuery = req.query;

    const idContact = contacts.map(contacts=> {
        if (contacts.id === +requestQuery.id) {
            contacts.title = requestQuery.title;
        }

        return contacts;
    });

       return res.send({
        name: contacts,
    });
}

export default {
    getContactsController,
    postContactsController,
    deleteContactsController,
    editContactsController,    
}
