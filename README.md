# React ToDo App
The React ToDo App is a user-friendly task management application designed to help you stay organized and productive. It provides a soothing and visually appealing user interface, along with a range of features to enhance your task management experience.

# Todo-App Url
https://todo-atul.netlify.app/

## Fetch and show todo items from the api
https://jsonplaceholder.typicode.com/todos

## Features
> Creation: Users can easily create new tasks with titles, descriptions, due dates, and categories.

> Deletion: Tasks can be deleted with a simple click, helping users remove completed or unnecessary items from their list.

> Updation: Users have the ability to edit task details, making it convenient to update task information as needed.

> Alerts: The app allows users to set alerts for their tasks, ensuring they never miss an important deadline.

>Search and Organise:Search tasks with any keyword you dont need to type the whole word, just type 3-4 words and you will get the results and you can filter tasks as per your convienience 

> Dashboard: The dashboard provides a quick overview of tasks and completion status.

> Pie Chart: A pie chart visualization offers a visual representation of task distribution by category, improving user insight into their tasks.

## App Components structure
   index
   - 1.App
     - 1.Navbar
     - 2.Home
     - 3.DashboardPage
        - 1.DashNav
        - 2.DashboardContainer
            - 1.PieChartComponent
        - 3.TasksContainer
            - 1.Task
            - 2.AddTaskBox
            - 3.EditBox
            - 4.Description
     - 4.About
     - 5.Footer