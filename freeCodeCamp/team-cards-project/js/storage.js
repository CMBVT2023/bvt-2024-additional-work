export class businessStorage {
    static setBusinessArray(arr) {
        localStorage.setItem('businesses', JSON.stringify(arr));
    }

    static getBusinessArray() {
        return localStorage.getItem('businesses') || [];
    }


}

export class employeeStorage {
    
}