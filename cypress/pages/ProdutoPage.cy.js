import HomePage from '../pages/HomePage.cy';

class ProdutoPage {
    accessarProdutos() {
        cy.contains('button', "Go Shopping").should('be.visible')
        cy.contains('button', "Go Shopping").click()
    }

    validarPaginaHome(){
        cy.contains('img', "/images/opentelemetry-demo-logo.png").should('be.visible')
    }

    adicionarProdutos(){
        const homePage = new HomePage
        //Selecionando a moeda USD
        cy.get('select[name="currency_code"]').should('be.visible').select('USD');

        //Adicionando o primeiro produto com 7 itens
        cy.contains('p', 'National Park Foundation Explorascope').click()
        cy.contains('h5', 'National Park Foundation Explorascope').should('be.visible') //validando se a descrição do produto está visível
        
        cy.get('select[data-cy="product-quantity"]').select("7");
        cy.contains('button', 'Add To Cart').click()
        cy.wait(1000);

        // Retornando para a página de produtos
        cy.contains('button', 'Continue Shopping').click()
        homePage.accessarProdutos()
        
        //Selecionando a moeda EUR
        cy.get('select[name="currency_code"]').should('be.visible').select('EUR');

        //Adicionando o segundo produto com 5 itens
        cy.contains('p', 'Starsense Explorer Refractor Telescope').click()
        cy.contains('h5', 'Starsense Explorer Refractor Telescope').should('be.visible') //validando se a descrição do produto está visível
        
        cy.get('select[data-cy="product-quantity"]').select("7");
        cy.contains('button', 'Add To Cart').click()
        cy.wait(1000);

         // Retornando para a página de produtos
         cy.contains('button', 'Continue Shopping').click()
         homePage.accessarProdutos()

         //Selecionando a moeda BRL
        cy.get('select[name="currency_code"]').should('be.visible').select('BRL');

         //Adicionando o terceiro produto com 9 itens
         cy.contains('p', 'Roof Binoculars').click()
         cy.contains('h5', 'Roof Binoculars').should('be.visible') //validando se a descrição do produto está visível
         
         cy.get('select[data-cy="product-quantity"]').select("7");
         cy.contains('button', 'Add To Cart').click()
         cy.wait(1000);
    }

    adicionarProdutosQuantidadesDiferentes(){
        const homePage = new HomePage
        const qtd_produto_1 = 3
        const qtd_produto_2 = 5
        const qtd_produto_3 = 7

        //Selecionando a moeda USD
        cy.get('select[name="currency_code"]').should('be.visible').select('USD');

        //Adicionando o primeiro produto com 7 itens
        cy.contains('p', 'Solar System Color Imager').click()
        cy.contains('h5', 'Solar System Color Imager').should('be.visible') //validando se a descrição do produto está visível
        
        cy.get('select[data-cy="product-quantity"]').select(''+qtd_produto_1+'');
        cy.contains('button', 'Add To Cart').click()
        cy.wait(1000);

        // Retornando para a página de produtos
        cy.contains('button', 'Continue Shopping').click()
        homePage.accessarProdutos()
        
        //Selecionando a moeda EUR
        cy.get('select[name="currency_code"]').should('be.visible').select('EUR');

        //Adicionando o segundo produto com 5 itens
        cy.contains('p', 'Starsense Explorer Refractor Telescope').click()
        cy.contains('h5', 'Starsense Explorer Refractor Telescope').should('be.visible') //validando se a descrição do produto está visível
        
        cy.get('select[data-cy="product-quantity"]').select(''+qtd_produto_2+'');
        cy.contains('button', 'Add To Cart').click()
        cy.wait(1000);

         // Retornando para a página de produtos
         cy.contains('button', 'Continue Shopping').click()
         homePage.accessarProdutos()

         //Selecionando a moeda BRL
        cy.get('select[name="currency_code"]').should('be.visible').select('BRL');

         //Adicionando o terceiro produto com 9 itens
         cy.contains('p', 'Roof Binoculars').click()
         cy.contains('h5', 'Roof Binoculars').should('be.visible') //validando se a descrição do produto está visível
         
         cy.get('select[data-cy="product-quantity"]').select(''+qtd_produto_3+'');
         cy.contains('button', 'Add To Cart').click()
         cy.wait(1000);
    }

    adicionarUmProduto(){
        const homePage = new HomePage
        //Selecionando a moeda para pagamento desejada
        homePage.selecionarMoeda()

        //Adicionando o primeiro produto com 7 itens
        cy.contains('p', 'National Park Foundation Explorascope').click()
        cy.contains('h5', 'National Park Foundation Explorascope').should('be.visible') //validando se a descrição do produto está visível
        
        cy.get('select[data-cy="product-quantity"]').select("7");
        cy.contains('button', 'Add To Cart').click()
        cy.wait(1000);
    }
}

export default ProdutoPage;