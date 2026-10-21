
import { test, expect } from '@playwright/test';
import { ExcelReader } from '../utilities/ExcelReader';

let data: any[];
let LastName:any,FirstName:any,CotrolType:any,Username:any,Email:any,RankName:any,DOB,DOJ,UserType,CountryName:any,Password:any;


test.beforeAll('Read Excel Data', async () => {

    data = ExcelReader.readExcel('KMSMHF');

    //console.log(data);

    console.log(data[0].Usercode);
    console.log(data[0].Password);
    
    Username = data[0].Usercode;
    Password = data[0].Password;
    FirstName = data[0].FirstName;
    LastName = data[0].FirstName;
    CotrolType = data[0].LastName;
    Email = data[0].Gmail;
    RankName = data[0].RankName;
    UserType = data[0].UserType;
    CountryName = data[0].CountryCode;
});

test('login',async({page})=>
    {
        await page.goto('https://uatiino.macksvm.com/main');
  
  await page.getByRole('textbox', { name: 'User ID' }).fill('svmadmin');
  await page.getByRole('textbox', { name: 'User ID' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('$vMAdmin@2023');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('#NFR_megamenu-nfr_topbar_autocomp1_input')).toBeVisible();
  await page.waitForTimeout(3000);
  await expect(page.locator("//div[contains(@class,'block')]//i")).toBeHidden();
  await page.locator('#NFR_megamenu-nfr_topbar_autocomp1_input').pressSequentially('User detail', {
    delay: 100, // 100 ms between keystrokes
  });
  await expect(page.locator('span').filter({ hasText: /^User Detail$/ }).first()).toBeVisible();
  await page.locator('span').filter({ hasText: /^User Detail$/ }).first().click();
  await expect(page.getByRole('link', { name: 'New' })).toBeVisible();

    });

test('test', async ({ page }) => {
  
  await page.getByRole('link', { name: 'New' }).click();
  await page.locator('td').filter({ hasText: 'Office' }).click();
 
  await page.locator('#USD-USD_txtEmpCode').fill(Username);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(4000);
  await expect(page.locator("//div[contains(@class,'block')]//i")).toBeHidden();
  await page.locator('#USD-USD_txtPassword').fill(Password);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(4000);
  await expect(page.locator("//div[contains(@class,'block')]//i")).toBeHidden();
  await page.locator('#USD-USD_txtConfirmPassword').fill(Password);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(4000);
  await expect(page.locator("//div[contains(@class,'block')]//i")).toBeHidden();
  await page.locator('#USD-USD_txtGivenName').fill(FirstName);
  await page.locator('#USD-USD_txtSurName').click();
  await page.locator('#USD-USD_txtSurName').fill(LastName);
  await page.locator('#USD-USD_DateofJoining_input').click();
  await page.getByRole('link', { name: '14' }).click();
  await page.waitForTimeout(4000);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(4000);
  /*await page.evaluate(() => {
    document.body.style.zoom = '80%';
  });*/
  //page.mouse.down();
  const emailfield = page.locator('#USD-USD_Email');

await emailfield.waitFor({
  state: 'attached',
  timeout: 60000
});

  await expect(emailfield).toBeVisible();
  emailfield.fill(Email);
  //await page.locator('#USD-USD_Email').fill('james@gmail.com');
  await page.waitForTimeout(4000);
  await emailfield.press('Tab');
 
  //await page.keyboard.press('Tab');
  //await page.locator('#USD-USD_DateofBirth_input').click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.locator("//div[@id='USD-USD_UserType']//span[contains(@class,'triangle')]").click();
  await page.locator('#USD-USD_UserType_panel').getByText('User', { exact: true }).click();

  await page.locator('#USD-USD_btnrankdetail-USD_btnrankdetail').click();
  
  await page.getByRole('textbox', { name: 'Rank Name Filter Input' }).fill(RankName);
  await page.getByRole('gridcell', { name: RankName, exact: true }).dblclick();
  //
  await page.locator('#USD-USD_btnport-USD_btnport').click();
  await expect(page.getByRole('textbox', { name: 'Country Name Filter Input' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Country Name Filter Input' }).fill(CountryName);
  await page.getByRole('gridcell', { name: CountryName, exact: true }).dblclick();
  await page.waitForTimeout(6000);
  //await page.locator('#USD-USD_UserLocation').fill('India');
  await page.locator('#USD-USD_btnDepartAdd').click();
  await page.locator("(//label[text()='Search Department']//following::div[@col-id='C0'])[2]//div[@ref='eWrapper']").click();
  await page.locator("(//button[@id='multicol_okbtn']//span)[1]").click();
  await page.waitForTimeout(6000);
  await expect(page.locator("//div[contains(@class,'block')]//i")).toBeHidden();
  //await page.getByRole('button', { name: '✔Ok' }).click();
  await page.locator('#USD-USD_UserLocation').fill(CountryName);
  await expect(page.locator('#USD-USD_btnrankdetail-USD_btnrankdetail')).toBeVisible();
  await expect(page.getByRole('button', { name: ' Save' })).toBeVisible();

});