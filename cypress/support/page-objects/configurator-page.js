export default class ConfiguratorPage {
    
    // Locators
    bookTripButton(){
        return cy.get('[data-cy="bookTrip"]');
    }

    confirmButton(){
        return cy.get('[data-cy="confirm"]');
    }

    // Methods
    bookYourTrip(price){
        this.bookTripButton().last().contains(`Book your trip for ${price}`);
        this.bookTripButton().last().click();
    }

    bookWithoutSights(){
        this.confirmButton().click();
    }
}