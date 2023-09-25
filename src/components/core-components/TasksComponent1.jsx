function TasksComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const tasks = [
        { id: 1, description: 'Apply tailwind CSS to the application', done: false, targetDate: targetDate },
        { id: 2, description: 'design login form', done: false, targetDate: targetDate },
        { id: 3, description: 'Containerize the applicaiton', done: false, targetDate: targetDate }
    ]

    return (
        <div className="TaskComponent">
            <h1>Things you want to do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>status</td>
                            <td>target date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(
                                task => (
                                    <tr key={task.id}>
                                        <td>{task.id}</td>
                                        <td>{task.description}</td>
                                        <td>{task.done.toString()}</td>
                                        <td>{task.targetDate.toDateString()}</td>
                                        <td></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>



    )
}

export default TasksComponent