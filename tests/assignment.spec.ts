import { test, expect } from '@playwright/test';


test('Navigate to books store application', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  //Navigate to Books Store Application
  await page.locator('a[href="/books"]')
            .locator('.card')
            .locator('.card-body')
            .filter({hasText: "Book Store Application"})
            .click();

  //Login using the newly created user.
  //Username - saksam0808, Password - S@ksam2025
  await page.getByRole('button', {name: "Login"}).click();

  const username = 'saksam0808';
  const password = 'S@ksam2025';
  await page.getByPlaceholder('UserName').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.locator('#login').click();

  // Upon successful login, Validate username and logout button.
  const usernameVisible = await page.locator('userName-value').textContent();
  expect(usernameVisible).toEqual(username);

  
  
});




// Click on bookstore button
// Search "Learning JavaScript Design Patterns"
// Validate the search result to contain this book.
// Print Title, Author and Publisher into a file.
// Click on log out
