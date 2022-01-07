export class EnvProd {
  name = 'prod'
  prod = true
  dev = false

  authEnabled = true

}

export type Env = EnvProd

const envProd = new EnvProd()

export default envProd
