import Login from "../../src/pages/Login"
describe('header.cy.tsx', () => {
  it('playground', () => {
    cy.viewport('iphone-6')
    cy.mount(<Login />)
  })
})