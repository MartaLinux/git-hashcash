

const Modal = props => {


    return (
        <div className={`modal_wrapper ${props.isOpened ? 'open ': 'close'}`} style={{...props.style}}>
            <div className='modal_body'>
                <div className='modal_close' onClick={props.onModalClose}>☒</div>
                <h2>{props.title}</h2>
                <br></br>
                {props.children}
            </div>
        </div>
    )
}

export default Modal