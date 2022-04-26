import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";



const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages} = props;

    const chat = chat && chats[activeChat];

   const renderMessages = () => {
       const keys = Object.keys(messages);

       return keys.map((key, index)=>{
           const message = messages[key];
           const lastMessageKey = index === 0 ? null : keys[index - 1]
           const isMymessage = userName === message.sender.userName;
           return(
               <div key={'msg_${index}'} style={{width:'100%'}}>

               </div>
           )
        })
   }

   renderMessages();

    return (
        <div>
            ChatFeed
        </div>

    );
}

export default ChatFeed;