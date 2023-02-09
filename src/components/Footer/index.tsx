import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>Vote em seu restaurante preferido</h2>
                <h3>Democratic Lunch <span>© 2023</span></h3>
            </div>
        </footer>
    );
}
export default Footer