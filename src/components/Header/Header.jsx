import styles from './Header.module.css'
import twitchIcon from '../../assets/Icons/twitch_icon.svg'
import moreIcon from '../../assets/Icons/more_icon.svg'

const Header = () => {
    return (
        <header>
            <div className={styles.section_first}>
                <div className={styles.icon_twitch_container}>
                    <img src={twitchIcon} alt="" />
                </div>
                <div className={styles.browse_container}>
                    <p>Browse</p>
                </div>
                <div className={styles.more_container}>
                    <img src={moreIcon} alt="" />
                </div>
            </div>
            <div className={styles.section_second}>
                <input type='search' name='site_search' id={styles.site_search} className={styles.search} placeholder='Search'></input>
            </div>
            <div className={styles.section_third}>
                <button></button>
                <button className={styles.button_log_in}>Log in</button>
                <button className={styles.button_sign_up}>Sign up</button>
                <button></button>
            </div>
        </header>
    )
}

export default Header