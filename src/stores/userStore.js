import firebase from 'firebase';

let db = firebase.database();

class UserStore {
    constructor() {
        this.noOpt = new Promise((resolve, reject) => { resolve(); });
        this.path = "/user";
        this.dbRef = db.ref(this.path);
    }
    add = (user) => {
        if (!user) { return this.noOpt; }
        if (!user.id) {
            user.id = this.dbRef.push().key;
        }
        return this.dbRef.child(user.id).update(data);
    }

    remove = (userId) => {
        return this.dbRef.child(userId).remove();
    }

}

export default UserStore();