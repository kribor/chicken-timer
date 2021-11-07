import {Controller} from "@src/controller/controller";
import {ChickenTimerConfig} from "@src/srv/config.service";
import {getGot} from "@naturalcycles/nodejs-lib";


const telldusGot = getGot({
    logStart: true,
    prefixUrl: `http://10.10.20.201:5000/json/`,
    timeout: 30_000,
})

interface TelldusCall {
    id: string
    level: string
}

interface TelldusStatus {
    status: string
}

export class TelldusController implements Controller {
    constructor() {}

    async dimLight(dimLevel: number, cfg: ChickenTimerConfig) {
        const uri = `device/dim?id=${cfg.light_dimmer_id}&level=${Math.floor(dimLevel * 255 / 100)}`

        const r = await telldusGot.get(uri).json<TelldusStatus>()
        if (r.status != 'success') {
            throw Error(`dimLight received unexpected response: ${r}`)
        }
    }
}

export const telldus = new TelldusController()