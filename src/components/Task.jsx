import { FaTrashAlt, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { ImCheckboxChecked } from 'react-icons/im'

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
            <div className={"task-card"}>
                <div className="card-header">
                    <div className="header-text">
                        <ImCheckboxChecked 
                            className={`complete-task ${isCompleted && 'completed'}`}
                            onClick={()=>onCompletedTask(id)}
                        />
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
                        <button data-id={id} onClick={handleDeleteTask}><FaTrashAlt/></button>
                    </div>
                </div>
            </div>
        </>
    )
}
