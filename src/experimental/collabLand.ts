import { CollabLandClient } from '@collabland/sdk'

let collabLandClient: CollabLandClient = new CollabLandClient(
  {},
  process.env.REACT_APP_API_URL || '',
)

export const connectToSDK = async (token?: string): Promise<void> => {
  const client = new CollabLandClient(
    token
      ? {
          apiKey: import.meta.env.VITE_COLLABLAND_KEY,
          authenticatedEncryption: `AE ${token}`,
        }
      : {
          apiKey: import.meta.env.VITE_COLLABLAND_KEY,
        },
    process.env.REACT_APP_API_URL || '',
  )

  await client.connect()
  collabLandClient = client
}

export const getCollabClient = (): CollabLandClient => collabLandClient
