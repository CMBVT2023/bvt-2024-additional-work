export class businessStorage {
    static setBusinessArray(arr) {
        localStorage.setItem('businesses', JSON.stringify(arr));
    }

    static getBusinessArray() {
        return JSON.parse(localStorage.getItem('businesses')) || [];
    }

    static addNewBusiness(obj) {
        let list = this.getBusinessArray();

        list.push(obj);

        this.setBusinessArray(list);
    } 
}

export class employeeStorage {
    
}