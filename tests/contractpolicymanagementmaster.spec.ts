const {test,expect,chromium}=require('@playwright/test');
import { loginpage } from '../e2e/Pages/Loginpage';
import { newbutton } from '../e2e/Pages/Loginpage';
const path = require('path');
test('contractpolicy',async({page})=>{

  
//await page1.goto ('https://macktesting.solverminds.net/main');
//async means not depend to previous one(parallel execution)
//async = make a function written a promise
//await= make the function wait for a promise
// const pagetitle=page.title();
// console.log('page title is:',pagetitle);
// await expect(page).toHaveTitle('Corporate Page')
// const pageURL=page.url();
// console.log('page URL  is:',pageURL);
// await expect(page).toHaveURL('https://macktesting.solverminds.net/main')
/*await page.locator("//*[@id='NFR_LoginForm-nfr_login_authname']").fill('HKKHA01');

await page.locator("//*[@id='NFR_LoginForm-nfr_login_authid']").fill('P@ssAug23')
await page.click("//*[@id='NFR_LoginForm-nfr_login_btnlogin']")*/

const login= new loginpage(page);
await page.goto('https://testkmsm.konectsvm.com/main')
await login.login(page,'username','password');
//await page.waitForSelector("//*[@id='nfr_main_body']")

//await  page.click("//span[@class='Acknowledge_btn']")

await page.waitForSelector("//*[@id='NFR_megamenu-nfr_topbar_autocomp1_input']")
const modulesearch=page.locator("//*[@id='NFR_megamenu-nfr_topbar_autocomp1_input']").fill("contract policy management");

await page.waitForTimeout(3000);


const context = page.context();
await page.keyboard.press('Backspace');
const [newPage] = await Promise.all([
  context.waitForEvent('page'), // wait for new tab
  
  page.click("[data-item-label='Contract Policy Management Master']")
]);
//await page.waitForTimeout(15000);
test.setTimeout(60000);


await newPage.waitForLoadState('networkidle');

// Assertion
await expect(newPage).toHaveTitle('Contract Policy Management');

test.setTimeout(60000);

//await page.click("//button[@type='button'][contains(text(),'New')]");
const newBtn = newPage.getByRole('button', { name: 'New' });

//await expect(newBtn).toBeVisible({ timeout: 60000 });
await newBtn.click();
//const newButton = await page.locator("//button[contains(text(),'New')]");

//await login.login(page,'PolicyInput');

test.setTimeout(60000);
//await policyInput.waitFor({ state: 'visible', timeout: 60000 });
//await policyInput.click();

const Policyinput=await newPage.locator("//mat-label[contains(text(),'Policy Document Name')]/ancestor::mat-form-field//input").fill("POL98944");



const Remarks= await newPage.locator("//textarea[@id='mat-input-1']").fill('Reviewed');



const filePath = path.resolve('tests/uploadfiles/Screenshots.png');

  // Upload file
  //await newPage.setInputFiles('input[type="file"]', filePath);
await newPage.locator('input[type="file"]')
             .setInputFiles(filePath);
  // Click Save
  await newPage.getByRole('button', { name: 'Save' }).click();

  // Validation (optional)
  await expect(newPage.locator('text=successfully')).toBeVisible();

}
);





//const newbutton=page.locator("(//div[@class='wrapper ng-star-inserted'])[1]").click();
//await page.locator("//div[@class='toolbar_wrapper push_right']").click();


