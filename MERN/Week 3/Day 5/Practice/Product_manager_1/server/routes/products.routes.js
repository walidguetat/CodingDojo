const ProductsController = require('../controllers/products.controller');
module.exports = app => {
    app.get('/api/Products', ProductsController.findAllProductss);
    app.get('/api/Products/:id', ProductsController.findOneSingleProducts);
    app.patch('/api/Products/:id', ProductsController.updateExistingProducts);
    app.post('/api/Products/new', ProductsController.createNewProducts);
    app.delete('/api/Products/:id', ProductsController.deleteAnExistingProducts);
}
