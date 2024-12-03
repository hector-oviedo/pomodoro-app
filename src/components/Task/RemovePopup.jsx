import { XMarkIcon } from '@heroicons/react/24/solid';

import styles from './RemovePopup.module.css';
export const RemovePopup = ({taskName, onRemove, onClose}) => {

    return (
        <div className={styles['popup-container']}>

        <article className={styles['popup-wrapper']}>
            <header className={styles['popup-header']}>
                <span className={styles['popup-header-text']}>Delete - ({taskName})</span>
                <button className={styles['close-button']} onClick={onClose}>
                    <XMarkIcon className={styles['close-icon']} />
                </button>
            </header>
            <section className={styles['popup-body']}>
                <div>{`Are you sure you want to remove ${taskName}?`}</div>
            </section>
            <footer className={styles['popup-footer']}>
                <button className={styles['remove-button']} onClick={() => { onRemove() }}>
                        Delete
                    </button>
            </footer>
        </article>
        </div>
    )
}