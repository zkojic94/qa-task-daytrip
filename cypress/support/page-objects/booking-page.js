export default class BookingPage {
    
    // Locators
    contactEmailInput(){
        return cy.get('#lead-passenger-email');
    }

    saveButton(){
        return cy.get('[data-cy="saveAndContinue"]');
    }
    
    // Methods
    submitContactEmail(email){
        this.contactEmailInput().type(email);
        this.saveButton().click();
    }
}