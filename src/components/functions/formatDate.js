const formatDate = sec => {
    const d = new Date(sec * 1000);

    const toLocale = val => val.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

    const year = d.getFullYear();
    const month = toLocale(d.getMonth() + 1);
    const day = toLocale(d.getDate());

    return `${day}.${month}.${year}`;
};
export default formatDate;