import { FaTrashAlt } from 'react-icons/fa'
import { ImCheckboxChecked } from 'react-icons/im'
import './Task.css'

export const Task = ({ body, date, time, isCompleted, priority, id, onDeleteTask, onCompletedTask }) => {

    const handleDeleteTask = (event) => {
        const id = event.target.dataset.id;
        onDeleteTask(parseInt(id));
    }

    const handleUpStatus = () => {
        console.log('test')
    }

    return (
        <>
            <div className={`task-card ${isCompleted ? 'completed' : priority}`}>
                <div className="card-header">
                    <div className="header-text">
                        <div className="icon">
                            <ImCheckboxChecked
                                className={`complete-task ${isCompleted && 'completed'}`}
                                onClick={() => onCompletedTask(id)}
                            />
                        </div>
                        <h2>{body}</h2>
                    </div>
                    <div className="date-time">
                        <p>{date}</p>
                        <p>{time}</p>
                    </div>
                </div>
                <div className="card-footer">
                    <p className={`priority ${priority}`}>{priority.toUpperCase()}</p>
                    <div className="card-controls">
                        <button data-id={id} onClick={handleDeleteTask}><FaTrashAlt /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
