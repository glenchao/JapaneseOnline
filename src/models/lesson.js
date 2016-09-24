class Lesson {
    constructor(params = {}) {
        this.id = params.id || "";
        this.teacherId = params.teacherId || "";
        this.teacherName = params.teacherName || "";
        this.startDateTime = params.startTime || "";
        this.endDateTime = params.endTime || "";
        this.studentLimit = 3;
        this.students = params.students || [];
    }
}