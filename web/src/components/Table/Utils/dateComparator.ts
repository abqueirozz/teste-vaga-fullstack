
export function dateComparator(date1: string, date2: string) {
    const date1Number = new Date(date1).getTime()
    const date2Number = new Date(date2).getTime()
    if (date1Number === null && date2Number === null) {
        return 0;
    }
    if (date1Number === null) {
        return -1;
    }
    if (date2Number === null) {
        return 1;
    }
    return date1Number - date2Number;
}