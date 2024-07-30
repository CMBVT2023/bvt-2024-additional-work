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

    static checkStudent(id) {
        let list = this.getStudentList();

        for (const item of list) {
            if (item.studentID == id) {
                return false;
            }
        }

        return true;
    } 
}