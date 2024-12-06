import styles from './Category.module.css'

const Category = ({ description, icon }) => {
    return (
        <>
            <div className={styles.container}>
                <p>{description}</p>
                <img src={icon} alt="category icon" />
            </div>
        </>
    )
}

export default Category