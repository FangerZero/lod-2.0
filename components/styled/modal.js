import { useEffect } from 'react'

export default function Modal(props) {
    useEffect(() => {
        if (props.modal) {
            const keyDownHandler = (e) => {
                if (e.code === 'Escape') {
                    props.toggleModal(!props.modal);
                }
            };
            document.addEventListener("keydown", keyDownHandler);
    
            // clean up
            return () => {
                document.removeEventListener("keydown", keyDownHandler);
            };
        }
      }, [props.modal]);

    return (
        <div className={props.modal ? 'modal-wrapper' : 'hidden'} >
            <div className="modal">
                {props.title && <span className="font-bold">{props.title}</span>}
                <span className="modal-close" onClick={() => props.toggleModal(!props.modal)}>X</span>
                <div>
                    {props.children && props.children}
                </div>
            </div>
        </div>
    )
}
