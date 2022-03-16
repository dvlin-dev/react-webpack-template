// /*
//  * @Author: Alan
//  * @Date: 2022-02-01 20:52:32
//  * @LastEditTime: 2022-02-08 22:35:54
//  * @LastEditors: Alan
//  * @Description:
//  * @FilePath: \cloud-courier-customer-service\src\pages\chat\utils.ts
//  * 守得云开 见月明
//  */
// import {
//   RSocketClient,
//   APPLICATION_JSON,
//   MESSAGE_RSOCKET_COMPOSITE_METADATA,
//   BufferEncoders,
//   JsonSerializer,
//   IdentitySerializer,
// } from 'rsocket-core'
// import RSocketWebsocketClient from 'rsocket-websocket-client'
// export function createClient(url: string) {
//   const client = new RSocketClient({
//     serializers: {
//       // `data` 序列化为 json
//       data: {
//         deserialize: JsonSerializer.deserialize,
//         serialize: (data) => {
//           if (data) {
//             return Buffer.from(JSON.stringify(data))
//           } else {
//             return undefined
//           }
//         },
//       },
//       metadata: IdentitySerializer, // 不序列化
//     },
//     setup: {
//       dataMimeType: APPLICATION_JSON.string, //`data` 的格式
//       keepAlive: 60000, // 向服务器发送 keepalive 帧之间间隔的毫秒数
//       lifetime: 180000, // 如果没有在此毫秒时间内没有 keepalive 回复则断开
//       metadataMimeType: MESSAGE_RSOCKET_COMPOSITE_METADATA.string, // `metadata` 的格式
//     },
//     transport: new RSocketWebsocketClient(
//       {
//         url: url,
//       },
//       BufferEncoders
//     ),
//   })
//   return client.connect()
// }
