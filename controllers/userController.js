const getUsers = (req, res) => {

    res.json({
        message: "All users"
    });

};


const getUserById = (req, res) => {

    const userId = req.params.id;

    res.json({
        message: "User found",
        userId: userId
    });

};


const createUser = (req, res) => {

    console.log("Received User:", req.body);

    res.status(201).json({
        message: "User created successfully",
        user: req.body
    });

};


module.exports = {
    getUsers,
    getUserById,
    createUser
};