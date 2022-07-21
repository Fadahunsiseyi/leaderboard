const inputName = document.querySelector('.input-name')
const inputScore = document.querySelector('.input-score')
// export  const api = async () => {
//    const res =  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//        method: 'POST',
//        body: JSON.stringify({
//            name: 'first game',
//        }),
//        headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//        }
//    })
//    const result = await res.json()
//    console.log(result)
//    return result
// }


export const postUser = async () => {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nrUyYYnZV6GPlTooepQN/scores/', {
        method: 'POST',
        body: JSON.stringify({
        name: inputName.value,
        score: inputScore.value
        }),
        headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    const result = await res.json()
    console.log(result)
    return result;
}

export const getUser = async () => {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nrUyYYnZV6GPlTooepQN/scores/')
    try {
        const result = await res.json()
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    }
}