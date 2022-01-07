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
    fake_noon_hour: number
    dimmer_controller: string
    dimmer_step: number
    light_dimmer_id: string
    timezone: string
}
export const config: ChickenTimerConfig = yaml.load(fs.readFileSync('config.yaml', 'utf8')) as ChickenTimerConfig




