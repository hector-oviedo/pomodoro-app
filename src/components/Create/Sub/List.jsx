import { TrashIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { RemovePopup } from './RemovePopup';

import styles from './List.module.css';
export const List = ({collection, removeHandle, label, subId}) => {
    const [ ActualItem, setActualItem ] = useState();

    const [ PopupVisible, setPopupVisible ] = useState(false);

    const onRemoveHandle = (id) => {
        removeHandle(id)
        setPopupVisible(false)
    }

    const onCloseHandle = () => {
        setPopupVisible(false)
    }

    const openPopup = (item) => {
        setActualItem(item)
        setPopupVisible(true)
    }
    return (
        <section className={styles['table-container']}>
            {
                PopupVisible && (
                    <RemovePopup
                        item={ActualItem}
                        onRemove={onRemoveHandle}
                        onClose={onCloseHandle}
                        subId={subId}/>
                )
            }

            <div className={styles['table-header']}>
                <div className={styles['table-cell']}>{label}</div>
            </div>

            {
                collection.map((item, index) => {
                    return (
                        <div
                            key={item.id}
                            className={styles['table-row']}>
                            <div className={styles['table-index']}>{`#${index}`}&nbsp;</div>
                            <div className={styles['table-cell']}>
                                {item.name}
                            </div>
                            {
                                item.deletable ?  (
                                <div className={`${styles['table-cell']} ${styles['action']}`}>
                                    <button className={styles['remove-button']} onClick={() => { openPopup(item) }}>
                                        <TrashIcon className={styles['remove-icon']} />
                                    </button>
                                </div>)
                                : <div className={`${styles['table-cell']} ${styles['action']}`}></div>
                            }
                           
                        </div>
                    )
                })
            }
        </section>
    )
}