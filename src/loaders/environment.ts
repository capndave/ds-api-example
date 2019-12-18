module.exports = function() {
    require('dotenv').config()
    console.log(process.env.PORT)
}