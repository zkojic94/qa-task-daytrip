export default class HomePage {
	// locators
    departureDatePicker(){
        return cy.get('[data-cy="departureDate"]');
    }

    datePickerArrow() {
        return cy.get('button[direction="1"]');
    }

    datePickerValue(){
        return cy.get('[data-cy="1"]');
    }

    searchButton(){
        return cy.get('[data-cy="book-button"]');
    }

    // methods
    selectDepartureDate(){
        this.departureDatePicker().first().click();
        cy.wait(500);
        this.datePickerArrow().click();
        this.datePickerValue().click();
    }

    clickSearchButton(){
        this.searchButton().first().click();
    }
}