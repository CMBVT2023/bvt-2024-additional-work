function employeeObject(name, position) {
    this.employeeName = name;
    this.employeePosition = position;
}

function businessObject(name, owner) {
    this.businessName = name;
    this.businessOwner = owner;
    this.businessEmployeeAmount = function(arr) {
        return arr.length;
    };
}

