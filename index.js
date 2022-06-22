import express from "express";
const app = express();
const port = 5000;

app.listen(port, ()=> console.log(`Server is listening port ${port}`));

let contacts = [
    {
        id: 1,
        title: 'Ani Sargsyan 1',
        imageUrl: 'some url',
        isPublic: true,
    },
    {
        id: 2,
        title: 'Ani Sargsyan 2',
        imageUrl: 'some url',
        isPublic: false,
    },
    {
        id: 3,
        title: 'Ani Sargsyan 3',
        isPublic: true,
    },

];

let id = contacts.length;

function getContactsController(req, res) {

    console.log('This is getContactsController')
    
    return res.send({
        data: contacts,
    });
}

function postContactsController(req, res) {
    const requestQuery = req.query;

    console.log('requestQuery', requestQuery);

    contacts.push({
        id: ++id,
        ...requestQuery,
    });

    contacts.push(requestQuery);
    
    return res.send({
        name: contacts
    });
}


function deleteContactsController(req, res) {

    const requestQuery = req.query;

    console.log('requestQuery', requestQuery);

    contacts = contacts.filter((contacts)=> {
        return contacts.id !== +requestQuery.id;
    })

    return res.send({
        name: contacts,
    });
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

const json = express.json();

app.get('/contacts', getContactsController);
app.post('/contacts', postContactsController);
app.delete('/contacts', deleteContactsController);
app.put('/contacts', editContactsController);


// app[method] ([address, controller(req, res)])