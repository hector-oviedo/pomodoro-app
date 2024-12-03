import { DocumentPlusIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../contexts/AppContext';
import { useForm } from '../../../hooks/useForm';

import styles from './CreateTask.module.css';
export const CreateTask = () => {
    const navigate = useNavigate();
    const { SubsState, tasksDispatch, getSectionPath } = useAppContext();

    const initialFormState = 
        SubsState.reduce((acc, sub) => ({
            ...acc,
            [sub.id]: 0,
        }),
        {
            taskName: '',
            note: '',
        });

    const { formState, onInputChange, onResetForm } = useForm(initialFormState);
    const { taskName, note, ...dynamicFields } = formState;

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (taskName.length < 1) return;

        const subs = Object.entries(dynamicFields)
            .map(([subId, entryId]) => 
                ({
                    subId,
                    entryId:parseInt(entryId)
                })
            )

        const payload = {
            id: null,
            name: formState.taskName,
            note: formState.note,
            active: null,
            dateCreation: new Date(),
            dateCompletion: null,
            totalTime: 0,
            sessions: [],
            subs,
        };

        tasksDispatch({ type: 'CREATE', payload })

        navigate(getSectionPath('TASK'))
    };

    const onClickAddHandle = (e, navigation) => {
        e.preventDefault();
        const path = `/${navigation}/create`;
        navigate(path)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <section className={styles['task-container']}>
                <header className={styles['task-header']}>
                    Add New Task
                    <br />
                    <br />
                    <hr />
                </header>
                <div className={styles['task-body']}>
                    {/* Task Name Field */}
                    <div className={styles['form-field']}>
                        <label htmlFor={styles['taskName']}>Task Name</label>
                        <input
                            value={taskName}
                            onChange={onInputChange}
                            name="taskName"
                            id="taskName"
                            type="text"
                            placeholder="Enter task name"
                        />
                    </div>

                    {
                        SubsState.map((sub) => (
                            <div className={styles['sub-container']} key={sub.id}>
                                <div className={styles['form-field']}>
                                    <label htmlFor={sub.id}>{sub.navLabel}</label>
                                    <select
                                        value={formState[sub.id]}
                                        onChange={onInputChange}
                                        id={sub.id}
                                        name={sub.id}
                                        className={styles['select-field-control']}
                                    >
                                        {sub.entries.map((item) => (
                                            <option key={item.id} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={styles['sub-button-container']}>
                                    <button className={styles['sub-button']} onClick={(e) => onClickAddHandle(e, sub.navigation)}>
                                        <DocumentPlusIcon className={styles['sub-button-icon']}/>
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                    {/* Notes Field */}
                    <div className={styles['form-field']}>
                        <label htmlFor="note">Note</label>
                        <textarea
                            value={note}
                            onChange={onInputChange}
                            name="note"
                            id="note"
                            placeholder="Enter additional notes"
                        ></textarea>
                    </div>
                </div>
                <footer className={styles['task-footer']}>
                    <button type="submit" className={styles['task-button']}>
                        Create Task
                    </button>
                </footer>
            </section>
        </form>
    );
};