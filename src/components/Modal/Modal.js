
import { useSelector } from 'react-redux'
import './Modal.css'
// import {getCurrentUser} from '../helpers/currentUser'
function Modal ({isActive,setIsActive }){

const user = useSelector(state =>state.user)

    function addPost(){
        // const currentUser =getCurrentUser()
        // console.log(currentUser)
        setIsActive(false)
        
    }
    
    return <div className={isActive?'modal':'disabled'} onClick={()=>setIsActive(false)}>
            <div className='modal-iner' onClick={e=>e.stopPropagation()}>
                <textarea className='modal-post-title' placeholder='Post title'></textarea>
                <textarea className='nodal-post-body' rows={10} wrap='soft'></textarea>
                <textarea className='modal-post-tags' placeholder='Tags separated by komas'></textarea>
                <button className='add-new-post' onClick={addPost} type='button'>Add new post</button>      
            </div>

        </div>
}
export default Modal