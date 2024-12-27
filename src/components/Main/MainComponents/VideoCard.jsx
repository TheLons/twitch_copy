import styles from './VideoCard.module.css'

const VideoCard = ({ image, name, channel, game, icon, keywords }) => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.video_container}>
                    <img src={image} alt="Video image" />
                </div>
                <div className={styles.container_desc}>
                    <div className={styles.icon}>
                        <img src={icon} alt="Profile Icon" />
                    </div>
                    <div className={styles.desc}>
                        <p className={styles.video_name}>{name}</p>
                        <p>{channel}</p>
                        <p>{game}</p>
                        <div className={styles.keywords_container}>
                            {keywords.map((keyword) => <div className={styles.keyword_container}>{keyword}</div>)}
                        </div> 
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default VideoCard