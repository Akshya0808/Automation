
const { Registration } = require("./Registration");
const { LoginPage } = require("./LoginPageS");
const { addtocart } = require("./Addtocart");

class PageManager {
    constructor(page) {
        this.registration = new Registration(page);
        this.login = new LoginPage(page);
        this.cart = new addtocart(page);
    }
}

module.exports = { PageManager };
