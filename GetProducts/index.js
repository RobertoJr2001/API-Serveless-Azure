const createMongoCliente = require('../share/mongoClient');

module.exports = async function (context, req) {

    const { client: MongoClient, CloseConnectionFn } = await createMongoCliente();

    const Products = MongoClient.collections('products');
    const res = await Products.find({});
    const body = await res.toArray();
    
    context.res = {
        status: 200,
        body
    };
};