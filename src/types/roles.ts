type RoleTypes = 'superAdmin' | 'admin' | 'manager' | 'user'

const roles: Record<RoleTypes, number> = {
  superAdmin: 50,
  admin: 30,
  manager: 20,
  user: 10
}

let roleByCode: { [key: number]: string } = {}

for (let role in roles) {
  roleByCode[roles[role as RoleTypes]] = role
}
export type { RoleTypes as RoleTypes }
export { roles, roleByCode }
