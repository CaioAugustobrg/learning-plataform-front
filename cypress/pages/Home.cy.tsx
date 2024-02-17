import Home from "../../src/pages/home/index"

describe('Home.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<Home />)
  })
})