import firebase from 'firebase';

let db = firebase.database();

class UserStore {
    constructor() {
        this.noOpt = new Promise((resolve, reject) => { resolve(); });
        this.path = "/user";
        this.dbRef = db.ref(this.path);
        // some user data to initialize
        this.uid = "";
        this.accountType = "";
        this.email = "";
        this.name = "";
        this.scheduleLink = "";
    }
    init = (uid) => {
        this.uid = uid;
        console.log("userStore: " + uid); 
        return this.dbRef.child(uid).once("value").then((snapshot) => {
            this.accountType = snapshot.val().type;
            this.email = snapshot.val().email;
            this.name = snapshot.val().name;
            this.scheduleLink = this.accountType === "student"? "/admin/schedule/student" : "/admin/schedule";
        });
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