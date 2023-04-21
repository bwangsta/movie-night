export function formatDate(date: string) {
  const dateObject = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const formattedDate = new Intl.DateTimeFormat("default", options).format(
    dateObject
  )

  return formattedDate
}
