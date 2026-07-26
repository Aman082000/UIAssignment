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
  const usernameVisible = await page.locator('#userName-value').textContent();
  expect(usernameVisible).toEqual(username);

  const logoutButtonVisible = await page.getByRole('button', {name: "Logout"}).isVisible();
  expect(logoutButtonVisible).toBeTruthy()

  //Click on bookstore button
  await page.locator('#item-2 a[href="/books"]').filter({hasText: "Book Store"}).click({ force: true });

  // Search "Learning JavaScript Design Patterns"
  const bookToSearch = 'Learning JavaScript Design Patterns';
  await page.getByPlaceholder('Type to search').fill(bookToSearch);

  const filledInputText = await page.getByPlaceholder('Type to search').inputValue();
  expect(filledInputText).toEqual(bookToSearch);

  // Validate the search result to contain this book.
  const searchResultVisible = await page.getByRole('link',{name: 'Learning JavaScript Design Patterns'}).isVisible();
  expect(searchResultVisible).toBeTruthy();
  await expect(page.locator('td', {hasText: "Addy Osmani"})).toBeVisible();
  await expect(page.getByText("O'Reilly Media")).toBeVisible();

  // Print Title, Author and Publisher into a file.
  const resultRow = await page.locator('tr').nth(0).innerText();
  console.log(resultRow);

  
  // Click on log out


});








