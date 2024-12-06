import styles from  './Main.module.css'
import Category from './MainComponents/Category'
import Recommended from './MainComponents/Recommended.jsx'
import VideoCard from './MainComponents/VideoCard.jsx'

import Creative from '../../assets/Icons/Categories/creative.svg'
import Esports from '../../assets/Icons/Categories/esports.svg'
import Gaming from '../../assets/Icons/Categories/gaming.svg'
import Irl from '../../assets/Icons/Categories/irl.svg'
import Music from '../../assets/Icons/Categories/music.svg'

import CallofDuty from '../../assets/Images/Games/CallofDuty.png'
import CounterStrike from '../../assets/Images/Games/CounterStrike.png'
import DeadbyDaylight from '../../assets/Images/Games/DeadbyDaylight.png'
import Fortnite from '../../assets/Images/Games/Fortnite.png'
import GrandTheftAuto from '../../assets/Images/Games/GrandTheftAuto.png'
import LeagueofLegends from '../../assets/Images/Games/LeagueofLegends.png'
import Overwatch from '../../assets/Images/Games/Overwatch.png'
import Valorant from '../../assets/Images/Games/Valorant.png'
import WaffleConeWillie from '../../assets/Images/Games/WaffleConeWillie.png'
import WorldofWarcraft from '../../assets/Images/Games/WorldofWarcraft.png'

import Video1 from '../../assets/Images/GamingVideos/Video1.png'
import Video2 from '../../assets/Images/GamingVideos/Video2.png'
import Video3 from '../../assets/Images/GamingVideos/Video3.png'
import Video4 from '../../assets/Images/GamingVideos/Video4.png'
import Video5 from '../../assets/Images/GamingVideos/Video5.png'

import HorrorVideo1 from '../../assets/Images/HorrorGames/Video1.png'
import HorrorVideo2 from '../../assets/Images/HorrorGames/Video2.png'
import HorrorVideo3 from '../../assets/Images/HorrorGames/Video3.png'
import HorrorVideo4 from '../../assets/Images/HorrorGames/Video4.png'
import HorrorVideo5 from '../../assets/Images/HorrorGames/Video5.png'

const Main = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Games</h1>
                    <p>Live streams of all your favorite games, from shooters to platformers and everything in between</p>
                </div>
                <div className={styles.categories}>
                    <Category 
                        description='Games'
                        icon={Gaming}
                    />
                    <Category 
                        description='IRL'
                        icon={Irl}
                    />
                    <Category 
                        description='Music & DJs'
                        icon={Music}
                    />
                    <Category 
                        description='Creative'
                        icon={Creative}
                    />
                    <Category 
                        description='Esports'
                        icon={Esports}
                    />
                </div>
                <div className={styles.recommended}>
                    <h3>Recommended Games</h3>
                    <div className={styles.recommended_games}>
                        <Recommended 
                            game='Counter-Strike'
                            image={CounterStrike}
                            number_views='109000'
                        />
                        <Recommended 
                            game='World of Warcraft'
                            image={WorldofWarcraft}
                            number_views='91000'
                        />
                        <Recommended 
                            game='Waffle Cone Willie'
                            image={WaffleConeWillie}
                            number_views='61100'
                        />
                        <Recommended 
                            game='Fortnite'
                            image={Fortnite}
                            number_views='51100'
                        />
                        <Recommended 
                            game='League of Legends'
                            image={LeagueofLegends}
                            number_views='51100'
                        />
                        <Recommended 
                            game='Grand Theft Auto V'
                            image={GrandTheftAuto}
                            number_views='49700'
                        />
                        <Recommended 
                            game='VALORANT'
                            image={Valorant}
                            number_views='47100'
                        />
                        <Recommended 
                            game='Dead by Daylight'
                            image={DeadbyDaylight}
                            number_views='41100'
                        />
                        <Recommended 
                            game='Overwatch 2'
                            image={Overwatch}
                            number_views='28400'
                        />
                        <Recommended 
                            game='Call of Duty: Black Ops'
                            image={CallofDuty}
                            number_views='26700'
                        />
                    </div>
                </div>
                <div className={styles.gaming}>
                    <h3>Gaming</h3>
                    <div className={styles.channels}>
                        <VideoCard 
                            image={Video1}
                            name='🟨SPOOKY TIME🟨'
                            channel='caseoh_'
                            game='Waffle Cone Willie'
                        />
                        <VideoCard 
                            image={Video2}
                            name='ACCOMPLISH ! but does meaned job …'
                            channel='loltyler1'
                            game='World of Warcraft'
                        />
                        <VideoCard 
                            image={Video3}
                            name='!DROPS RFK FOR BIS, GNOMER FOR B…'
                            channel='Pikabooirl'
                            game='World of Warcraft'
                        />
                        <VideoCard 
                            image={Video4}
                            name='43 HUNTER <OnlyFangs> FINAL COU…'
                            channel='shroud'
                            game='World of Warcraft'
                        />
                        <VideoCard 
                            image={Video5}
                            name='<OnlyFangs> 43 magelet | R-R-RESU…'
                            channel='MOONMOON'
                            game='World of Warcraft'
                        />
                    </div>
                    <div className={styles.showMore}>
                        Show all
                    </div>
                </div>
                <div className={`${styles.gaming} ${styles.lowest}`}>
                    <h3>Horror Games</h3>
                    <div className={styles.channels}>
                        <VideoCard 
                            image={HorrorVideo1}
                            name='running totem builds all night💀 !MER…'
                            channel='Skermz'
                            game='Dead by Daylight'
                        />
                        <VideoCard 
                            image={HorrorVideo2}
                            name='✧ BIG GIWI 2.0 DEBUT!!! ✧ 8 DAY SUB…'
                            channel='Giwi'
                            game='Mouthwashing'
                        />
                        <VideoCard 
                            image={HorrorVideo3}
                            name='✅!DROPS ENABLED✅ #1 BloodPoint …'
                            channel='LittleSpaceRock'
                            game='Dead by Daylight'
                        />
                        <VideoCard 
                            image={HorrorVideo4}
                            name='ghost catching w/babes | Cheese-a-t…'
                            channel='cheese'
                            game='Phasmophobia'
                        />
                        <VideoCard 
                            image={HorrorVideo5}
                            name='PERMA DEATH RANDOMIZER: ADA E…'
                            channel='Maxylobes'
                            game='Resident Evil 4'
                        />
                    </div>
                    <div className={styles.showMore}>
                        Show all
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;