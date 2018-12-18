const EmptyWeekDayArrayValue = (weekday) => {
    const getWeekDayObj = {
        sat: 6,
        fri: 5,
        thu: 4,
        wed: 3,
        tue: 2,
        mon: 1,
        sun: 0
    }
    return getWeekDayObj[weekday]
}

export default EmptyWeekDayArrayValue