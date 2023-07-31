export default class ConfiguratorPage {
	// locators
    bookTripButton(){
        return cy.get('[data-cy="bookTrip"]');
    }

    confirmButton(){
        return cy.get('[data-cy="confirm"]');
    }

    // methods
    bookYourTrip(price){
        this.bookTripButton().last().contains(`Book your trip for ${price}`);
        this.bookTripButton().last().click();
    }

    bookWithoutSights(){
        this.confirmButton().click();
    }
}