import { useEffect, useState } from "react"
import { AddNewTask } from "./components/AddNewTask/AddNewTask"
import { Header } from "./components/Header"
import { TaskGrid } from "./components/TaskGrid/TaskGrid"
import { useManageTasks } from "./hooks/useManageTasks"

import './style.css'

export const TodoApp = () => {

  const {loadTasks, saveTasks } = useManageTasks();
  
  const [tasks, setTasks] = useState(loadTasks);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  useEffect(() => {
    if(tasks.length>0){
      const lastTask = tasks[0];
      setIndex(lastTask.id);
    }
  }, [tasks])
  
  

  const onAddNewTask = task => {
    setTasks([task, ...tasks])
  }

  return (
    <>
      <Header/>
      <AddNewTask onSetTask={onAddNewTask} newId={index+1}/>
      <TaskGrid tasks={tasks} setTasks={setTasks}/>

    </>
  )
}
