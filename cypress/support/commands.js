
Cypress.Commands.add('Logintri', (url, username, password) => {
    const bUrl ='http://sampleapp.tricentis.com/101/index.php'
    cy.visit( bUrl)
    cy.wait(3000);
})
Cypress.Commands.add('nav_automobile', () => {
    cy.get('.main-navigation > .menu > :nth-child(1) > #nav_automobile').should('be.visible').click()
 });
Cypress.Commands.add('Marca',()=> {
    cy.get('#make').should('be.visible').select('BMW')
})
Cypress.Commands.add('performance', () => {
    cy.get('#engineperformance').should('be.visible').type('2.0');
 });
 Cypress.Commands.add('dateManufacturecalender', () => {
    cy.get('#opendateofmanufacturecalender > .fa').should('be.visible').type('01/01/2023')
 });
 Cypress.Commands.add('numberofseats', () => {
    cy.get('#numberofseats').select('5')
 });
 Cypress.Commands.add('fuel', () => {
    cy.get('#fuel').select('Gas');
 });
 Cypress.Commands.add('listprice', () => {
    cy.get('#listprice').should('be.visible')
 });
 Cypress.Commands.add('licenseplatenumber', () => {
    cy.get('#licenseplatenumber').should('be.visible')
 });
 Cypress.Commands.add('annualmileage', () => {
    cy.get('#annualmileage').should('be.visible')
 });
 Cypress.Commands.add('nextenter', () => {
    cy.get('#nextenterinsurantdata').should('be.visible').click()
 });
 //-----------------------------------------------------------//
 Cypress.Commands.add('firstname', () => {
    cy.get('#firstname').should('be.visible').type('Leonardo');
 });
 Cypress.Commands.add('lastname', () => {
    cy.get('#lastname').should('be.visible').type('Thales');
 });
 Cypress.Commands.add('birthdate', () => {
    cy.get('#birthdate').should('be.visible').type('04/27/1971');
 });
 Cypress.Commands.add('ideal_radio', () => {
    cy.get(':nth-child(4) > .group > :nth-child(1) > .ideal-radio').click();
 });
 Cypress.Commands.add('country', () => {
    cy.get('#country').select('Brazil')
 });
 Cypress.Commands.add('streetaddress', () => {
    cy.get('#streetaddress').should('be.visible').type('1ª Travessa Recreio')
 });
 Cypress.Commands.add('zipcode', () => {
    cy.get('#zipcode').should('be.visible').type('40490038')
 });
 Cypress.Commands.add('occupation', () => {
    cy.get('#occupation').select('Selfemployed');
 });
 Cypress.Commands.add('group', () => {
    cy.get('.group > :nth-child(5)').click();

 });
 Cypress.Commands.add('website', () => {
    cy.get('#website').type('teste.teste.org')
 });
 Cypress.Commands.add('nextenterproduct', () => {
    cy.get('#nextenterproductdata').should('be.visible').click()
 });
 Cypress.Commands.add('city', () => {
   cy.get('#city').type('Salvador');
 });
 //----------------------------------------//
 Cypress.Commands.add('startdate', () => {
    cy.get('#startdate').type('10/30/2050');
 });
 Cypress.Commands.add('insurancesum', () => {
    cy.get('#insurancesum').select('35.000.000,00');
 });
 Cypress.Commands.add('meritrating', () => {
    cy.get('#meritrating').select('Malus 17');
 });
 Cypress.Commands.add('damageinsurance', () => {
    cy.get('#damageinsurance').select('Full Coverage');
 });
 Cypress.Commands.add('Optional_Products', () => {
    cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1)').click();
 });
 Cypress.Commands.add('courtesycar', () => {
    cy.get('#courtesycar').select('Yes');
 });
 Cypress.Commands.add('nextselectpriceoption', () => {
    cy.get('#nextselectpriceoption').click();
 });
 //---------------------------------------------//
 Cypress.Commands.add('idealRadio', () => {
    cy.get(':nth-child(4) > .ideal-radio').click();
 });
 Cypress.Commands.add('nextsendquote', () => {
    cy.get('#nextsendquote').click();
 });
 //---------------------------------------------------//
 Cypress.Commands.add('email', () => {
    cy.get('#email').type('k13lopes@gmail.com');
 });
 Cypress.Commands.add('phone', () => {
    cy.get('#phone').type('5549997038979');
 });
 Cypress.Commands.add('username', () => {
    cy.get('#username').type('leonardo_dapaz');
 });
 Cypress.Commands.add('password', () => {
    cy.get('#password').type('8pBWzRapOa');
 });
 Cypress.Commands.add('confirmpassword', () => {
    cy.get('#confirmpassword').type('8pBWzRapOa');
 });
 Cypress.Commands.add('Comments', () => {
    cy.get('#Comments').type('teste automação');
 });
 Cypress.Commands.add('sendemail', () => {
    cy.get('#sendemail').should('be.visible').click().wait(10000);
 });
 Cypress.Commands.add('confirm', () => {
    cy.get('.confirm').click()
 
 })
 
 
 
 
 
 
 

