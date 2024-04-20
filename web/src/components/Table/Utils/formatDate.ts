export function formatDate(inputDate: string | Date) {
    const date = typeof inputDate === 'string' ?new Date(inputDate) : inputDate

    return`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    
}