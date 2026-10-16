import{test, expect} from "@playwright/test";
const { Registration } = require("../pages/Registration");
const { LoginPage } = require("../pages/LoginPageS");
const { addtocart } = require("../pages/Addtocart");



test("registratio", async({page}) => {
    const registrationpage = new Registration(page);  
    const registration =[
        {
            gender: 'female',
            fname: 'shruti',
            lname: 'garg',
            mail: 'shrutigarg933@gmail.com',
            pass: 'Xolo@700',
            cpass: 'Xolo@700',
        },
        {
            gender: 'male',
            fname: 'akshay',
            lname: 'garg',
            mail: 'akshyagarg6@gmail.com',
            pass: 'Xolo@700',
            cpass: 'Xolo@700',
        }
    ]
    for (const regestr of registration ){
await page.goto("https://demowebshop.tricentis.com/login?ReturnUrl=%2fcustomer%2forders")
await registrationpage.registration(regestr.gender,regestr.fname, regestr.lname, regestr.mail, regestr.pass, regestr.cpass );
    }
});
test("login", async({page}) => {
    const newlogin = new LoginPage(page);
    const users =[ 
    {
        mail : 'akshyagarg6@gmail.com',
        pass : 'Xolo@700'
    },
    {
        mail : 'shrutigarg933@gmail.com',
        pass : 'Xolo@700'
    }
]
for(const user of users){
    await page.goto("https://demowebshop.tricentis.com/login?ReturnUrl=%2fcustomer%2forders")
    
    await newlogin.login(user.mail, user.pass);

}
    
});

test("addtocart", async({page}) => {
const newlogin = new LoginPage(page);
 const shoping = new addtocart(page)
 await page.goto("https://demowebshop.tricentis.com/login?ReturnUrl=%2fcustomer%2forders")
   await newlogin.login( "akshyagarg6@gmail.com", "Xolo@700" );
 await shoping.addcart ()
});