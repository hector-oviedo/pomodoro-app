import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../contexts/AppContext';

import styles from './Item.module.css';
export const Item = ({task, disabled = true}) => {

    const { tasksDispatch } = useAppContext();
    const navigate = useNavigate();

    const onClickHandle = () => {
        if (disabled) return;

        tasksDispatch({ type: 'SET_ACTIVE', payload: task.id });
        navigate('/task')
    }

    return (
    <button
        className={disabled ? styles['item-disabled'] : styles['item']}
        onClick={onClickHandle}>
            {task?.name}</button>
    )
}