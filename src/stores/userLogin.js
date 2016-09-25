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

module.exports = {
    loginFirebase: loginFirebase
};
// export default UserSignIn;