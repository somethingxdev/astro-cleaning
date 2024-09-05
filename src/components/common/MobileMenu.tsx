import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

import { Menu } from 'lucide-react'
const items = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', dropdown: true },
  { label: 'Pricing', href: '/cleaning' },
  { label: 'Contact', href: '/cleaning' },
]
export function MobileMenu({ children }) {
  return (
    <Sheet>
      <SheetTrigger className="ml-5 grid size-10 place-items-center rounded-lg bg-blue/20 text-primary lg:hidden">
        <Menu />
      </SheetTrigger>

      <SheetContent>
        <SheetHeader className="mb-10">{children}</SheetHeader>
        <ul>
          {items.map((item, index) =>
            item.label.toLowerCase() === 'services' ? (
              <Accordion type="single" collapsible key={index} className="mb-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className='"text-xl uppercase text-primary'>{item.label}</AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      <li className="mb-3 text-base text-primary">
                        <a href="/cleaning/carpet">Carpet Cleaning</a>
                      </li>
                      <li className="mb-3 text-base text-primary">
                        <a href="/cleaning/upholstery">Upholstery Cleaning</a>
                      </li>
                      <li className="mb-3 text-base text-primary">
                        <a href="/cleaning/tile-grout">Tile & Grout Cleaning</a>
                      </li>
                      <li className="text-base text-primary">
                        <a href="#">
                          Carpet Repairs and <br></br> Re-Stretching
                        </a>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <li className="mb-4 text-xl uppercase text-primary" key={index}>
                {item.label}
              </li>
            ),
          )}
        </ul>
      </SheetContent>
    </Sheet>
  )
}
