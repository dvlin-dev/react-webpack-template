// import { createClient } from './utils'
// import {
//   encodeAndAddWellKnownMetadata,
//   MESSAGE_RSOCKET_ROUTING,
//   encodeRoute,
//   Encodable,
// } from 'rsocket-core'
// import { Flowable } from 'rsocket-flowable'
// import { useCallback, useEffect, useRef, useState } from 'react'
// import { ReactiveSocket } from 'rsocket-types'
// import { Message } from 'types/message'

// export default function useRsocket() {
//   const rSocketRef = useRef<ReactiveSocket<any, Encodable>>()
//   const subscriberRef = useRef<any>()
//   const [latestMessage, setLatestMessage] = useState([] as any[])

//   const connectRs = async () => {
//     const rsocket = await createClient('wss://cccs.sunxinao.cn/messages/ws')
//     console.log('success')
//     rSocketRef.current = rsocket
//     rsocket
//       .requestStream({
//         metadata: encodeAndAddWellKnownMetadata(
//           Buffer.alloc(0),
//           MESSAGE_RSOCKET_ROUTING,
//           encodeRoute('api.v1.messages.stream')
//         ),
//       })
//       .subscribe({
//         onSubscribe: (s) => s.request(1000),
//         onNext: (e) => {
//           console.log('requestStream', e.data)
//           setLatestMessage((pre: any) => [...pre, e.data])
//         },
//         onComplete: () => {},
//         onError: (e) => console.error('接收失败 ', e),
//       })
//   }
//   useEffect(() => {
//     connectRs().then(() => {
//       rSocketRef.current
//         ?.requestChannel(
//           new Flowable((subscriber) => {
//             subscriber.onSubscribe({
//               cancel: () => {
//                 /* no-op */
//               },
//               request: (n) => {},
//             })
//             subscriberRef.current = subscriber
//           })
//         )
//         .subscribe({
//           onSubscribe: (s) => s.request(1000),
//           onError: (e) => console.error('发送失败 ', e),
//         })
//     })
//   }, [])

//   const sendMessage = (msg: Message) => {
//     console.log(msg)
//     if (!msg.message) return
//     subscriberRef.current?.onNext({
//       data: msg,
//       metadata: encodeAndAddWellKnownMetadata(
//         Buffer.alloc(0),
//         MESSAGE_RSOCKET_ROUTING,
//         encodeRoute('api.v1.messages.stream')
//       ),
//     })
//   }
//   return {
//     latestMessage,
//     sendMessage,
//     // connect: useMemoizedFn(connect),
//     // disconnect: useMemoizedFn(disconnect),
//     // readyState,
//     rSocketIns: useCallback(() => rSocketRef.current, []),
//   }
// }
