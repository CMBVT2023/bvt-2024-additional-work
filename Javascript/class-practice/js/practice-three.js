let phonebook = [
    {"name": "Alice", "phoneNumber": "123-456-7890"},
    {"name": "Bob", "phoneNumber": "234-567-8901"},
    {"name": "Charlie", "phoneNumber": "345-678-9012"},
    {"name": "David", "phoneNumber": "456-789-0123"},
    {"name": "Eve", "phoneNumber": "567-890-1234"},
    {"name": "Frank", "phoneNumber": "678-901-2345"},
    {"name": "Grace", "phoneNumber": "789-012-3456"},
    {"name": "Helen", "phoneNumber": "890-123-4567"},
    {"name": "Igor", "phoneNumber": "901-234-5678"},
    {"name": "John", "phoneNumber": "012-345-6789"}
  ];


  function lookup() {
    let name = document.getElementById('nameInput').value;
    let person = phonebook.find(p => p.name === name);
    let resultElement = document.getElementById('result');


    if (person) {
      resultElement.textContent = `${person.name}'s phone number is: ${person.phoneNumber}`;
    } else {
      resultElement.textContent = `No phone number found for ${name}.`;
    }
  }
