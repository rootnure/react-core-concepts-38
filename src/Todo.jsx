// export default function Todo({task}) {
//     return (
//         <li>Task: {task}</li>
//     )
// }

// conditional rendering option 1: (if...else)
/* export default function Todo({task, isDone}) {
    if(isDone) {
        return (<li>Finished: {task}</li>)
    }
    else {
        return (<li>Work on: {task}</li>)
    }
} */

// conditional rendering option 2: (if shortcut)
/* export default function Todo({task, isDone}) {
    if(isDone) {
        return (<li>Finished: {task}</li>)
    }
    return (<li>Work on: {task}</li>)
} */

// conditional rendering option 3: (ternary operator)
/* export default function Todo({task, isDone}) {
    return (<li>{isDone ? 'Finished' : 'Work on'}: {task}</li>)
}
 */


// conditional rendering option 4: &&
/* export default function Todo({task, isDone}) {
    return (
        <li>{task} {isDone && ': Done'}</li>
    )
} */

// conditional rendering option 5: ||
/* export default function Todo({task, isDone}) {
    return (
        <li>{task} {isDone || ': Do it'}</li>
    )
} */

// conditional rendering option 6: (use variable)
export default function Todo({task, isDone}) {
    let msg;
    if(isDone) {
        msg = <li>Finished: {task}</li>
    }
    else {
        msg = <li>Work on: {task}</li>
    }
    return msg;
}
