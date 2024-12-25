 export default class loginPage{
    static textLogin(){
        return cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]');
    }

    static inputUsername(){
        return cy.get('[name="username"]');
    }
    
    static inputPassword(){
        return cy.get('[name="password"]');
    }

    static buttonLogin(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');
    }

    static menuDashboard(){
        return cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]');
    }

    static forgotPassword(){
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    }

    static resetPassword(){
        return cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
    }

    static buttonForgotPassword(){
        return cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset');
    }

    static resetPasswordSuccess(){
        return cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
    }

    static linkLinkedin(){
        return cy.get('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]');
    }

    static linkFacebook(){
        return cy.get('a[href="https://www.facebook.com/OrangeHRM/"]');
    }

    static linkTwitter(){
        return cy.get('a[href="https://twitter.com/orangehrm?lang=en"]');
    }

    static linkYoutube(){
        return cy.get('a[href="https://www.youtube.com/c/OrangeHRMInc"]');
    }

    static webOrangehrm(){
        return cy.get('a[href="http://www.orangehrm.com"]');
    }
}