import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="m-0 pe-1 d-flex align-items-center gap-2">
                <NavLink to="/" className={({isActive}) => isActive ? 'active h-100 d-flex align-items-center' : 'h-100 d-flex align-items-center'}>About</NavLink>
                <NavLink to="/portfolio" className={({isActive}) => isActive ? 'active h-100 d-flex align-items-center' : 'h-100 d-flex align-items-center'}>Portfolio</NavLink>
                <NavLink to="/resume" className={({isActive}) => isActive ? 'active h-100 d-flex align-items-center' : 'h-100 d-flex align-items-center'}>Resume</NavLink>
        </div>
    )
}