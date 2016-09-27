class Lesson {
    constructor(params = {}) {
        this.date = params.date || "";
        this.time = params.time || "";
        this.id = params.id || "";
        this.teacherId = params.teacherId || "";
        this.teacherName = params.teacherName || "";
        this.studentLimit = 3;
        this.students = params.students || [];
    }
}

module.exports = Lesson;