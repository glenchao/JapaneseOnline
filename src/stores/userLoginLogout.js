import firebase from 'firebase';

    function loginFirebase (email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + ": " + errorMessage);
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
    function checkAccountType () {
        let user = firebase.auth().currentUser;
        firebase.database().ref('user/'+user.uid).once("value").then((snapshot) => {
            let type = snapshot.val().type;
            console.log(type);
            let eventKey = type === 'student' ? '/schedule/student' : '/schedule';
            return eventKey;
        });
    }

module.exports = {
    loginFirebase: loginFirebase,
    logoutFirebase: logoutFirebase,
    checkAccountType: checkAccountType,
};
// export default UserSignIn;