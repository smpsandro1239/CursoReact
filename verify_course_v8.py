import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("http://localhost:5173")

        # Click on Aula 1
        await page.click("text=Aula 1:")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="/home/jules/verification/lesson_page.png")

        # Check if navigation buttons exist
        next_button = await page.query_selector("text=Próxima Aula")
        print(f"Next button exists: {next_button is not None}")

        # Toggle dark mode
        await page.click("button >> .lucide-moon, button >> .lucide-sun")
        await page.wait_for_timeout(500)
        await page.screenshot(path="/home/jules/verification/lesson_dark.png")

        # Check if 'dark' class is on html
        is_dark = await page.evaluate("document.documentElement.classList.contains('dark')")
        print(f"Is dark mode active? {is_dark}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
