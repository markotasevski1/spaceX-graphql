type LaunchesType = {
  typename?: String
  id?: string
  launch_success?: Boolean
  launch_year?: string
  rocket?: RocketType
}
type LaunchType = {
  id?: string
  mission_name?: string
  launch_success?: Boolean
}
type RocketType = {
  __typename?: String
  rocket_name?: String
  fairings?: FairingsType
}
type FairingsType = {
  __typename: string
  reuse: Boolean
}
type IneerRocketType = {
  company: string
  country: string
  description: string
  engines: EngineType
}
type EngineType = {
  layout: string
  number: Number
  propellant_1: string
}
export type { LaunchesType, RocketType, LaunchType }
