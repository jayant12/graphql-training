// {
//   myDog{
//     name
//     breed
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
  furColor: 'Brown'
};

const dog = {
  name: 'Becky',
  age: 5,
  breed: 'Husky'
};

const parrot = {
  name: 'Packkot',
  age: 1,
  color: 'green-yellow',
};

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


export default {
  Query: {
    myCat: catResolver,
    myDog: dogResolver,
    myParrot: parrotResolver,
    persons: personResolver
  },
}