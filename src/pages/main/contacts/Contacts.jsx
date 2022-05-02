import React from 'react'
import TBody from './TBody';
import Thead from './Thead';

function Contacts() {
    return (
        <div className="table-responsive">
        <table className="table table-striped table-sm">
            <Thead />
            <TBody/>
        </table>
    </div>
    )
}

export default Contacts