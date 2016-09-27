import firebase from 'firebase';

let db = firebase.database();

class UserStore {
    constructor() {
        this.noOpt = new Promise((resolve, reject) => { resolve(); });
        this.path = "/lessons";
        this.dbRef = db.ref(this.path);
    }
    get = () => {
        return this.dbRef.once("value").then((snapshot) => {
            let lessons = [];
            snapshot.forEach((lesson) => {
                lessons.push(lesson.val());
            });
            return lessons;
        });
    }
    add = (lessonData) => {
        if (!lessonData) { return this.noOpt; }
        let pushKey = this.dbRef.push().key;
        lessonData.id = pushKey;
        return this.dbRef.child(lessonData.id).update(lessonData);
    }

    remove = (lessonId) => {
        return this.dbRef.child(lessonId).remove();
    }

}

export default new UserStore();