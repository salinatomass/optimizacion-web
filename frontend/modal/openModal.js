import ModalVideo from 'modal-video'
import 'modal-video/css/modal-video.min.css'

export const openModal = videoId => {
  const button = document.createElement('button') // ghost button hack!!
  button.classList.add('js-modal-btn')
  button.dataset.videoId = videoId

  new ModalVideo([button])
  button.click()
}
