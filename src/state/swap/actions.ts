import { createAction } from "@reduxjs/toolkit";

export const setSwapSrcAmount = createAction<{ amount: string }>('swap/setSwapSrcAmount')