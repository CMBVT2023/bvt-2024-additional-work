export function employeeObject(name, position) {
    this.employeeName = name;
    this.employeePosition = position;
}

export function businessObject(id, name, owner) {
    this.businessID = id;
    this.businessName = name;
    this.businessOwner = owner;
    this.businessEmployeeAmount = function(arr) {
        return arr.length;
    };
}
