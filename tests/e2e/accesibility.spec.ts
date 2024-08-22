import { test, expect } from '@playwright/test'
import { AxeBuilder } from '@axe-core/playwright'

test.describe('Testing Accesibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Test whole page', async ({ page }) => {
    const axeBuilder = await new AxeBuilder({ page }).analyze()
    expect(axeBuilder.violations).toEqual([])
  })

  test('Test Navbar', async ({ page }) => {
    await page.locator('nav').waitFor()

    const axeBuilder = await new AxeBuilder({ page }).include('nav').analyze()

    expect(axeBuilder.violations).toEqual([])
  })

  test('Test Header', async ({ page }) => {
    await page.locator('#home').waitFor()

    const axeBuilder = await new AxeBuilder({ page }).include('#home').analyze()

    expect(axeBuilder.violations).toEqual([])
  })

  test('Test Skills', async ({ page }) => {
    await page.locator('#skills').waitFor()

    const axeBuilder = await new AxeBuilder({ page })
      .include('#skills')
      .analyze()

    expect(axeBuilder.violations).toEqual([])
  })

  test('Test Projects', async ({ page }) => {
    await page.locator('#projects').waitFor()

    const axeBuilder = await new AxeBuilder({ page })
      .include('#projects')
      .analyze()

    expect(axeBuilder.violations).toEqual([])
  })

  test('Test Contact', async ({ page }) => {
    await page.locator('#contact').waitFor()

    const axeBuilder = await new AxeBuilder({ page })
      .include('#contact')
      .analyze()

    expect(axeBuilder.violations).toEqual([])
  })

  test('Test Footer', async ({ page }) => {
    await page.locator('footer').waitFor()

    const axeBuilder = await new AxeBuilder({ page })
      .include('footer')
      .analyze()

    expect(axeBuilder.violations).toEqual([])
  })

  test('Should not have any automatically detectable WCAG A or AA violations', async ({
    page
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
