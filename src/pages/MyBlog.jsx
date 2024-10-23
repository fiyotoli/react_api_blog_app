import React from 'react'
import Profile from '../components/Profile/Profile'
import { Link } from 'react-router-dom';

function MyBlog() {
  return (
    
    <div className='container pt-5 mt-5 '>
        <div className='row'>
     <div className='col-md-8'>
     <h2 className="bg-success bg-opacity-10 p-3 rounded mb-2">My Blog</h2>
        <p>no blog available write now...</p>
        <Link to="/create" className="btn btn-success btn-sm">
         Create Blog
          </Link>
     </div>
     <div className='col-md-4'>
        <Profile/>
     </div>
     </div>
    </div>
  )
}

export default MyBlog
