const formatDate = sec => {
    const d = new Date(sec * 1000),
        year = d.getFullYear(),
        month = (d.getMonth() + 1)
            .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }),
        day = d.getDate()
            .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    return `${day}.${month}.${year}`;
};
export default formatDate;