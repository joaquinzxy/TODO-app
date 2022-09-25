import { Task } from "./Task"

export const TaskGrid = ({ tasks, setTasks }) => {

    const onDeleteTask = taskId => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    const onCompletedTask = taskId => {
        setTasks( tasks.map(task => task.id===taskId ? {...task, isCompleted: !task.isCompleted} : {...task}));
    }


    return (
        <>
            <div className="task-grid">
                {tasks.map(task => (
                    <Task key={task.id} {...task} onDeleteTask={onDeleteTask} onCompletedTask={onCompletedTask}/>
                ))}
            </div>
        </>
    )
}
