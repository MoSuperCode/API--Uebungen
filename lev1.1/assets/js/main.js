// CRUD Model : Create, Read, Update, Delete

// create: POST
// read: GET
// update: PUT
// delete: DELETE

fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });