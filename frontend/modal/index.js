export const modalListener = e => {
  const img = e.target
  const link = img.parentElement
  const videoId = link.dataset.videoid

  if (link && link.classList.contains('js-video-link')) {
    e.preventDefault()

    // Lazy loading - webpack
    import(/* webpackChunkName: "modal" */ './openModal').then(
      ({ openModal }) => {
        openModal(videoId)
      }
    )
  }
}
