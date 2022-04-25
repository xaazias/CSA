const isAuthenticated = (user) => !!user

const isAllowed = (user, rights) =>
  rights.some((right) => user.rights.includes(right))

const hasRole = (user, roles) => roles.some((role) => user.roles.includes(role))

export { isAuthenticated, isAllowed, hasRole }
