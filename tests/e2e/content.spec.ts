import { test, expect } from '@playwright/test'

test.describe('Testing content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test.describe('Header', () => {
    test('Should be visible', async ({ page }) => {
      await expect(page.getByTestId('name-title')).toBeVisible()
      await expect(page.getByTestId('job-title')).toBeVisible()
      await expect(page.getByTestId('about-title')).toBeVisible()
      await expect(page.getByTestId('about-description')).toBeVisible()

      await expect(page.getByLabel(/Download CV/)).toBeVisible()
      await expect(page.getByLabel(/Let's talk/)).toBeVisible()

      await expect(
        page.locator('#home').getByTestId('social-links')
      ).toBeVisible()
    })
  })

  test.describe('Skills', () => {
    test('Should be visible', async ({ page }) => {
      await expect(page.getByTestId('skills-title')).toBeVisible()
      await expect(page.getByTestId('skills-subtitle')).toBeVisible()
      await expect(page.getByTestId('skills-list')).toBeVisible()
    })
  })

  test.describe('Projects', () => {
    test('Should be visible', async ({ page }) => {
      await expect(page.getByTestId('projects-title')).toBeVisible()
      await expect(page.getByTestId('projects-subtitle')).toBeVisible()
      await expect(page.getByTestId('projects-list')).toBeVisible()
    })

    test('Should have the correct quantity of projects', async ({ page }) => {
      const projectsList = page.getByTestId('projects-list')
      const articles = projectsList.locator('article')

      await expect(articles).toHaveCount(6)
    })

    test('Every project should have the correct quantity of links', async ({
      page
    }) => {
      const projectsList = page.getByTestId('projects-list')
      const articles = projectsList.locator('article')
      const articlesQty = await articles.count()

      for (let i = 0; i < articlesQty; i++) {
        const article = articles.nth(i)
        const links = article.locator('a')
        await expect(links).toHaveCount(2)
      }
    })

    test('The href must be a valid URL', async ({ page }) => {
      const projectsList = page.getByTestId('projects-list')
      const articles = projectsList.locator('article')
      const articlesQty = await articles.count()

      for (let i = 0; i < articlesQty; i++) {
        const article = articles.nth(i)
        const links = article.locator('a')
        const linkQty = await links.count()

        for (let j = 0; j < linkQty; j++) {
          const link = links.nth(j)
          const href = await link.getAttribute('href')

          expect(href).not.toBeNull()
          expect(href).toMatch(/^https?:\/\//)
        }
      }
    })
  })

  test.describe('Contact', () => {
    test('Should be visible', async ({ page }) => {
      await expect(page.getByTestId('contact-title')).toBeVisible()
      await expect(page.getByTestId('contact-subtitle')).toBeVisible()
      await expect(page.getByTestId('contact-list')).toBeVisible()
    })

    test('Should have the correct name', async ({ page }) => {
      const list = page.getByTestId('contact-list')

      await expect(
        list.getByRole('heading', { name: /twitter/i })
      ).toBeVisible()
      await expect(list.getByRole('heading', { name: /email/i })).toBeVisible()
      await expect(
        list.getByRole('heading', { name: /linkedin/i })
      ).toBeVisible()
    })

    test('Links should have the correct href', async ({ page }) => {
      const list = page.getByTestId('contact-list')

      const emailLink = list.getByLabel(/send a message email/i)
      const xLink = list.getByLabel(/send a message twitter/i)
      const linkedinLink = list.getByLabel(/send a message linkedin/i)

      await expect(emailLink).toHaveAttribute(
        'href',
        'mailto:fabrinuccidev@gmail.com'
      )
      await expect(xLink).toHaveAttribute('href', 'https://x.com/FabrizioDev')
      await expect(linkedinLink).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/fabrinucci'
      )
    })
  })
  test.describe('Footer', () => {
    test('Should be visible', async ({ page }) => {
      await expect(page.locator('footer')).toBeVisible()
      await expect(page.getByTestId('footer-title')).toBeVisible()
      await expect(page.getByTestId('footer-title')).toContainText(
        'Fabrizio Nucci'
      )
      await expect(page.getByTestId('footer-links')).toBeVisible()
      await expect(
        page.getByRole('contentinfo').getByTestId('social-links')
      ).toBeVisible()
    })
  })
})
