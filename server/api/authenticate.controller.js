// Defines endpoint handler exposed to client side for retrieving department information from database
var login = function (db) {
    return function (req, res) {
        res.status(200).json({ user: req.user });
    };
};

var authenticate_user = function (db) {
    return function (req, res) {
        if (req.user) {
            res.status(200).json({ user: req.user });
        }
        else {
            res.sendStatus(401);
        }
    };
};

var logout = function (db) {
    return function (req, res) {
        req.logout();
        res.redirect('/');
    };
};

// Export route handlers
module.exports = function (db) {
    return {
        authenticate_user: authenticate_user(db),
        login: login(db),
        logout: logout(db),
    }
};