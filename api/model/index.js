const Users =  require('./User')
const Products = require('./Products')
module.exports = {
    users: new Users(),
    products: new Products()
}