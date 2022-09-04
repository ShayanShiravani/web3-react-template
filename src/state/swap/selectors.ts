import { useAppSelector } from "../hooks"

export const useAuctionState = () => {
  return useAppSelector((state) => state.swap)
}