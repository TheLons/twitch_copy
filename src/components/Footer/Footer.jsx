import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_desc}>
                <p><span>Join the Twitch community!</span>Discover the best live streams anywhere.</p>
            </div>
            <button>
                Sign Up
            </button>
        </div>
    )
}

export default Footer