import { modalListener } from './modal'

document.body.addEventListener('click', e => {
  const tagName = e.target.tagName

  if (['IMG', 'A'].includes(tagName)) modalListener(e)
})
