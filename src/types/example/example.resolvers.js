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

const newPersonResolver = (root, args, ctx) => {
  const personObj = {
    name: args.person.name,
    age: args.person.age
  };

  persons.push(personObj);
  return personObj;
}

export default {
  Query: {
    myCat: catResolver,
    persons: personResolver
  },
  Mutation: {
    newPerson: newPersonResolver
  }
}