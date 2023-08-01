export default class HomePage {
    
    // Locators
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

    // Methods
    selectDepartureDate(){
        this.departureDatePicker().first().click().wait(500);
        this.datePickerArrow().click();
        this.datePickerValue().click();
    }

    clickSearchButton(){
        this.searchButton().first().click();
    }
}