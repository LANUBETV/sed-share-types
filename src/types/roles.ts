type IRoles = 'superAdmin' | 'admin' | 'manager' | 'user'

const roles: Record<IRoles, number> = {
  superAdmin: 50,
  admin: 30,
  manager: 20,
  user: 10
}

let roleByCode: { [key: number]: string } = {}

for (let role in roles) {
  roleByCode[roles[role as IRoles]] = role
}
export type { IRoles }
export { roles, roleByCode }
