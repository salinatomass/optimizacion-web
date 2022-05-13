import ModalVideo from 'modal-video'
import 'modal-video/css/modal-video.min.css'

export const openModal = videoId => {
  // hack :(
  const button = document.createElement('button')
  button.classList.add('js-modal-btn')
  button.dataset.videoid = videoId

  new ModalVideo([button])
  button.click()
}
