import { useEffect, useState } from "react";
import base_url from './services/Axios';
import MainContext from './context/MainContext';
import Header from './components/header/Header';
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./pages/main/Main";
import './css/dashboard.css'

function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    base_url.get('/contacts')
      .then(res => setContacts(res.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <MainContext.Provider value={{
      contacts,
      setContacts
    }} >
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Main />
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
