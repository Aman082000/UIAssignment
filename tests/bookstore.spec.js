import { test, expect } from '@playwright/test';
import fs from 'fs';


test('Navigate to books store application', async ({ page }) => {
  const USERNAME = 'saksam0808';
  const PASSWORD = 'S@ksam2025';
  const BOOK_NAME = 'Learning JavaScript Design Patterns';

  await page.goto('https://demoqa.com/');

  //Navigate to Books Store Application
  await page.locator('.card').filter({hasText: "Book Store Application"}).click();

  //Login using the newly created user.
  //Username - saksam0808, Password - S@ksam2025
  await page.getByRole('button', {name: "Login"}).click();

  await page.getByPlaceholder('UserName').fill(USERNAME);
  await page.getByPlaceholder('Password').fill(PASSWORD);
  await page.locator('#login').click();

  // Upon successful login, Validate username and logout button.
  await expect(page.locator('#userName-value')).toHaveText(USERNAME);
  await expect(page.getByRole('button', {name: "Logout"})).toBeVisible();

  //Click on bookstore button
  await page.locator('#item-2 a[href="/books"]').filter({hasText: "Book Store"})
            .click({ force: true });

  // Search "Learning JavaScript Design Patterns"
  const searchBox = await page.getByPlaceholder('Type to search');

  await searchBox.fill(BOOK_NAME);
  
  const filledInputText = await searchBox.inputValue();
  expect(filledInputText).toEqual(BOOK_NAME);

  // Validate the search result to contain this book.
  const searchResultVisible = await page.getByRole('link',{name: 'Learning JavaScript Design Patterns'}).isVisible();
  await expect(searchResultVisible).toBeTruthy();
  await expect(page.locator('td', {hasText: "Addy Osmani"})).toBeVisible();
  await expect(page.getByText("O'Reilly Media")).toBeVisible();

  // Print Title, Author and Publisher into a file.
  const row = page.locator('tr').nth(1).locator('td');

  const title = await row.nth(1).innerText();
  const author = await row.nth(2).innerText();
  const publisher = await row.nth(3).innerText();
  console.log(`${title} ${author} ${publisher}`);

  const data = `Title: ${title}
  Author: ${author}
  Publisher: ${publisher}`

  fs.writeFileSync('searchResult.txt', data);
  console.log('Data written to searchResult.txt');
  
  // Click on log out
  await page.getByRole('button', {name: "Log out"}).click();

});








