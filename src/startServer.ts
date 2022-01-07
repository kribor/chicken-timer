/* tslint:disable:ordered-imports */

//
// 1. Log 'startServer' and record `bootstrapStarted`
//
import {runScript} from "@naturalcycles/nodejs-lib/dist/script";

console.log('startServer... ')
const bootstrapStartedAt = Date.now()

//
// 2. Imports
// These imports should be always on top
//
import 'tsconfig-paths/register'
import '@src/bootstrap'

//
// 3. Further imports and bootstrap
//
import { startServer } from '@naturalcycles/backend-lib'
import { expressApp } from '@src/express.app'
import {run} from "@src/server/timer.runner";
import {config} from "@src/srv/config.service";

process.env.TZ = config.timezone

runScript(async () => {

    await run() //This is not how to do it, rethink

    await startServer({
        expressApp,
    })
})