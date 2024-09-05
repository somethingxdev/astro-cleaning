import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    label: string
    href: string
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!
      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.ul
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'border-blue fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border-2 bg-white px-4 py-2 shadow-lg',
          className,
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <li className="px-4 py-2 hover:text-primary" key={idx}>
            <a href={navItem.href}>{navItem.label}</a>
          </li>
        ))}
      </motion.ul>
    </AnimatePresence>
  )
}
