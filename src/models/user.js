export UserType = {
    Student: "Student",
    Teacher: "Teacher"
}

class User {
    constructor(params = {}) {
        this.email = params.email || "";
        this.phone = params.phone || "";
        this.name = params.name || "";
        this.channel = params.channel || "";
        this.other = params.other || "";
        this.type = params.type || UserType.Student;
        this.lessons = params.lessons || [];
        this.id = params.id || "";
    }
}

export default User;