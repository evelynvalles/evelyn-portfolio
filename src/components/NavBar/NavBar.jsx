import styles from "../NavBar/NavBar.module.css"
import { Navigation, MobileNav } from "../../components"

const NavBar = () => {

    return (
        <div className={styles.NavBar}>
            <section>
                <Navigation />
                <MobileNav/>
            </section>
        </div>
    )
}

export default NavBar