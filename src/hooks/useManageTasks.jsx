export const useManageTasks = () => {

    const LOCAL_KEY = 'todo-saved-tasks';

    const saveTasks = ( tasks ) => {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(tasks))
    }

    const loadTasks = () => {
        const tasks = localStorage.getItem(LOCAL_KEY);
        if(tasks) return JSON.parse(tasks)
        return [];
    }
    

    return {
        saveTasks,
        loadTasks
    }

}