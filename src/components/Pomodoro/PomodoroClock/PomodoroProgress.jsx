import './PomodoroProgress.css';
const PomodoroProgressItem = ({session}) => {
    if (session.totalTime > 0)
    return (
        <div className="progress-item-complete">
        </div>
    )
    return (
        <div className="progress-item">
        </div>
    )
}
export const PomodoroProgress = ({sessions}) => {
    return (
        <div className="progress-container">
            {
                sessions.map((session) => {
                    return (
                        <PomodoroProgressItem
                            key={session.id}
                            session={session}/>
                    )
                })
            }
        </div>
    )
}