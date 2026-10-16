class Registration{

    constructor (page){

        this.page = page
        this.button = page.locator(".register-button")
        this.maleradio = page.locator("#gender-male")
        this.femaleRadio = page.locator("#gender-female");
        this.fname = page.locator("#FirstName")
        this.lname = page.locator("#LastName")
        this.mail = page.locator(".single-line").nth(2)
        this.pass = page.locator("#Password")
        this.cpass = page.locator("#ConfirmPassword")
        this.submit = page.locator("#register-button")
    }

    async registration (gender,fname, lname, mail, pass, cpass){

        await this.button.click();
         if (gender === "Male") {
            await this.maleradio.check();
        } else {
            await this.femaleRadio.check();
        }
        await this.fname.fill(fname);
        await this.lname.fill(lname);
        await this.mail.fill(mail);
        await this.pass.fill(pass);
        await this.cpass.fill(cpass);
        await this.submit.click();
    }
}

module.exports = {Registration};