class LoginPage{

    constructor (page){
        this.page = page
        this.mail = page.locator("#Email")
        this.pass = page.locator("#Password")
        this.remember = page.locator("#RememberMe")
        this.button = page.locator(".login-button")
    }
    async login (mail, pass, ){
        await this.mail.fill(mail);
        await this.pass.fill(pass);
        await this.remember.click()
        await this.button.click();

    }
}
module.exports = {LoginPage};