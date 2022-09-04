import { AbiItem } from 'web3-utils'
import Web3 from "web3"
import { Contract } from "web3-eth-contract"
import { BnType } from './BigNumber'

export const getContract = (
  library: Web3, abi: AbiItem[] | AbiItem,  address: string
): Contract => {
  return new library.eth.Contract(abi, address)
}

export const sendTransaction = async (
  library: Web3, 
  abi: AbiItem | AbiItem[], 
  contractAddress: string,
  method: string,
  account: string,
  params: any[],
  payableValue: string | null = null
): Promise<any> => {
  const contract = getContract(library, abi, contractAddress)
  let hash: string|null = null
  const additionalOptions: {[key: string]: string|number|BnType} = {}
  if (payableValue !== null) {
    additionalOptions['value'] = payableValue
  }
  return contract.methods[method](...params)
    .send({ 
      from: account,
      ...additionalOptions 
    })
    .once('transactionHash', (tx: string) => {
      hash = tx
    })
    .once('receipt', ({ transactionHash }: {transactionHash: string}) => {
      console.log(transactionHash)
    })
    .once('error', () => {
      if (!hash) {
        // Do whatever you want
      }
    })
    .then((receipt: any) => {
      return receipt
    })
    .catch((error: Error) => {
      console.log("sendTransaction error:", error)
      return error
    })
}
