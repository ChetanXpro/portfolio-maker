import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import demo from '../../assets/react.svg'

const Navbar = () => {
    return (
        <div className="navbar bg-blue-500 ">
            <div className="flex-1">
                <Text className="normal-case text-xl">
                    <Link to={'/'}>Maker</Link>
                </Text>
            </div>
            <div className="flex-none gap-6">
                <Text>
                    <Link to={'/editor'}>Editor</Link>
                </Text>
                <Text>
                    <Link to={'/templates'}>Templates</Link>
                </Text>
                <Text>
                    <Link to={'/portfolios'}>Your sites</Link>
                </Text>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={demo} alt='gg' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar