import {telldus} from "@src/controller/telldus";
import {ChickenTimerConfig, config} from "@src/srv/config.service";
import {dayjs} from "@naturalcycles/time-lib";

export async function run() {
    console.log("Timer starting")
    let dimState: number = 0

    // TODO: load controller dynamically from config
    const controller = telldus

    while (true) {
        const dimLevel = await determineDimLevel(config)

        //Avoid unnecessary api calls
        if (dimLevel != dimState){
            await controller.dimLight(dimLevel, config)
            dimState = dimLevel
        }

        //Evaluate again in 1 minute
        await delay(1000 * 60)
    }
}

export async function determineDimLevel(cfg: ChickenTimerConfig): Promise<number> {
    //TODO: how to represent time of day

    //TODO: determine sun angle and turn off light when there's enough natural light

    //TODO: determine interval of full light (optionally, gradually go from natural to configured level)

    //TODO: sunset

    //TODO: sunrise

    return 0
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}