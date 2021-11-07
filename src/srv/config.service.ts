import * as yaml from 'js-yaml'
import * as fs from 'fs'

export interface ChickenTimerConfig {
    latitude: number
    longitude: number
    hours_of_full_light: number
    minutes_of_sunrise: number
    start_artificial_light: string
    end_artificial_light: string
    max_sun_angle: number
    dimmer_controller: string
    light_dimmer_id: string
}
export const config: ChickenTimerConfig = yaml.load(fs.readFileSync('config.yaml', 'utf8'))




