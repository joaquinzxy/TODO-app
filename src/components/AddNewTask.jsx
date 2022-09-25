import { useState } from "react"

export const AddNewTask = ({ onSetTask, newId }) => {

    const [bodyInput, setBodyInput] = useState('');
    const [priority, setPriority] = useState('low');
    const [status, setStatus] = useState('Not started');

    const onBodyChange = event => {
        setBodyInput(event.target.value)
    }

    const onPriorityChange = event => {
        setPriority(event.target.value)
    }

    const onSubmitTask = event => {
        event.preventDefault();
        if (bodyInput.trim().length < 5) return;
        onSetTask({
            id: newId,
            body: bodyInput,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            }),
            priority: priority,
            isCompleted: false
        })
        setBodyInput('')
    }

    return (
        <>
            <div className="add-task">
                <form onSubmit={onSubmitTask}>
                    <input
                        type="text"
                        onChange={onBodyChange}
                        placeholder='Insert task'
                        value={bodyInput}
                        maxLength='40'
                    />
                    <select name="priority" id="priority" onChange={onPriorityChange}>
                        <option value="low">Low</option>
                        <option value="mid">Mid</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                    </select>
                    <input type="submit" value='+' />
                </form>
            </div>
        </>
    )
}
