import firebase from 'firebase';

let db = firebase.database();

class LessonStore {
    constructor() {
        this.noOpt = new Promise((resolve, reject) => { resolve(); });
        this.path = "/lessons";
        this.dbRef = db.ref(this.path);
        this.lessons = []; //added by Glen for temp memory purpose, may not use this method
    }
    get = (userId) => {
        if (!userId) {
            userId = firebase.auth().currentUser.uid;
            console.log("LessonStore userId argument is not given");
        }
        else {
            console.log("LessonStore userId argument exists: " + userId);
        }
        return this.dbRef.orderByChild("teacherId").equalTo(userId).once("value").then((snapshot) => {
            let lessons = [];
            snapshot.forEach((lesson) => {
                lessons.push(lesson.val());
                console.log("lessonStore: " + lesson.val());
            });
            return lessons;
        });
    }
    // getAllTeacherLessons = () => {
    //     return db.ref('/user').orderByChild("type").equalTo("teacher").once("value").then((snapshot) => {
    //         let allLessons = [];
    //         // snapshot.forEach((lesson) => {
    //         //     lessons.push(lesson.val());
    //         // });
    //         // return lessons;
    //     });
    // }
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

export default new LessonStore();