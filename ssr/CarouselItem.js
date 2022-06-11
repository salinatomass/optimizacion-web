const h = require('hyperscript')
const formatDistance = require('date-fns/formatDistance')
const parseISO = require('date-fns/parseISO')

const relativeDate = dateStr =>
  formatDistance(parseISO(dateStr, 'YYYY-MM-DD'), new Date())

const Controls = ({ slug, youtubeVideoId }) =>
  h(
    'div',
    h(
      'a.js-video-link',
      {
        href: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
        'data-videoid': youtubeVideoId,
        title: 'Watch trailer',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img', {
        src: 'assets/play-icon.png',
        alt: 'Play',
        width: '30',
      })
    ),
    h(
      'a',
      {
        href: `https://kitsu.io/explore/anime/${slug}`,
        title: 'See more',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img', {
        src: 'assets/plus-icon.png',
        alt: 'More info',
        width: '30',
      })
    )
  )

const CarouselItem = ({
  imageUrl,
  title,
  subtitle,
  slug,
  youtubeVideoId,
  startDate,
}) =>
  h(
    'div.carousel-item',
    h('img', {
      srcset: `${imageUrl.small}, ${imageUrl.medium} 2x, ${imageUrl.large}`,
      alt: '',
      loading: 'lazy',
    }),
    h(
      'div',
      Controls({ slug, youtubeVideoId }),
      h('p.carousel-item__title', title),
      h('p.carousel-item__subtitle', subtitle),
      h('p.carousel-item__date', `Released: ${relativeDate(startDate)}`)
    )
  )

module.exports = CarouselItem
