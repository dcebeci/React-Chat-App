import { ChatEngine, ChatFeed } from 'react-chat-engine';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            heidht='100vh'
            projectID="4a088490-e029-4ca4-b5d7-ec1e53e6b6c4"
            userName="DC"
            userSecret="Dcjora08."
            renderChatFeed={( chatAppProps) =><ChatFeed {... chatAppProps} />} 

        />
    )




}

export default App;