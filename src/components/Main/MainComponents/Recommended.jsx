import styles from './Recommended.module.css'

const Recommended = ({ game, image, number_views, keywords }) => {
    if (number_views > 1000) {
        number_views = (number_views / 1000).toString() + 'K';
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.image_container}>
                    <img src={image} alt="Game image" />
                </div>
                <p className={styles.name}>{game}</p>
                <p className={styles.viewers}>{number_views} viewers</p>
                <div className={styles.keywords_container}>
                    {keywords.map((keyword) => <div className={styles.keyword_container}>{keyword}</div>)}
                </div>
            </div>
        </>
    )
}

export default Recommended