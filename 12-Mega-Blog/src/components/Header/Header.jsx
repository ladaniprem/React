import React from 'react'
import { Container, Logo ,LogoutBtn } from '../index'
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
 const authStatus = useSelector((state) => state.auth.status)

 const navigate= useNavigate()

 const navItems = [
  {
    name: "Home",
    slug: "/",
    active: true,
  },

  {
   name:"Login",
   slug: "/login",
   active: !authStatus,
  },

  {
   name: "signup",
    slug: "/signup",
    active: !authStatus,
  },

  {
    name: "All Posts",
    slug: "/all-posts",
    active: authStatus,
  },

  {
    name: "Add Post",
    slug: "/add-post",
    active: authStatus,
  },
 ]
  return (
    <header className='py-3 shadow-white shadow-md bg-white dark:bg-gray-800 dark:text-white'>
    <Container>
     <nav className='flex items-center justify-between'>
      <div className='mr-4'>
        <Link to="/">
        <Logo width="150px" height="50px" />
        </Link>
      </div>
      <ul className='flex ml-auto'>
        {navItems.map((item) => {
          item.active ? (
            <li key={item.name}>

              <button onClick={() => navigate(item.slug)} className='px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-300'>
                {item.name}
              </button>
            </li>
          ) : null
        })}
        {authStatus && (
          <li>
            <LogoutBtn />
          </li>
        )}
      </ul>
     </nav>
    </Container>

    </header>
  )
}

export default Header
