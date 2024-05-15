const getUser="SELECT * FROM information";
const getUserById="SELECT * FROM information WHERE id = $1";
const exist="SELECT s FROM information s WHERE s.email=$1";
const addUser="INSERT INTO information (name, email, password, age) VALUES ($1,$2, $3, $4)";
const removeUser="DELETE FROM information WHERE id = $1"
const updateUser="UPDATE information SET name = $1, email = $2, password = $3, age = $4 WHERE id = $5"

module.exports={ getUser, getUserById,exist,addUser,removeUser,updateUser}