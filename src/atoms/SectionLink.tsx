import type { MouseEvent, ReactNode } from 'react'

interface Props {
  children: ReactNode
  name: string
  href: string
  className?: string
}

export const SectionLink = ({ children, name, className, href }: Props) => {
  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionName: string
  ) => {
    event.preventDefault()
    const targetElement = document.querySelector(`#${sectionName}`)
    targetElement!.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <a
      className={className || ''}
      onClick={(event) => handleNavigation(event, href)}
      href={`#${href}`}
      aria-label={name}
    >
      {children}
    </a>
  )
}
