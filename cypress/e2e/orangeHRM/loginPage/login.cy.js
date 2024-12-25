/// <reference types="cypress"/>
import loginPage from "../../../pom/orangeHRM/Login/login.cy";

describe('Login Feature',() => {
    it('User Login with Valid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text', 'Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');

        cy.intercept("GET","**/employees/action-summary").as("actionsummary");
        cy.intercept("GET","**/web/index.php/core/i18n/messages").as("actionmessages");
        cy.intercept("GET","**/web/index.php/api/v2/dashboard/shortcuts").as("actionshortcuts");
        cy.intercept("GET","**/web/index.php/api/v2/buzz/feed?limit=5&offset=0&sortOrder=DESC&sortField=share.createdAtUtc").as("actionbuzzfeed");
        cy.intercept("GET","**/web/index.php/api/v2/dashboard/employees/subunit").as("actionsubunit");
        cy.intercept("GET","**/web/index.php/api/v2/dashboard/employees/locations").as("actionlocations");
        cy.intercept("POST","**web/index.php/events/push").as("actionpush");

        loginPage.buttonLogin().click();
        cy.wait("@actionsummary").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
         });
        cy.wait("@actionmessages").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        cy.wait("@actionshortcuts").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
        cy.wait("@actionbuzzfeed").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
        cy.wait("@actionsubunit").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
        cy.wait("@actionlocations").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
        cy.wait("@actionpush").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
        //cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    });
        
    it('User Login with Invalid Username',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text', 'Login');
        loginPage.inputUsername().type('Admim');
        loginPage.inputPassword().type('admin123');
        cy.intercept("GET","**/web/index.php/core/i18n/messages").as("actionmessages");
        loginPage.buttonLogin().click();
        cy.wait("@actionmessages").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
     })

    it('User Login with Invalid Password',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text', 'Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin124');
        cy.intercept("GET","**/web/index.php/core/i18n/messages").as("actionmessages");
        loginPage.buttonLogin().click();
        cy.wait("@actionmessages").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
    })

    it('User Forgot Your Password',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text', 'Login');
        cy.intercept("GET","**/web/index.php/core/i18n/messages").as("actionmessages");
        loginPage.forgotPassword().click();
        loginPage.resetPassword().should('have.text','Reset Password');
        cy.wait("@actionmessages").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
    })

    it('User Reset Password with valid Username',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text', 'Login');
        cy.intercept("GET","**/web/index.php/core/i18n/messages").as("actionmessages");
        loginPage.forgotPassword().click();
        loginPage.resetPassword().should('have.text','Reset Password');
        loginPage.inputUsername().type('Admin');
        loginPage.buttonForgotPassword().click();
        loginPage.resetPasswordSuccess().should('have.text','Reset Password link sent successfully');
        cy.wait("@actionmessages").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
    })
    it('User Reset Password with Invalid Username',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text', 'Login');
        cy.intercept("GET","**/web/index.php/core/i18n/messages").as("actionmessages");
        loginPage.forgotPassword().click();
        loginPage.resetPassword().should('have.text','Reset Password');
        loginPage.inputUsername().type('Admim');
        loginPage.buttonForgotPassword().click();
        loginPage.resetPasswordSuccess().should('have.text','Reset Password link sent successfully');
        cy.wait("@actionmessages").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
    });

    it('User Access Linkedin OrangeHRM',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text', 'Login');
        loginPage.linkLinkedin().should('have.attr', 'href', 'https://www.linkedin.com/company/orangehrm/mycompany/').click();
    });

    it('User Access Facebook OrangeHRM',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text', 'Login');
        loginPage.linkFacebook().should('have.attr', 'href', 'https://www.facebook.com/OrangeHRM/').click();
    });

    it('User Access Twitter OrangeHRM',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text', 'Login');
        loginPage.linkTwitter().should('have.attr', 'href', 'https://twitter.com/orangehrm?lang=en').click();
    });

    it('User Access Youtube OrangeHRM',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text', 'Login');
        loginPage.linkYoutube().should('have.attr', 'href', 'https://www.youtube.com/c/OrangeHRMInc').click();
    });

    it('User Access Website OrangeHRM',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text', 'Login');
        loginPage.webOrangehrm().should('have.attr', 'href', 'http://www.orangehrm.com').click();
    });
});
