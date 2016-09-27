import firebase from 'firebase';

let db = firebase.database();

class UserStore {
    constructor() {
        this.noOpt = new Promise((resolve, reject) => { resolve(); });
        this.path = "/lessons";
        this.dbRef = db.ref(this.path);
    }
    get = () => {
        let userId = firebase.auth().currentUser.uid;
        return this.dbRef.orderByChild("teacherId").equalTo(userId).once("value").then((snapshot) => {
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
        let user = firebase.auth().currentUser;
        lessonData.id = pushKey;
        lessonData.teacherId = user.uid;
        lessonData.teacherName = user.email;
        return this.dbRef.child(lessonData.id).update(lessonData);
    }

    remove = (lessonId) => {
        return this.dbRef.child(lessonId).remove();
    }

}

export default new UserStore();