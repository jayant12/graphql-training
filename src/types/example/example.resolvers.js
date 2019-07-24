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

const cat = [{
  name: 'Katie',
  age: 2
}];

const catResolver = (root, args, ctx) => {
  return cat;
}

const personResolver = (root, args, ctx) => {
  return persons;
}

export default {
  Query: {
    myCat: catResolver,
    persons: personResolver
  },
}