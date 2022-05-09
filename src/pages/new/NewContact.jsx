import React, { useRef, useContext } from 'react'
import userImage from '../../static/images/user.png'
import '../../static/css/new.css'
import TopSide from './TopSide'
import MainContext from '../../context/MainContext';
import { useState } from 'react';
import Select from 'react-select';
import { useEffect } from 'react';
import base_url from './../../services/Axios';

function NewContact() {

  const { groups, handleAdd } = useContext(MainContext)
  const groupsRef = useRef()
  const [newContactGroups, setNewContactGroups] = useState([])
  const [contactTypes, setContactTypes] = useState([])
  const [hide, setHide] = useState(true)
  const [type, setType] = useState('')

  useEffect(() => {
    base_url.get('/contact-types')
      .then(res => setContactTypes(res.data.map((ct, i) => { return { value: ct.title, label: ct.title } })
      ))
      .catch(err => console.log(err))
  }, [])

  const handleSend = (e) => {
    e.preventDefault()
    const { target } = e;

    let nC = {
      id: Date.now(),
      name: '',
      email: [],
      phone: [],
      groups: newContactGroups,
      is_fv: false,
      is_fam: false,
      company: '',
      birthday: '',
      address: ''
    }

    for (let a = 0; a < target.length; a++) {
      let variable = target[a].name;
      if (variable === "name") {
        nC.name = target[a].value
      } else if (variable === "company"){
        nC.company = target[a].value
      } else if (variable === "address"){
        nC.address = target[a].value
      } else if (variable === "birthday"){
        nC.company = target[a].value
      } else if (variable === "email") {
        nC.email = [{
          id: Date.now() + 10,
          type: "personal",
          mail: target[a].value
        }]
      } else if (variable === "phone1") {
        nC.phone = [{
          id: Date.now() + 100,
          type: type,
          number: target[a].value
        }]
      } 
    }

    handleAdd(nC)
  }

  const handleGroups = (groupId) => {
    setNewContactGroups(prev => {
      if (!prev.includes(groupId)) {
        return [...prev, groupId]
      } else {
        return prev.filter(pr => pr != groupId)
      }
    })
  }

  const handlePhoneChange = (e) => {

    let val = e.target.value;

    if (val >= 100) {
      setHide(false)
    } else {
      setHide(true)
    }
  }



  return (
    <>
      <form onSubmit={handleSend}>
        <TopSide
          image={userImage}
          groups={groups}
          gRef={groupsRef}
          handleGroups={handleGroups}
          newContactGroups={newContactGroups}
        />
        <div className='w-50 p-3'>
          <div className="mb-3">
            <label htmlFor="name" className='form-label'>Name</label>
            <input type="text" id="name" name='name' className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" id="email" name='email' className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className='form-label'>PhoneNumber</label>
            <div className="input-group">
              <input onChange={handlePhoneChange} required type="text" name='phone1' id="phone" className='form-control rounded me-2' />
              <Select onChange={(data) => setType(data.value)} className={hide ? 'w-50 d-none ms-1' : 'w-50'} options={contactTypes} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="company" className='form-label'>Company</label>
            <input type="text" id="company" name='company' className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="birthday" className='form-label'>Birthday</label>
            <input type="date" id="birthday" name='birthday' className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className='form-label'>Address</label>
            <input type="text" id="address" name='address' className='form-control' />
          </div>
        </div>
      </form>
    </>
  )
}

export default NewContact