const parseTimestamp = (timestapm) => {
    const monthInArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const date = new Date(timestapm)
    const hours = date?.getHours() < 10 ? `0${date?.getHours()}` : date?.getHours()
    const minutes = date?.getMinutes() < 10 ? `0${date?.getMinutes()}` : date?.getMinutes()
    const year = date?.getFullYear()
    const data = date?.getDate()
    const month = monthInArr[date?.getMonth()]
    return {
        hours,
        minutes,
        year,
        data,
        month
    }
}

export default parseTimestamp