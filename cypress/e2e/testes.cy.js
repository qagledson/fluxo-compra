/// <reference types="cypress"/>
import dados_formulario from '../factories/dados_formulario';
import CarrinhoPage from '../pages/CarrinhoPage.cy';
import HomePage from '../pages/HomePage.cy';
import ProdutoPage from '../pages/ProdutoPage.cy';
import '../support/index'


describe('Funcionalidade - Adicionar itens ao carrinho e finalizar a compra', () => {
    const homePage = new HomePage
    const produtoPage = new ProdutoPage
    const carrinhoPage = new CarrinhoPage
    
    Cypress.on('window:alert', () => true);
    Cypress.on('window:confirm', () => true);
    
//Hooks beforeEach - é executado antes de cada teste
    beforeEach(() => {
        cy.visit('https://otel-demo.field-eng.grafana.net/')
        // cy.viewport('max')
    });

     //Hooks beforeEach - é executado antes de cada teste
     afterEach(() => {
        cy.screenshot()
    });

    it('O site deve estar online para acesso', () => {
        cy.title().should('eq', 'OTel demo') 
    });


    it('Deve acessar a página de produtos', () => {
        homePage.accessarProdutos()
        cy.contains('h1', 'Hot Products').should('be.visible') //validando se a descrição da página de produtos está visível
    });

    it('Adicionar itens ao carrinho', () => {
        homePage.accessarProdutos()
        cy.contains('h1', 'Hot Products').should('be.visible') //validando se a descrição da página de produtos está visível

        //Selecionando a moeda para pagamento desejada
        homePage.selecionarMoeda()
        //Selecionando 3 produtos diferentes
        produtoPage.adicionarProdutos()

        //Validando os produtos adicionados
        cy.contains('h1', "Shopping Cart").should('be.visible')
        cy.contains('p', "National Park Foundation Explorascope").should('be.visible')
        cy.contains('p', "Starsense Explorer Refractor Telescope").should('be.visible')
        cy.contains('p', "Roof Binoculars").should('be.visible')
    });

    it('Adicionar quantidades diferentes de cada item', () => {
        homePage.accessarProdutos()
        cy.contains('h1', 'Hot Products').should('be.visible') //validando se a descrição da página de produtos está visível

        //Selecionando a moeda para pagamento desejada
        homePage.selecionarMoeda()
        //Selecionando 3 produtos diferentes
        produtoPage.adicionarProdutosQuantidadesDiferentes()

        //Validando os produtos adicionados
        cy.contains('h1', "Shopping Cart").should('be.visible')
        cy.contains('p', "Solar System Color Imager").should('be.visible')
        cy.contains('p', "3").should('be.visible')

        cy.contains('p', "Starsense Explorer Refractor Telescope").should('be.visible')
        cy.contains('p', "Starsense Explorer Refractor Telescope").should('be.visible')
        cy.contains('p', "5").should('be.visible')

        cy.contains('p', "Roof Binoculars").should('be.visible')
        cy.contains('p', "Roof Binoculars").should('be.visible')
        cy.contains('p', "7").should('be.visible')
    });

    it('Adicionar item ao carrinho e alterar a moeda', () => {
        homePage.accessarProdutos()
        produtoPage.adicionarUmProduto()
        carrinhoPage.alterarMoeda()
    });

    it('Finalizar a compra', () => {
        homePage.accessarProdutos()
        produtoPage.adicionarUmProduto()
        carrinhoPage.preencherFormulario()
        cy.wait(1000);
        carrinhoPage.confirmarPedido()
        cy.wait(1000);
        //Validando mensagem de sucesso
        cy.contains('Your order is complete!').should('be.visible')
    });

    it('Tentar finalizar a compra com carrinho vazio', () => {
        homePage.acessarCarrinho()
        cy.contains('h1', 'Your shopping cart is empty!').should('be.visible')
    });

    it('Tentar finalizar a compra sem informar o e-mail no formulário', () => {
        homePage.accessarProdutos()
        produtoPage.adicionarUmProduto()
        carrinhoPage.formularioEmailVazio()
        carrinhoPage.confirmarPedido()
        
        //Validando mensagem de erro enviada pelo popover
        cy.get('input[name="email"]').invoke('prop', 'validationMessage').should((text)=>{
            expect('Preencha este campo.') })   
    });
   
});