import  Emoji  from 'react-emoji-render';

const MyEmoji = ({ symbol, label }) => {
  return <Emoji text={symbol||"🏠"} title={label||"home"} />;
};

export default MyEmoji;

