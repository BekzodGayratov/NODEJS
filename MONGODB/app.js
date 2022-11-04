const mongoose = require('mongoose');
const User = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
});


// Create user
async function createUser() {
    let newUser = await User.create({
        name: "Hello",
        email: "exammple@gmail.com",
    });
}

// Find user
async function findUser() {
    let user = await User.findOne({ name: "Hello" }, (data, err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    });
}

// Find All users 
function findAllUsers() {
    let allUsers = User.find({}, (data, err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}

// Delete user
function deleteUser() {
    User.deleteOne({ name: "Hello" }, (data, err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully deleted");
        }
    });
}




// Calle functions
// findUser();
// createUser();
// findAllUsers();
// deleteUser();