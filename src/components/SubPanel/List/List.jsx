import { Item } from './Item';

import styles from './List.module.css'

export const List = ({name, tasks = []}) => {
    return (
        <section>
            <h3 className={styles['group-title']}>{name}</h3>
            <div className={styles['group-list']}>
                {
                    tasks.map((task) => {
                        return (
                            <Item
                                key={task.id}
                                task={task}
                                disabled={false}
                            />
                        )
                    })
                }
                
                { tasks.length === 0 ? <Item task={{name:'No Entries'}}/> : '' }
            </div>
        </section>
    )
}