import firebase from 'firebase';

    function loginFirebase (email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        });
    }
    function logoutFirebase () {
        return firebase.auth().signOut().then(function() {
            // Sign-out successful.
            alert("You have successfully logged out!");
        }, function(error) {
            // An error happened.
            console.log(error);
        });
    }

module.exports = {
    loginFirebase: loginFirebase,
    logoutFirebase: logoutFirebase,
};
// export default UserSignIn;