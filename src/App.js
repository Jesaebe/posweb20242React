import "./App.css";
import HomePage from "./pages/home/home";
import LoginPage from "./pages/login/login";
import NewUserPage from "./pages/newUser/newUser";
import { useState } from "react";

function App() {
  const [showNewUser, setShowNewUser] = useState(false);
  const [showHome, setHome] = useState(false);

  return (
    <div className="App">
      {!showNewUser && !showHome && <LoginPage onShowNewUser={() => setShowNewUser(true)} onShowHome={() => setHome(true)}/>}
      {showNewUser && <NewUserPage onShowNewUser={() => setShowNewUser(false)}/>}
      {showHome && <HomePage/>}
    </div>
  );
}

export default App;
