import type { MouseEvent, ReactNode } from 'react'

interface Props {
  children: ReactNode
  name: string
  className?: string
}

export const SectionLink = ({ children, name, className }: Props) => {
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
      onClick={(event) => handleNavigation(event, name)}
      href={`#${name}`}
      aria-label={name}
    >
      {children}
    </a>
  )
}
