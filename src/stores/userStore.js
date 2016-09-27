import firebase from 'firebase';

let db = firebase.database();

class UserStore {
    constructor() {
        this.noOpt = new Promise((resolve, reject) => { resolve(); });
        this.path = "/user";
        this.dbRef = db.ref(this.path);
    }

    add = (userData) => {
        let email = userData.email;
        let password = userData.phone;
        if (!userData) { return this.noOpt; }
        
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            userData.id = user.uid;
            return this.dbRef.child(user.uid).update(userData);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            // ...
        });
    }

    updateSchedule = (userSchedule) => {
        var user = firebase.auth().currentUser;
        this.dbRef.child(user.uid).child("lessons").push(userSchedule);
    }

    remove = (userId) => {
        return this.dbRef.child(userId).remove();
    }

}

export default new UserStore();