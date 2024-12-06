import styles from './LeftLayer.module.css'
import hideIcon from '../../assets/Icons/hide_icon.svg'
import AccountCard from './AccountCard'

import Av1 from '../../assets/Images/LeftIcons/avatar_1.png'
import Av2 from '../../assets/Images/LeftIcons/avatar_2.png'
import Av3 from '../../assets/Images/LeftIcons/avatar_3.png'
import Av4 from '../../assets/Images/LeftIcons/avatar_4.png'
import Av5 from '../../assets/Images/LeftIcons/avatar_5.png'

const LeftLayer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content_top}>
                    <p>RECOMMENDED CHANNELS</p>
                    <img src={hideIcon} alt="Hide icon" />
                </div>
                <div className={styles.content_middle}>
                    <AccountCard
                        avatar={Av1}
                        profile_name='caseoh_'
                        game='Waffle Cone Willie'
                        number='61100'
                    />
                    <AccountCard
                        avatar={Av2}
                        profile_name='loltyler1'
                        game='World of Warcraft'
                        number='19200'
                    />
                    <AccountCard
                        avatar={Av3}
                        profile_name='jasontheween'
                        game='Just Chatting'
                        number='13100'
                    />
                    <AccountCard
                        avatar={Av4}
                        profile_name='Vinesauce'
                        game='Dragon Quest III: H…'
                        number='4400'
                    />
                    <AccountCard
                        avatar={Av5}
                        profile_name='stableronaldo'
                        game='Just Chatting'
                        number='1100'
                    />
                </div>
            </div>
        </>
    );
}

export default LeftLayer;