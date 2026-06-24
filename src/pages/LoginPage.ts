import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    //private locators
    
    private readonly emailID : Locator;
    private readonly passWord : Locator;
    private readonly loginButton : Locator;
    private readonly forgotPwdLink : Locator;
    private readonly loginLogo : Locator;
    private readonly loginErrorMessage: Locator;


    //locators initilization through customer

    constructor(page:Page){
        super(page);
        this.emailID = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.passWord = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.forgotPwdLink = page.getByRole('link', { name: 'Forgotten Password' }).first();
        this.loginLogo = page.getByAltText('naveenopencart');
        this.loginErrorMessage = page.locator('.alert.alert-danger.alert-dismissible');
    }

    //Public behaviours/actions to be defined

    async gotoLoginPage(){
        await this.page.goto('opencart/index.php?route=account/login');
    }

    async loginpageTitle(): Promise<string>{
        return this.page.title()
    }

    async doLogin(username:string, passWord:string){
        await this.emailID.fill(username);
        await this.passWord.fill(passWord);
        await this.loginButton.click();
    }

    async loginpageLogoExist():Promise<Boolean>{
        return await this.loginLogo.isVisible();
    }

    async forgotpwdlinkExist():Promise<Boolean>{
        return await this.forgotPwdLink.isVisible();
    }  
    
    async isInvalidLoginErrorDisplayed(): Promise<boolean> {
        return await this.loginErrorMessage.isVisible();
    }









} 