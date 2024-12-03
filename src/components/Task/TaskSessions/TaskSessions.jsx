import { Session } from './Session';

import styles from './TaskSessions.module.css';

export const TaskSessions = ({sessions}) => {
    return (
        <div className={styles['sessions-container']}>
            {
                sessions.map((session, index) => (
                    <Session key={index} session={session} index={index}/>
                ))
            }
        </div>
    )
}