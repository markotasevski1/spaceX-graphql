import { LaunchType } from '@/types/types'
export default function Launch({
  id,
  mission_name,
  launch_success,
}: LaunchType) {
  return (
    <div className="border-2">
      <h1>This is id of the launch {id}</h1>
      <h2>Mission name {mission_name}</h2>
      <h3>was it sucessfull? {launch_success?.toString()}</h3>
    </div>
  )
}
