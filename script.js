const api_base_url="https://6ac3ecc6ae53bf25b80f24c0.mockapi.io/api";

async function getUsers(){
    const res=await fetch(`${api_base_url}/Users`);
    const data=await res.json();
    console.log(data);
}
getUsers();

async function getUser(id){
    const res=await fetch(`${api_base_url}/Users/${id}`);
    const data=await res.json();
    console.log(data);
}
getUser(5);
getUser(10);


async function createUser(user){
    const res = await fetch(`${api_base_url}/Users`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    const data = await res.json();
    console.log(data);
}
const newUser={
    name: "Hannah",
    email: "test@123.com"
};
createUser(newUser);


async function updateUser(user,id){
    const res=await fetch(`${api_base_url}/Users/${id}`, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    });
    const data=await res.json();
    console.log(data);
}
const updatedUser={
    name:"George",
    email:"ghggg@13.com",
    mobileNumber:"1233456780",
}
updateUser(updatedUser,13);


async function deleteUser(id){
    const res=await fetch(`${api_base_url}/Users/${id}`,{
        method:"DELETE",
    });
    const data=await res.json();
    console.log(data);
}
deleteUser(8);

