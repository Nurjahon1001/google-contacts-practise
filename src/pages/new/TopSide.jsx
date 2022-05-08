import React from 'react'
import '../../static/css/new.css'



function TopSide({ image, groups, gRef }) {

    const handleShow = () => {
        gRef.current.classList.toggle('show')
    }


    return (
        <div className='border-bottom d-flex'>
            <div className="image-upload my-5">
                <i id='plus-icon' className="bi bi-camera"></i>
                <img src={image} alt={image} className='image-upload' />
                <input type="file" id="image-contact" className='image-upload-input' />
                {/* <div className='image-not-found'>A</div> */}
            </div>
            <div className='d-flex align-items-center position-relative'>
                <i onClick={handleShow} className='bi bi-tag-fill text-secondary ms-5 rotate-icon' />
                <div ref={gRef} className="group-list">
                    <ul className="list-group">
                        {groups.map(group => (<li
                            key={group.id}
                            className='list-group-item border-0'
                        >
                            <i className='bi bi-tag me-2' />
                            {group.title.slice(0, 17)} {group.title.length > 17 ? "..." : ""}
                        </li>))}
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-end align-items-end save-btn">
                <button type='submit' className="btn btn-primary btn-sm mb-3">
                    <span className="small mx-2">Save</span>
                </button>
            </div>
        </div>
    )
}

export default TopSide