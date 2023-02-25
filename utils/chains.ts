import { constants } from 'ethers'
import { goerli, mainnet, polygon } from 'wagmi/chains'

//CONFIGURABLE: The default export controls the supported chains for the marketplace. Removing
// or adding chains will result in adding more or less chains to the marketplace.
// They are an extension of the wagmi chain objects

export const DefaultChain =   {
  ...polygon,
  iconUrl: `https://api-polygon.reservoir.tools/redirect/currency/${constants.AddressZero}/icon/v1`,
  reservoirBaseUrl: 'https://api-polygon.reservoir.tools',
  proxyApi: '/api/reservoir/polygon',
  routePrefix: 'polygon',
  apiKey: process.env.POLYGON_RESERVOIR_API_KEY,
}

export default [
  DefaultChain,
]