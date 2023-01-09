import styles from './Logo.module.scss';
import Link from 'next/link';

export default function Logo(props) {
    return (
        <Link href='/' onClick={props.onClick}>
            <div className={styles.logo}>VELVETY</div>
            <div className={styles.copyRight}>&copy; 2023</div>
        </Link>
    );
}