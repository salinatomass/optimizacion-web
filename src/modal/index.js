export const modalListener = e => {
  const img = e.target
  const link = img.parentElement

  if (link && link.classList.contains('js-video-link')) {
    e.preventDefault()
    console.log(link.dataset.videoid)
  }
}
