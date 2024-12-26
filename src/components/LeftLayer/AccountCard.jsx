import styles from './AccountCard.module.css'

const AccountCard = ({avatar, profile_name, game, number}) => {
    // if (number >= 1000) {
    //     number = number
    // }
    console.log(number);
    if (number >= 1000) {
        number = (number / 1000).toString() + 'K';
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.image_container}>
                    <img src={avatar} alt="avatar icon 1" />
                    <div className={styles.description}>
                        <p className={styles.profile}>{profile_name}</p>
                        <p className={styles.game}>{game}</p>
                    </div>
                </div>
                <div className={styles.number_of_views}>{number}</div>
            </div>
        </>
    )
}

export default AccountCard;