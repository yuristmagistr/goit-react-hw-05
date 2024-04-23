import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';


const Navigation = () => {
    return (
        <header className={css.header}>
            <nav>
                <ul className={css.list}>
                    <li>
                        <NavLink to='/' className={css.link}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movies' className={css.link}>Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;