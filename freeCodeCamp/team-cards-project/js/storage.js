// Initializes a class for storing businesses in localStorage.
export class businessStorage {
    // Sets the localStorage businessArray to the array passed in.
    static setBusinessArray(arr) {
        localStorage.setItem('businesses', JSON.stringify(arr));
    }

    // Returns the localStorage businessArray.
    static getBusinessArray() {
        return JSON.parse(localStorage.getItem('businesses')) || [];
    }

    // Appends a new business to the businessArray in localStorage.
    static addNewBusiness(obj) {
        // Uses the method to retrieve the businessArray from the localStorage.
        let list = this.getBusinessArray();

        // Appends the passed in object to the businessArray.
        list.push(obj);

        // Calls the method to set the businessArray to the altered array.
        this.setBusinessArray(list);
    } 

    static removeBusiness(index) {
        // Uses the method to retrieve the businessArray from the localStorage.
        let list = this.getBusinessArray();

        // Removes the businessObject at the passed in index.
        list.splice(index, 1);

        // Calls the method to set the businessArray to the altered array.
        this.setBusinessArray(list);
    }

    static editBusiness(index, obj) {
        // Uses the method to retrieve the businessArray from the localStorage.
        let list = this.getBusinessArray();

        // Overwrites the object at the specified index with the new passed in obj.
        list[index] = obj;

        // Calls the method to set the businessArray to the altered array.
        this.setBusinessArray(list);
    }
}

// Initializes a class for storing employees in localStorage.
export class employeeStorage {
    
}