import React from "react"
import { Menu } from '@headlessui/react'
import DropDown from "../Dropdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { useWeb3React } from "@web3-react/core"

interface WalletDropdownType {
  text: string,
  background?: string
}

const WalletDropdown: React.FC<WalletDropdownType> = (props) => {
  const { text } = props
  const { deactivate } = useWeb3React()

  const disconnect = async () => {
    try {
      deactivate()
    localStorage.removeItem("account");
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <DropDown
      buttonText={text}
      position="right"
    >
      <div className="px-1 py-1 ">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-slate-200' : ''
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
            >
              Wallet
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => {
            return (
            <button
              className={`${
                active ? 'bg-slate-200' : ''
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
            >
              Transactions
            </button>
          )}}
        </Menu.Item>
      </div>
      <div className="px-1 py-1">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-slate-200' : ''
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              onClick={disconnect}
            >
              Disconnect
              <FontAwesomeIcon className="ml-24 h-5 w-5" icon={faRightFromBracket} />
            </button>
          )}
        </Menu.Item>
      </div>
    </DropDown>
  )
}


export default WalletDropdown