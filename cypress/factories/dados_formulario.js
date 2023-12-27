// Massa de dados do formulário "Shipping Address"
export default {

    shipping_address: function () {

        var data = {
            address: {
               email: 'someone@example.com',
               street: 'Avenida Santos Dumont',
               whatsapp: '11999999999',
               zipcode: '60150900',
               city: 'Fortaleza',
               state: "CE",
               country: "Brasil",
            },
            paymentMethod: {
                credit_card_number: '4432-8015-6152-0454',
                month: 'March',
                year: '2030',
                cvv: '222',
            },
        }

        return data

    }

}