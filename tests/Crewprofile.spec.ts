
const { test, expect, chromium } =require( '@playwright/test');
import { assert } from "console";
import { loginpage } from "../e2e/Pages/Loginpage";
test('Crewprofile',async({page})=>{


    const login= new loginpage(page);
    await page.goto('https://testkmsm.konectsvm.com/main');

 await login.login(page,'Username','password')

await page.waitForSelector("//*[@id='NFR_megamenu-nfr_topbar_autocomp1_input']")
const modulesearch=page.locator("//*[@id='NFR_megamenu-nfr_topbar_autocomp1_input']").fill("crew profile");

await page.waitForTimeout(3000);

const context = page.context();
await page.keyboard.press('Backspace');
const [newPage] = await Promise.all([
  context.waitForEvent('page'), // wait for new tab
  
  page.click("//li[@data-item-label='Crew Profile ']")
]);
//await page.waitForTimeout(15000);
test.setTimeout(60000);
await newPage.waitForLoadState('networkidle');


//await page.locator("//div[@id='dashboard']")
          //.waitFor({ state: 'visible' });

// Assertion
//await expect(newPage).toHaveTitle('dashboard');

test.setTimeout(60000);

//await page.click("//button[@type='button'][contains(text(),'New')]");




const crewdetailssuboption=await newPage.click("//div[@title='Crew Details']");


const newBtn = newPage.getByRole('button', { name: 'New' });
newBtn.click();
//const newbutton= await page.click("(//*[contains(text(),'New')])[1]");


const profiledetailsH= await page.locator("//*[contains(text(),'Profile Details')]")

 const Firstname=await newPage.locator("//input[@data-placeholder='First Name']");
 await expect(Firstname).toBeVisible();
await Firstname.click();
await Firstname.fill('vijay');
const Middlename=await newPage.locator("//input[@data-placeholder='Middle Name']").fill('v');
const Lastname=await newPage.locator("//input[@data-placeholder='Last Name']").fill('Surya');
const Dateofbirth=await newPage.locator("//input[@data-placeholder='DD/MM/yyyy']").fill('23092000');

const Placeofbirth=await newPage.locator("//input[@data-placeholder='Place of Birth']").fill('Chennai');
const countryofbirth=await newPage.locator("//input[@data-placeholder='Country of Birth']").click();
const countryofbirthfilter=await newPage.locator("(//input[@class='inputValue bottom-border'])[1]").fill('india');
const cobfilter=await newPage.locator("(//span[contains(text(),'India')])[2]").click();

const Nationality=await newPage.locator("(//input[@class='inputValue bottom-border'])[2]").fill('indian');
const cobNationality=await newPage.locator("(//span[contains(text(),'India')])[3]").click();

const Rank=await newPage.locator("(//input[@class='inputValue bottom-border'])[3]").fill('Master');
const cobRank=await newPage.locator("//span[contains(text(),'MASTER')]").click();

const OKBTN = await newPage.locator("//span[contains(text(),'OK')][@class='txt']").click();



const createbutton = await newPage.locator("//button[@type='submit']").click();
await page.pause();
test.setTimeout(30000);
const successMessage = await newPage.getByText('Crew member created successfully');
const errorMessage = await newPage.getByText('System error. Please contact your system administrator');

if (await successMessage.isVisible()) {
    await expect(successMessage).toBeVisible();
    console.log('Crew created successfully');
} else if (await errorMessage.isVisible()) {
    await expect(errorMessage).toBeVisible();
    console.log('System error displayed');
}

const viewbutton=await newPage.click("(//img[@alt='view'][@class='cursor-pointer'])[1]");
})
