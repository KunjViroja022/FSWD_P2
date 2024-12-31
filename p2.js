// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");
let task = [
    { title: "Eat", dueTime: 2, priority: 1 },
    { title: "Swim", dueTime: 3, priority: 3 },
    { title: "Excercise", dueTime: 5, priority: 4 }
]
// console.log(task);


//Add Task
const addTask = (task, new_task) => {
    try {
        if (!new_task.title || !new_task.dueTime || !new_task.priority) {
            throw new Error("The Task Must Have Atributes Like Title, DueTime & Priority.");
        }
        task.push(new_task)
    } catch (error) {
        console.error(error.message);
    }
}
addTask(task, { title: "Run", dueTime: 3, priority: 2 })
console.log(task)



// //Sort Task
// let sortTaskbyPriority =task.sort((a,b) =>a.priority - b.priority)
//  console.log(sortTaskbyPriority)


// //Display tasks due within a certain timeframe.
// let due = (task,duration) =>{
//     const now = 0;
//     return task.filter(task =>task.duetime <now + duration)
// }

// console.log(due(task,5))


//Simulate sending reminders using setTimeout() based on the task's dueTime.
// let scheduleReminders = (task) => {
//     task.forEach(task => {
//         setTimeout(() => {
//             console.log(`Reminder: Task "${task.title}" is due now!`);
//         }, task.dueTime * 60000); // Convert minutes to milliseconds
//     });
// }
// console.log(scheduleReminders(task))
