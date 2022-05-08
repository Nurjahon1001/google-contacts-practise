import { useEffect, useState } from "react";
import base_url from './services/Axios';
import MainContext from './context/MainContext';
import Header from './components/header/Header';
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./pages/main/Main";
import './static/css/dashboard.css'
import { Route, Routes, useNavigate } from "react-router-dom";
import NewContact from './pages/new/NewContact';

function App() {
  const [contacts, setContacts] = useState([])
  const [groups, setGroups] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    base_url.get('/contacts')
      .then(res => setContacts(res.data))
      .catch(err => console.log(err))

    base_url.get('/groups')
      .then(res => setGroups(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleAdd = (obj) => {
    base_url.post('/contacts', obj)
      .then(res => {
        setContacts([...contacts, res.data])
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <MainContext.Provider value={{
      contacts,
      setContacts,
      groups,
      setGroups,
      handleAdd
    }} >
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/new" element={<NewContact />} />
            </Routes>
          </main>
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
