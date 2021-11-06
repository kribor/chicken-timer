import { getDefaultRouter, loginHtml, okHandler, statusHandler } from '@naturalcycles/backend-lib'
import { env } from '@src/srv/env.service'
import { warmup } from '@src/warmup'

const router = getDefaultRouter()
export const rootResource = router

router.get('/', okHandler())

router.get('/status',
  // reqAdmin(),
  statusHandler())

router.get('/_ah/warmup', async (req, res) => {
  await warmup()
  res.end()
})
