import { test, expect, Page } from '@playwright/test';
import dotenv from 'dotenv';
import * as path from 'path';

//import fs from 'fs';
//const data = JSON.parse(fs.readFileSync('./testData/testData.json', 'utf-8'));

// Read from ".env" file.
//dotenv.config({ path: path.resolve(__dirname, '.env') });


dotenv.config();
let Password=process.env.PASSWORD;
let username=process.env.USER_NAME;
console.log("Username",username);
console.log("password",Password);
console.log("Username env",process.env.USER_NAME);
console.log("password env",process.env.PASSWORD);

// Alternatively, read from "../my.env" file.
//dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

//test.beforeAll("Before test", ({ page }) => {
test.fixme('test', async ({ page }) => {
    await page.goto('https://macktesting.solverminds.net/main');
    let username = await page.getByRole('textbox', { name: 'User ID' }).fill(process.env.USER_NAME as string);
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD as string);
    page.screenshot({ path: `Screenshot/login_${Date.now()}.png`, fullPage: true });
    await page.getByRole('button', { name: 'LOGIN', exact: true }).click();
    //await page.goto('https://macktesting.solverminds.net/main');
    await expect.soft(page.locator('#NFR_megamenu-nfr_topbar_autocomp1_input')).toBeVisible();
    await page.locator('#NFR_megamenu-nfr_topbar_autocomp1_input').fill('Requisition');
    await page.getByRole('link', { name: ' Procurement' }).click();
    page.screenshot({ path: 'Screenshot/Req.png', fullPage: true });
    page.screenshot({path:`Login_${Date.now()}.png`});
    let hi = "hello";
    console.log(`String ${hi}`);

    await page.context().storageState({
        path: 'auth/auth.json'
    });
    console.log("Authentication Saved Successfully");

});
//});

function reverse(str: string): String {
    return str.split('').reverse().join('');

}

console.log(reverse("Automation"));

function UsingForloop(Str: string): string {
    let str = "";
    for (let i = Str.length - 1; i >= 0; i--) {
        str = str + Str[i];
        
    }
    return str;
}

console.log(UsingForloop('Automation'));

function duplicates() {
    let arr = [1, 2, 44, 5, 6, 6, 7, 7];
    let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
    console.log("duplicates : ", duplicates);

}

function duplicate()
{
    let arr = [1,4,6,7,4,7,8]
    let set = new Set<number>();
    for(let ch of arr)
    {
        if(!set.add(ch))
        {
            console.log(ch)
        }
        
    }
}

function vowels(): void {
        let Str = "Automation";
        let res : string[]=[];
        let count =0;
        for(let ch of Str.toLowerCase())
        {
            if('aeiou'.includes(ch))
            {
                res.push(ch);
                count++;
            }
        }
        console.log(res);
        console.log("Voweles count : ",count);
    }



vowels();

duplicates();