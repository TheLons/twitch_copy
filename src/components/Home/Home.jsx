import Header from '../Header/Header'
import Main from '../Main/Main'
import LeftLayer from '../LeftLayer/LeftLayer'
import Footer from '../Footer/Footer'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home_container}>
            <Header />
            <div className={styles.main_content}>
                <LeftLayer />
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default Home;