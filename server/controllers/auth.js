exports.signup = (req, res) => {

    res.json({
        data: 'You hit the sign up end point controller'
    });

}
exports.signin = (req, res) => {
    let user = req.body;
    console.log("User information", user);
    res.json({
        data: "User Sign in"
    });
}