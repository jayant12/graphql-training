// {
//   myDog {
//     name
//     age
//   }
  
//   myCat {
//     name
//     age
//   }
  
//   myParrot {
//     name
//     age
//   }
// }

const persons = [
  {
  name: 'Jayant',
  age: 25
  },
  {
    name: 'Scott',
    age: 26
  }
];

const cat = {
  name: 'Katie',
  age: 2,
  type: 'Cat',
  furColor: 'Brown'
};

const dog = {
  name: 'Becky',
  age: 5,
  type: 'Dog',
  breed: 'Husky'
};

const parrot = {
  name: 'Packkot',
  age: 1,
  type: 'Parrot',
  color: 'green-yellow',
};

const pets = [
  cat,
  dog,
  parrot
];

const catResolver = (root, args, ctx) => {
  return cat;
}

const dogResolver = (root, args, ctx) => {
  return dog;
}

const personResolver = (root, args, ctx) => {
  return persons;
}

const parrotResolver = (root, args, ctx) => {
  return parrot;
}

const petResolver = (root, args, ctx) => {
  return pets;
}




export default {
  Query: {
    myCat: catResolver,
    myDog: dogResolver,
    myParrot: parrotResolver,
    myPets: petResolver,
    persons: personResolver
  },
  Pet: {
    __resolveType(pet) {
      return pet.type
    }
  }
}