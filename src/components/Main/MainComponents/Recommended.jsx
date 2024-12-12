import styles from './Recommended.module.css'

const Recommended = ({ game, image, number_views, keywords }) => {
    return (
        <>
            <div className={styles.container}>
                <img src={image} alt="Game image" />
                <p className={styles.name}>{game}</p>
                <p className={styles.viewers}>{number_views} viewers</p>
            </div>
        </>
    )
}

export default Recommended