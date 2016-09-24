export UserType = {
    Student: "Student",
    Teacher: "Teacher"
}

class User {
    constructor(params = {}) {
        this.id = params.id || "";
        this.type = params.type || UserType.Student;
        this.name = params.name || "";
        this.email = params.email || "";
        this.lessons = params.lessons || [];
    }
}

export default User;