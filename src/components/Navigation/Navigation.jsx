import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <header>
            <nav className={css.navigation}>
                <ul>
                    <li >
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li >
                        <NavLink to='/movies'>Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;