import { EnvProd } from './prod.env'

export class EnvDev extends EnvProd {
  override name = 'dev'
  override prod = false
  override dev = true

  override authEnabled = false
}

const envDev = new EnvDev()
export default envDev
