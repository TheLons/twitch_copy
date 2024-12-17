import styles from './Footer.module.css'
import FooterIcon from '../../assets/Icons/footer_icon.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_desc}>
                <img src={FooterIcon} alt="Footer icon" />
                <p><span>Join the Twitch community!</span>Discover the best live streams anywhere.</p>
            </div>
            <button>
                Sign Up
            </button>
        </div>
    )
}

export default Footer