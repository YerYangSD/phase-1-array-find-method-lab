const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
]
let win = record.find(superbowlWin)
function superbowlWin(record) {
    let result = undefined;
    for (let item of record)
        if (item.result === "W") {
            result = item.year;
            return result;
        }
}
console.log(win)