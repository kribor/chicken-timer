import {ChickenTimerConfig} from "@src/srv/config.service";

export interface Controller {
    dimLight(dimLevel: number, cfg: ChickenTimerConfig): void
}