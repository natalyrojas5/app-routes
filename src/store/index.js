

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createAuthSlice } from "./auth";

export const useStoreApp = create(
  devtools(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
    { name: 'appStore' }
  ),
)