import { createReducer } from "@reduxjs/toolkit";
import { SwapState } from "../types";
import { setSwapSrcAmount } from "./actions";

const initialState: SwapState = {
  srcAmount: ""
}

export default createReducer<SwapState>(initialState, (builder) =>
  builder
    .addCase(
      setSwapSrcAmount,
      (state, { payload }) => {
        return {
          ...state,
          srcAmount: payload.amount
        }
      },
    )
)