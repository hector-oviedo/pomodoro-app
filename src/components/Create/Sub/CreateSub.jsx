import { useAppContext } from "../../../contexts/AppContext";
import { useForm } from "../../../hooks/useForm";
import { getSub } from "../../../selectors/subsSelector";
import { List } from "./List";

import styles from './CreateSub.module.css';

export const CreateSub = ({ subId }) => {
    const { SubsState, subsDispatch, tasksDispatch } = useAppContext();

    const { navLabel, entries } = getSub(SubsState, subId);

    const { formState, onInputChange, onResetForm } = useForm({
        Name: '',
    });

    const { Name } = formState;

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (Name.length < 2) return;

        const payload = {
            subId,
            entry:{
                id:null,
                name:formState.Name,
                deletable:true,
            }
        }
        subsDispatch({ type: 'CREATE', payload })

        onResetForm();
    };

    const removeItem = (entryId) => {
        //remove all tasks
        const payloadTasks = {
            subId,
            entryId
        }
        tasksDispatch({ type: 'DELETE_SUB', payload:payloadTasks })

        //remove sub
        const payloadSubs = {
            subId,
            entryId
        }
        subsDispatch({ type: 'DELETE', payload:payloadSubs })
    }

    return (
        <>
        <form onSubmit={onFormSubmit}>
        <section className={styles['sub-container']}>
            
                <header className={styles['sub-header']}>
                    {`Add ${navLabel}`}
                    <br /><br />
                    <hr />
                </header>
                <div className={styles['sub-body']}>

                    <div className={styles['form-field']}>
                        <label htmlFor="Name">{`${navLabel} Name`}</label>
                        <input
                            value={Name}
                            onChange={onInputChange}
                            name="Name"
                            id="Name"
                            type="text"
                            placeholder={`Enter ${navLabel} name`} />
                    </div>

                </div>
                <footer className={styles['sub-footer']}>
                    <button
                        type='submit'
                        className={styles['sub-button']}>
                        Add
                    </button>
                </footer>

        </section>
        </form>
        <List
            collection={entries}
            label={navLabel}
            removeHandle={removeItem}
            subId={subId}/>
        </>
    )
}