export default class SharedObjects {
	// locators
    fromLocationInput(){
        return cy.get('[data-cy="fromSelect"]');
    }

    toLocationInput(){
        return cy.get('[data-cy="toSelect"]');
    }

    // methods
    selectFromLocation(fromLocation){
        this.fromLocationInput().first().type(fromLocation);
        cy.wait(1000);
        this.fromLocationInput().first().type('{downarrow}{enter}');
    }

    selectToLocation(toLocation){
        this.toLocationInput().first().type(toLocation);
        cy.wait(1000);
        this.toLocationInput().first().type('{downarrow}{enter}');
    }

    verifyPageUrl(pageUrl){
        cy.location('pathname').should('equal', pageUrl);
    }

    verifyFromLocationValue(fromLocation){
        this.fromLocationInput().last().should('have.value', fromLocation);
    }

    verifyToLocationValue(toLocation){
        this.toLocationInput().last().should('have.value', toLocation);
    }

    verifyPageTitle(title){
        cy.contains(title).should('be.visible');
    }
}