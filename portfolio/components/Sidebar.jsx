import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const router = useRouter();
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <Link href="/">
          <div
            className={`${styles.iconContainer} ${router.pathname === '/' && styles.active
              }`}
          >
            <FilesIcon
              fill={
                router.pathname === '/'
                  ? 'var(--icon-clicked)'
                  : 'var(--icon-bg)'
              }
              className={styles.icon}
            />
          </div>
        </Link>
        <Link href="/github">
          <div
            className={`${styles.iconContainer} ${router.pathname === '/github' && styles.active
              }`}
          >
            <GithubIcon
              fill={
                router.pathname === '/github'
                  ? 'var(--icon-clicked)'
                  : 'var(--icon-bg)'
              }
              className={styles.icon}
            />
          </div>
        </Link>
        <Link href="/projects">
          <div
            className={`${styles.iconContainer} ${router.pathname === '/projects' && styles.active
              }`}
          >
            <CodeIcon
              fill={
                router.pathname === '/projects'
                  ? 'var(--icon-clicked)'
                  : 'var(--icon-bg)'
              }
              className={styles.icon}
            />
          </div>
        </Link>
        <Link href="/contact">
          <div
            className={`${styles.iconContainer} ${router.pathname === '/contact' && styles.active
              }`}
          >
            <MailIcon
              fill={
                router.pathname === '/contact'
                  ? 'var(--icon-clicked)'
                  : 'var(--icon-bg)'
              }
              className={styles.icon}
            />
          </div>
        </Link>
      </div>
      <div className={styles.sidebarBottom}>
        <div className={styles.iconContainer}>
          <Link href="/about">
            <AccountIcon
              fill={
                router.pathname === "/about"
                  ? "var(--icon-clicked)"
                  : "var(--icon-bg)"
              }
              className={styles.icon}
            />
          </Link>
        </div>
        <div className={styles.iconContainer}>
          <Link href="/settings">
            <SettingsIcon fill={
              router.pathname === "/settings"
                ? "var(--icon-clicked)"
                : "var(--icon-bg)"
            } className={styles.icon} />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
