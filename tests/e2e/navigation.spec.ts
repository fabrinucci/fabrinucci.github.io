import { test, expect } from '@playwright/test'

test.describe('Testing Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test.describe('Switch Theme', () => {
    test('Switch theme works correctly', async ({ page }) => {
      const toggleTheme = page.getByTestId('toggle-theme')
      await expect(toggleTheme).toHaveAccessibleName(/Switch to dark theme/)

      await toggleTheme.click()
      await expect(toggleTheme).toHaveAccessibleName(/Switch to light theme/)
    })
  })

  test.describe('Language Picker', () => {
    test('Language picker should work correctly', async ({ page }) => {
      const translateEnglish = page.getByTestId('translate-en')
      const translateSpanish = page.getByTestId('translate-es')

      expect(translateEnglish).toHaveAttribute('href', '/')
      expect(translateSpanish).toHaveAttribute('href', '/es/')

      expect(page.getByTestId('about-title')).toContainText(/About me/i)

      await translateSpanish.click()
      await expect(page.getByTestId('about-title')).toContainText('Sobre mí')

      await translateEnglish.click()
      await expect(page.getByTestId('about-title')).toContainText(/About me/i)
    })

    test('Language picker should have correct labels', async ({ page }) => {
      const translateEnglish = page.getByTestId('translate-en')
      const translateSpanish = page.getByTestId('translate-es')

      expect(translateEnglish).toHaveAccessibleName('Translate to English')
      expect(translateSpanish).toHaveAccessibleName('Translate to Spanish')

      await translateSpanish.click()
      await expect(translateEnglish).toHaveAccessibleName('Traducir a Inglés')
      await expect(translateSpanish).toHaveAccessibleName('Traducir a Español')
    })
  })

  test.describe('Links', () => {
    test('Navbar links should have the correct href', async ({ page }) => {
      const navbarHome = page.getByRole('navigation').getByLabel('home')
      const navbarSkills = page.getByRole('navigation').getByLabel('skills')
      const navbarProjects = page.getByRole('navigation').getByLabel('projects')
      const navbarContact = page.getByRole('navigation').getByLabel('contact')

      await expect(navbarHome).toHaveAttribute('href', '#home')
      await expect(navbarSkills).toHaveAttribute('href', '#skills')
      await expect(navbarProjects).toHaveAttribute('href', '#projects')
      await expect(navbarContact).toHaveAttribute('href', '#contact')
    })

    test('Header links should have correct href', async ({ page }) => {
      const githubLink = page.locator('#home').getByLabel('GitHub')
      const linkedinLink = page.locator('#home').getByLabel('LinkedIn')
      const xLink = page.locator('#home').getByLabel('Twitter')
      await expect(page.getByLabel(/Let's talk/)).toHaveAttribute(
        'href',
        '#contact'
      )

      await expect(githubLink).toHaveAttribute(
        'href',
        'https://github.com/fabrinucci'
      )
      await expect(linkedinLink).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/fabrinucci/'
      )
      await expect(xLink).toHaveAttribute('href', 'https://x.com/FabrizioDev')
    })

    test('Footer links should have the correct href', async ({ page }) => {
      const footerHome = page.locator('footer').getByLabel('home')
      const footerSkills = page.locator('footer').getByLabel('skills')
      const footerProjects = page.locator('footer').getByLabel('projects')
      const footerContact = page.locator('footer').getByLabel('contact')

      const githubLink = page.locator('footer').getByLabel('GitHub')
      const linkedinLink = page.locator('footer').getByLabel('LinkedIn')
      const xLink = page.locator('footer').getByLabel('Twitter')

      await expect(footerHome).toHaveAttribute('href', '#home')
      await expect(footerSkills).toHaveAttribute('href', '#skills')
      await expect(footerProjects).toHaveAttribute('href', '#projects')
      await expect(footerContact).toHaveAttribute('href', '#contact')

      await expect(githubLink).toHaveAttribute(
        'href',
        'https://github.com/fabrinucci'
      )
      await expect(linkedinLink).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/fabrinucci/'
      )
      await expect(xLink).toHaveAttribute('href', 'https://x.com/FabrizioDev')
    })
  })
})
