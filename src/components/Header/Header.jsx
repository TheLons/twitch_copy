import styles from './Header.module.css'
import twitchIcon from '../../assets/Icons/twitch_icon.svg'
import moreIcon from '../../assets/Icons/more_icon.svg'
import searchIcon from '../../assets/Icons/search_icon.svg'
import profileIcon from '../../assets/Icons/profile_icon.png'
import notificationsIcon from '../../assets/Icons/notifications_icon.svg'

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
                <div className={styles.search_icon}>
                    <img src={searchIcon} alt="Search Icon" />
                </div>
            </div>
            <div className={styles.section_third}>
                <button className={styles.button_notification}>
                    <img src={notificationsIcon} alt="Notifications icon" />
                </button>
                <div className={styles.buttons_sign_in}>
                    <button className={styles.button_log_in}>Log In</button>
                    <button className={styles.button_sign_up}>Sign Up</button>
                </div>
                <button className={styles.button_profile}>
                    <img src={profileIcon} alt="Profile Icon" />
                </button>
            </div>
        </header>
    )
}

export default Header