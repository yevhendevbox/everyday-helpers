export function formatFileNameFilter(fileName) {
  if (!fileName) return ''

  return fileName.replace(/\.[^.]+$/, '')
}

export function formatFileSizeFilter(bytes) {
  if (bytes === 0) return 0
  const sufixes = ['B', 'kB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${Number((bytes / Math.pow(1024, i)).toFixed(2)).toPrecision()} ${sufixes[i]}`
}

export function generateFileUrlFilter(file) {
  if (!file.name) return ''

  const result = URL.createObjectURL(file)
  return result
}

export function removeProtocolFilter(url) {
  return url.replace(/(^\w+:|^)\/\//, '')
}


