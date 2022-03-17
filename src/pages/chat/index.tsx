/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Input } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Picker } from 'emoji-mart';
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';
import 'emoji-mart/css/emoji-mart.css';
import './index.less';
import _ from 'lodash';
import { useState } from 'react';

const { TextArea } = Input;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3255185_zmbjspjcm6g.js',
});
function Chat() {
  const [msg, setMsg] = useState('');
  const [showEmojiModal, setEmojiModal] = useState(false);
  const [msgList] = useState([
    {
      id: 1,
      me: true,
      msg: 'hello world',
      time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      id: 2,
      me: true,
      msg: 'hello world',
      time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      id: 3,
      me: true,
      msg: 'hello world',
      time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      id: 4,
      me: true,
      msg: 'hello world',
      time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      id: 5,
      me: true,
      msg: 'hello world',
      time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      id: 6,
      me: false,
      msg: 'hello world',
      time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    },
  ]);
  const InitList = msgList.map(item => (
    <div key={item.id} style={{ maxWidth: '70%' }}>
      <div
        style={{
          display: 'inline-block',
          background: 'rgb(239,253,222)',
          margin: '10px',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <div style={{ position: 'relative' }}>
          <div>{item.msg}</div>
          <div style={{ color: 'rgb(109,193,124)' }}>{item.time}</div>
        </div>
      </div>
    </div>
  ));
  function searchEmoji(emojis: any) {
    setEmojiModal(false);
    setMsg(!_.isEmpty(msg) ? msg + emojis.native : emojis.native);
  }

  const usename = 'bowlingQ';
  const imgUrl = 'https://avatars.githubusercontent.com/u/7843281?s=40&v=4';
  return (
    <div className="max-container">
      <div className="toolbar">
        <div className="toolbar-nav">
          <div className="toolbar-back">
            <IconFont type="icon-outline-arrow-left-1" className="icon-back" />
            <div className="avatar">
              <img src={imgUrl} alt="logo" />
            </div>
            {usename}
          </div>
          <div className="toolbar-menu">
            <IconFont type="icon-vuesax-outline-menu" className="icon-menu" />
          </div>
        </div>
      </div>
      <div className="chat-container">
        <div className="msg-container">{InitList}</div>
        <div className="send-container">
          <div className="send-textarea">
            <TextArea
              placeholder="请留言"
              autoSize={{ minRows: 1, maxRows: 6 }}
              bordered={false}
              className="_textarea"
              value={msg}
              onChange={e => setMsg(e.target.value)}
            />
          </div>
          <div className="func-container">
            <IconFont type="icon-vuesax-outline-send" className="icon-send" />
            <IconFont
              type="icon-vuesax-outline-emoji-happy"
              className="icon-emoji"
              onClick={() => setEmojiModal(!showEmojiModal)}
            />
            <IconFont type="icon-outline-like-1" className="icon-zan" />
            <div className="emoji_container">
              {showEmojiModal && (
                <Picker
                  set="twitter"
                  emoji=""
                  showPreview={false}
                  onClick={emoji => searchEmoji(emoji)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
