import { test,expect, Locator } from "playwright/test";
test("login",async({page})=>{
    await page.goto('https://macktesting.solverminds.net/main');
    await expect(page).toHaveTitle(/SHORE/);

    const Username : Locator = page.locator('#NFR_LoginForm-nfr_login_authname');
    await Username.fill('hkkha01');
    let EnteredUsername  = await Username.inputValue();
    console.log("Enterusername : ",EnteredUsername);
    expect(EnteredUsername).toBe('hkkha01');

    let Password : Locator = page.locator('#NFR_LoginForm-nfr_login_authid');
    await Password.fill('P@ssAug23');
    let EnterPassword  = await Password.inputValue();
    console.log("EnterPassword : ",EnterPassword);
    expect(EnterPassword).toBe('P@ssAug23');

    await page.locator('#NFR_LoginForm-nfr_login_btnlogin').click();

    await page.waitForTimeout(5000);


});