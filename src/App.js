import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed.jsx';
import './App.css'
import LoginForm from "./components/LoginForm.jsx";
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="359c8da4-dc65-4d3e-bfa6-72bff4bade92"
            //javascriptmastery --->123123
            //Zackzimmer --->123
            //wendywalker ---->123123

            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    )
}

export default App;