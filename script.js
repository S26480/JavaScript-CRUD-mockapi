// Base URL of the MockAPI
const api_base_url="https://6ac3ecc6ae53bf25b80f24c0.mockapi.io/api";

// Function to fetch all users
async function getUsers(){

    // Send GET request to fetch all users
    const res=await fetch(`${api_base_url}/Users`);

    // Convert the response into JSON
    const data=await res.json();

    // Display the users in the console
    console.log(data);
}

// Call the function to get all users
getUsers();

// Function to fetch a user by ID
async function getUser(id){

    // Send GET request using the user's ID
    const res=await fetch(`${api_base_url}/Users/${id}`);

    // Convert the response into JSON
    const data=await res.json();

    // Display the user data in the console
    console.log(data);
}

// Get users with ID 5 and 10
getUser(5);
getUser(10);

// Function to create a new user
async function createUser(user){

    // Send POST request to create a new user
    const res = await fetch(`${api_base_url}/Users`, {

        // Specify the HTTP method
        method: "POST",

        // Specify that the data is in JSON format
        headers:{
            "Content-Type": "application/json"
        },

        // Convert the user object into JSON
        body: JSON.stringify(user)
    });

    // Convert the response into JSON
    const data = await res.json();

    // Display the created user in the console
    console.log(data);
}

// Create a new user object
const newUser={
    name: "Hannah",
    email: "test@123.com"
};

// Call the function to create the user
createUser(newUser);

// Function to update an existing user
async function updateUser(user,id){

    // Send PUT request using the user's ID
    const res=await fetch(`${api_base_url}/Users/${id}`, {
 
        // Specify the HTTP method
        method:"PUT",

        // Specify that the data is in JSON format
        headers:{
            "Content-Type":"application/json"
        },

        // Convert the updated user object into JSON
        body:JSON.stringify(user)
    });

    // Convert the response into JSON
    const data=await res.json();

    // Display the updated user in the console
    console.log(data);
}

// Create an object containing updated user details
const updatedUser={
    name:"George",
    email:"ghggg@13.com",
    mobileNumber:"1233456780",
}

// Update the user with ID 13
updateUser(updatedUser,13);

// Function to delete a user
async function deleteUser(id){

    // Send DELETE request using the user's ID
    const res=await fetch(`${api_base_url}/Users/${id}`,{

        // Specify the HTTP method
        method:"DELETE",
    });

    // Convert the response into JSON
    const data=await res.json();

    // Display the deleted user in the console
    console.log(data);
}

// Delete the user with ID 8
deleteUser(6);

