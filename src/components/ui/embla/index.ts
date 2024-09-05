import EmblaCarousel, { type EmblaOptionsType } from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselDotArrows'

const OPTIONS: EmblaOptionsType = {slidesToScroll: 'auto', align: 'start'}

const emblaNode = <HTMLElement>document.querySelector('.embla')
const viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')
const prevBtnNode = <HTMLElement>document.querySelector('.embla__button--prev')
const nextBtnNode = <HTMLElement>document.querySelector('.embla__button--next')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS)

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi, prevBtnNode, nextBtnNode)

emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
