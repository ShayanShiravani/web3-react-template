import { getAppRpcUrl } from "../configs/constants/rpc"
import Web3 from "web3"
import { random } from "lodash"

export const getLibrary = (provider: any): Web3 => {
  return new Web3(provider)
}

export const getAppLibrary = (chainId: number): Web3 => {
  const chainProviders = getAppRpcUrl(chainId)
  const randomIndex = random(0, chainProviders.length - 1)
  return new Web3(chainProviders[randomIndex])
}
