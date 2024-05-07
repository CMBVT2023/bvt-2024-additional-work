const favoriteAnimal = "bobCat";

switch (favoriteAnimal) {
    case "bobCat":
    case "jaguar":
    case "cat": {
        console.log("Cats are cool!")
        break;
    } 
    case "dog": {
        console.log("Dogs are cool!")
        break;
    }
    case "shark": {
        console.log("Shark are cool!")
        break;
    }
    default: {
        console.log("I don't know that animal.")
        break;
    }
};

// If else statement method 

if (favoriteAnimal === "cat") {
    console.log("Cats are cool!")
} else if (favoriteAnimal === "dog") {
    console.log("Dogs are cool!")
} else if (favoriteAnimal === "shark") {
    console.log("Shark are cool!")
} else {
    console.log("I don't know that animal.")
}