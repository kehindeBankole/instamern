import React ,{useContext , useEffect} from 'react'
import CreatePost from '../components/CreatePost'
import {UserContext} from '../context/context'
function Post() {
    const context = useContext(UserContext)
 
    useEffect(() => {
    context.loadUser()
       console.log(context)
    }, [])
    return (
        <div>
            <CreatePost/>
        </div>
    )
}

export default Post
