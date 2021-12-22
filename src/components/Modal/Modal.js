
import './Modal.css'
function Modal ({isActive,setIsActive }){

    function addPost(){
        setIsActive(false)
    }
    
    return <div className={isActive?'modal':'disabled'} onClick={()=>setIsActive(false)}>
            <div className='modal-iner' onClick={e=>e.stopPropagation()}>
                <textarea className='post-title' placeholder='Post title'></textarea>
                <textarea className='post-body' rows={10} wrap='soft'></textarea>
                <button className='add-new-post' onClick={addPost} type='button'>Add new post</button>      
            </div>
        </div>
}
export default Modal
{/* <Modal isActive={isActive} setIsActive={setIsActive} /> */}