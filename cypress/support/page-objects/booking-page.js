export default class BookingPage {
	// locators
    contactEmailInput(){
        return cy.get('#lead-passenger-email');
    }

    saveButton(){
        return cy.get('[data-cy="saveAndContinue"]');
    }
    
    // methods
    submitContactEmail(email){
        this.contactEmailInput().type(email);
        this.saveButton().click();
    }
}