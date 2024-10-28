const { Builder, By, Key, until} = require('selenium-webdriver');
const { expect } = require('chai');

describe('Ui Testing Using selenium', function() {
    this.timeout(30000);

    let driver;


    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    
    });

    after(async function() {
        await driver.quit();
    });

    it('should load the login page', async function() {
        await driver.get("D:/KULIAH/Semester 5/Praktikum/New folder/PPMPL-4/login.html");


        const title = await driver.getTitle();
        expect(title).to.equal('Login Page');
    });

    it('should input username and password', async function() {
        await driver.findElement(By.id('username')).sendKeys('testuser');
        await driver.findElement(By.id('password')).sendKeys('password123');
        const usernameValue = await driver.findElement(By.id('username')).getAttribute('value');
        const passwordValue = await driver.findElement(By.id('password')).getAttribute('value');
        expect(usernameValue).to.equal('testuser');
        expect(passwordValue).to.equal('password123');
        });

        it('should click the login button', async function() {
            await driver.findElement(By.id('loginButton')).click();
        });
        
    });

