import React, { useContext } from 'react'
import MainContext from './../../../context/MainContext';
import TRow from './TRow'

function TBody() {

    const {contacts} = useContext(MainContext)
    console.log(contacts);
    return (
        <tbody>
            {contacts.map((contact, index) => <TRow key={contact.id} i={index} contact={contact}/>)}
        </tbody>
    )
}

export default TBody