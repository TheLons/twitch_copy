import styles from './AccountCard.module.css'

const AccountCard = ({avatar, profile_name, game, number}) => {
    // if (number >= 1000) {
    //     number = number
    // }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.image_container}>
                    <img src={avatar} alt="avatar icon 1" />
                    <div className={styles.description}>
                        <p>{profile_name}</p>
                        <p>{game}</p>
                    </div>
                </div>
                <div className={styles.number_of_views}>{number}</div>
            </div>
        </>
    )
}

export default AccountCard;