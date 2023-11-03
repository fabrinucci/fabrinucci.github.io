const navLinks = document.querySelectorAll(
  '#nav-button'
) as NodeListOf<HTMLAnchorElement>

navLinks.forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault()
    const targetId = this.getAttribute('href')
    const targetElement = document.querySelector(targetId as string)

    targetElement!.scrollIntoView({
      behavior: 'smooth'
    })
  })
})
