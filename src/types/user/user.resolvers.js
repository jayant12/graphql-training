const userResolver = (root, args, {dataSources}) => {
  const data = dataSources.restService.getUser()
  return data;
}

const friendResolver = (root, args, {dataSources}) => {
  const data = dataSources.restService.getNames()
  return data;
}

const addFriendResolver = (root, args, {dataSources}) => {
  const data = dataSources.restService.addNames(args)
  return data;
}

const rolesResolver = (root, args, {dataSources, context}) => {
  const user = dataSources.restService.getUser()
  return user
}

const login = (user) => {
  return user.login
}

const id = (user) => {
  return user.id
}

const avatar_url = (user) => {
  return user.avatar_url
}

const type = (user) => {
  return user.type
}

const name = (user) => {
  return user.name
}

const adminResolver = (user) => {
  return user.site_admin
}

export default {
  Query: {
      user: userResolver,
      roles: rolesResolver,
      friend: friendResolver
  },
  Mutation: {
    addFriend: addFriendResolver
  },
  User: {
      login,
      id,
      avatar_url,
      type,
      name,
      roles: rolesResolver
  },
  Roles: {
    user: userResolver,
    admin: adminResolver
  }
}
