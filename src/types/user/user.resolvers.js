export default {
  Query: {
      user: userResolver,
      roles: rolesResolver
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
