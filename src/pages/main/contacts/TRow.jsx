import React from 'react'

function TRow({contact, i}) {

    const {name, phone, email, company, address} = contact
    return (
        <tr>
            <td>{i + 1}</td>
            <td>{name}</td>
            <td>{phone[0].number}</td>
            <td>{email[0].email}</td>
            <td>{company}</td>
            <td>{address}</td>
        </tr>
    )
}

export default TRow