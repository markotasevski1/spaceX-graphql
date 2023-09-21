import client from '@/apollo-graphql/apolloClient'
import { gql } from '@apollo/client'
//@ts-ignore
import { getSingleLaunch } from '../../../graphql-queries/graphqlQueries'
import Launch from '@/components/Launch'
export default async function page({ params }: any) {
  const singleLaunchData = await getSingeLaunchData(params.id)
  const dataForLaunch = singleLaunchData.data.launch

  return (
    <Launch
      id={dataForLaunch.id}
      mission_name={dataForLaunch.mission_name}
      launch_success={dataForLaunch.launch_success}
    />
  )
}

async function getSingeLaunchData(id: any) {
  const data = client.query({
    query: gql`
      ${getSingleLaunch}
    `,
    variables: {
      launchId: id,
    },
  })
  return data
}
