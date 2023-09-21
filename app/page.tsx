import { gql } from '@apollo/client'
import client from '../apollo-graphql/apolloClient'
//@ts-ignore
import { getLaunches } from '../graphql-queries/graphqlQueries'
import { data } from 'autoprefixer'
import { generateKey } from '../utils/utils'
import { LaunchesType, RocketType } from '../types/types'
import Rocket from '@/components/Rocket'
import Link from 'next/link'
export default async function Home() {
  const dataFromApi = await getDataFromApi()

  const allLaunches = dataFromApi.data.launches
  return (
    <div>
      <div>
        {allLaunches.map((launch: LaunchesType) => (
          <>
            <Link href={`/launches/${launch.id}`}>
              <h1 key={launch.id || generateKey()}>{launch.id}</h1>
              <Rocket rocket_name={launch.rocket?.rocket_name || 'unkown'} />
            </Link>
          </>
        ))}
      </div>
    </div>
  )
}
async function getDataFromApi() {
  const data = await client.query({
    query: gql`
      ${getLaunches}
    `,
  })
  return data
}
