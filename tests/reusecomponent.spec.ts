import {test,expect,Page,Response} from '@playwright/test';

 test.use({
        storageState: 'auth/auth.json'
    });

test('Reuse Component',async ({page})=>
{
    await page.goto('https://macktesting.solverminds.net/main');
    console.log("Login successful");
    page.close();
    
}); 

test('Approver Component',async ({page})=>
{
    await page.goto('https://macktesting.solverminds.net/main');
    console.log("Login successful");
});