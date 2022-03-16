// import { Button, Input, Form } from 'antd'
// import moment from 'moment'
// import styled from 'styled-components'
// import useRsocket from './useRsocket'

// const Chat = () => {
//   const { latestMessage, sendMessage } = useRsocket()
//   let InitList = latestMessage.map((item) => (
//     <div key={item.id} style={{ maxWidth: '70%' }}>
//       <div
//         style={{
//           display: 'inline-block',
//           background: 'rgb(239,253,222)',
//           margin: '10px',
//           borderRadius: '10px',
//           padding: '10px',
//         }}
//       >
//         <div style={{ position: 'relative' }}>
//           <div>{item.message}</div>
//           <div style={{ color: 'rgb(109,193,124)' }}>{item.create_time}</div>
//         </div>
//       </div>
//     </div>
//   ))

//   console.log('last', latestMessage)
//   console.log('循环')
//   const send = ({ message }: { message: string }) => {
//     const name = 'test'
//     const logo = ''
//     sendMessage({
//       message,
//       name,
//       logo,
//       create_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
//     })

//   }
//   return (
//     <ChatBac>
//       <ChatWindow>
//         <ChatHeader>
//           <div>auth</div>
//         </ChatHeader>
//         <ChatContain>
//           <div>
//             <div>{InitList}</div>
//           </div>
//         </ChatContain>
//         <SendContain>
//           <Form onFinish={send} style={{ width: '95%', margin: '0 auto' }}>
//             <Form.Item name={'message'}>
//               <Textarea name='message' placeholder='请输入内容'></Textarea>
//             </Form.Item>
//             <Button
//               htmlType={'submit'}
//               type={'primary'}
//               style={{ position: 'absolute', bottom: '10px', right: '10px' }}
//             >
//               send
//             </Button>
//           </Form>
//         </SendContain>
//       </ChatWindow>
//     </ChatBac>
//   )
// }
// export const ChatBac = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* background-image: url('../../../public/backgroud.jpg'); */
//   background-image: url(https://oss.sunxinao.cn/running-job/upload/416568d6e8369713c0919d775cb22a98);
//   width: 100%;
//   height: 100vh;
// `
// export const ChatWindow = styled.div`
//   width: 66%;
//   height: 75%;
//   min-height: 450px;
//   background: white;
//   display: flex;
//   flex-direction: column;
//   border-radius: 6px;
//   overflow: hidden;
// `
// export const ChatHeader = styled.div`
//   position: relative;
//   box-sizing: border-box;
//   padding-left: 24px;
//   padding-right: 24px;
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);
// `
// export const ChatContain = styled.div`
//   overflow-y: auto;
//   height: 80%;
//   min-height: 220px;
//   /* background-image: url('../../../public/backgroud.jpg'); */

//   ::-webkit-scrollbar {
//     height: 6px;
//     width: 6px;
//   }
//   ::-webkit-scrollbar-thumb {
//     background-color: rgba(0, 0, 0, 0.22);
//     border-radius: 40px;
//   }
//   ::-webkit-scrollbar-track {
//     background-color: rgba(0, 0, 0, 0.12);
//   }
// `
// export const SendContain = styled.div`
//   position: relative;
//   min-height: 150px;
//   display: flex;
//   flex-direction: column;
//   /* align-items: center; */
//   justify-content: center;
//   position: relative;
//   border-top: 1px solid #d6dadf;
// `
// export const Textarea = styled.textarea`
//   width: 100%;
//   height: 100px;
//   overflow: auto;
//   resize: none;
//   outline: none;
//   border: none;
// `
// export default Chat
