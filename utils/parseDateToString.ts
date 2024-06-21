const parseDateToStr = (date: Date) => {
    const day = date.getDate()
    const monthIdx = date.getMonth() + 1
    const month = monthIdx < 10 ? `0${monthIdx}` : monthIdx.toString()
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

export default parseDateToStr