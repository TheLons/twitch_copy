import styles from './VideoCard.module.css'

const VideoCard = ({ image, name, channel, game }) => {
    return (
        <>
            <div className={styles.container}>
                <img src={image} alt="Video image" />
                <p className={styles.video_name}>{name}</p>
                <p>{channel}</p>
                <p>{game}</p>
            </div>
        </>
    )
}

export default VideoCard