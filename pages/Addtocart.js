class addtocart{
    constructor(page){
        this.page = page
        this.book = page.getByRole("link", {name:"Books"})
        this.add  = page.getByRole("button", {name:"Add to cart"}).nth(0)
        //this.ass  = expect(page.locator(".cart-qty"))
        this.cartq = page.locator(".cart-qty");
        this.cart = page.locator(".cart-label").nth(0)
        this.term = page.locator("#termsofservice").check();
        this.check = page.getByRole("button", {name:"checkout"})
 }
        async addcart(){
            await this.book.click();
            await this.add.click();
            await expect(this.cartq).toHaveText("(31)");
            await this.cart.click();
            await this.term.check();
            await this.check.click();
        }
        
  
}
module.exports = {addtocart};



