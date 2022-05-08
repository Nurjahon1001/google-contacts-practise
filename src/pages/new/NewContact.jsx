import React, { useRef, useContext } from 'react'
import userImage from '../../static/images/user.png'
import '../../static/css/new.css'
import TopSide from './TopSide'
import MainContext from '../../context/MainContext';

function NewContact() {

  const { groups, handleAdd } = useContext(MainContext)
  const groupsRef = useRef()

  const handleSend = (e) => {
    e.preventDefault()
    const { target } = e;

    let nC = {
      id: Date.now(),
      name: target[2].value,
      email: [
        {
          id: Date.now() + 10,
          type: "personal",
          mail: target[3].value
        }
      ],
      phone: [
        {
          id: Date.now() + 100,
          type: "home",
          number: target[4].value
        }
      ],
      company: target[5].value,
      birthday: target[6].value,
      address: target[7].value
    }

    handleAdd(nC)
  }

  return (
    <>
      <form onSubmit={handleSend}>
        <TopSide
          image={userImage}
          groups={groups}
          gRef={groupsRef}
        />
        <div className='w-50 p-3'>
          <div className="mb-3">
            <label htmlFor="name" className='form-label'>Name</label>
            <input type="text" id="name" className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" id="email" className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className='form-label'>PhoneNumber</label>
            <input type="text" id="phone" className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className='form-label'>Company</label>
            <input type="text" id="company" className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="birthday" className='form-label'>Birthday</label>
            <input type="date" id="birthday" className='form-control' />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className='form-label'>Address</label>
            <input type="text" id="address" className='form-control' />
          </div>
        </div>
      </form>
    </>
  )
}

export default NewContact