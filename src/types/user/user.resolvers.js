const user = (root, args, {dataSources}) => {
  const data = dataSources.restService.getUser()
  return data;
}

const roles = (root, args, {dataSources, context}) => {
  const user = dataSources.restService.getUser()
  return user
}

const firstname = (user) => {
  return user.firstname
}

const lastname = (user) => {
  return user.lastname
}

const picture = (user) => {
  return user.picture
}

const email = (user) => {
  return user.email
}

const mentor = (user) => {
  if(user.is_mentor) {
      return true
  }
  return false;
}

const admin = (user) => {
  if(user.is_admin) {
      return true
  }
  return false;
}

const workshopCustomer = (user) => {
  if(user.is_workshop_customer) {
      return true
  }
  return false;
}

const behaviouralCoach = (user) => {
  if(user.behavioural_coach_id) {
      return true
  }
  return false;
}

const technicalCoach = (user) => {
  if(user.technical_coach_id) {
      return true
  }
  return false;
}

export default {
  Query: {
      user,
      roles
  },
  User: {
      firstname,
      lastname,
      picture,
      email,
      roles: (user) => {
          return user
      }
  },
  Roles: {
      mentor,
      admin,
      workshopCustomer,
      behaviouralCoach,
      technicalCoach,
      user: (user, args, ctx) => {
          return user;
      }
  }
}
