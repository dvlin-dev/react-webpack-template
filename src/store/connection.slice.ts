// import { createSlice } from '@reduxjs/toolkit'
// import { ReactiveSocket } from 'rsocket-types'

// export interface Connection {
//   rsocket: ReactiveSocket<string, string> | null
//   status: string
//   error: object | null
// }
// const initialState: Connection = {
//   rsocket: null,
//   status: 'CONNECTING',
//   error: null,
// }
// export const connectionSlice = createSlice({
//   name: 'connection',
//   initialState,
//   reducers: {
//     updateRScoketInstance(state, action) {
//       state.rsocket = action.payload
//     },
//   },
// })

// export const { updateRScoketInstance } = connectionSlice.actions
export {};
