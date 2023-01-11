import './styles/Header.css'
import globe from './asset/globe.svg'


export const Header = () => {
    return (
        <header className='header-section container'>
            <figure className='logo'>
                <img src={globe} alt="globe" />
            </figure>
            <div className='logo-name'>
                <a href="#" className='globe'>my travel journal</a>
            </div>
        </header>
    )
}