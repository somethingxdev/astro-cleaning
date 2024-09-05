import EmblaCarousel, { type EmblaOptionsType } from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselDotArrows'
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton'
import Fade from 'embla-carousel-fade' // Import the Fade plugin

const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto', align: 'start' }

const emblaNode = <HTMLElement>document.querySelector('.embla')
const viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')
const prevBtnNode = <HTMLElement | null>document.querySelector('.embla__button--prev')
const nextBtnNode = <HTMLElement | null>document.querySelector('.embla__button--next')
const dotsNode = <HTMLElement>document.querySelector('.embla__dots')
let emblaApi

if (emblaNode.hasAttribute('data-fade')) {
  emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Fade()])
} else {
  emblaApi = EmblaCarousel(viewportNode, OPTIONS)
}

let removePrevNextBtnsClickHandlers: (() => void) | null = null
let removeDotBtnsAndClickHandlers: (() => void) | null = null
if (prevBtnNode && nextBtnNode) {
  removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi, prevBtnNode, nextBtnNode)
}

if (dotsNode) {
  removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(emblaApi, dotsNode)
}

emblaApi.on('destroy', () => {
  if (removePrevNextBtnsClickHandlers) {
    removePrevNextBtnsClickHandlers()
  }
  if (removeDotBtnsAndClickHandlers) {
    removeDotBtnsAndClickHandlers()
  }
})
