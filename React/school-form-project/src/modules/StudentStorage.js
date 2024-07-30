export class StudentStorage {
    static getStudentList() {
        return (JSON.parse(localStorage.getItem('studentStorage')) || []);
    }

    static setStudentList(array) {
        localStorage.setItem('studentStorage', JSON.stringify(array));
    }

    static addNewStudent(obj) {
        let list = this.getStudentList();

        list.push(obj);

        this.setStudentList(list);
    }

    static findStudent(id) {
        let list = this.getStudentList();

        for (const index in list) {
            if (list[index].studentID == id) {
                return index;
            }
        }
    }

    static checkStudent(id) {
        let exists = this.findStudent(id);

        if (exists >= 0) {
            return false;
        } else {
            return true;
        }
    }

    static removeStudent(id) {
        let list = this.getStudentList();
        let index = this.findStudent(id);

        list.splice(index, 1);

        this.setStudentList(list);
    }
}