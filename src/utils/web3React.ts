import Web3 from "web3"

export const getLibrary = (provider: any): Web3 => {
  return new Web3(provider)
}
