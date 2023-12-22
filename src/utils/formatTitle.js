export function formatTitle(titleToFormat) {

  const title = titleToFormat
  const titleSplit = title.split("").length

  if (titleSplit > 14) {
      const titleSliced = title.slice(0,14);
      return `${titleSliced}...`
    }

    return title
}
