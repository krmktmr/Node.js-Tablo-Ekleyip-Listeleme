let ekle = require('./insert.js')
let table = function(durum) {if(`${durum}`=="table")
{let table = require('./find.js')}}

module.exports = {
    ekle : ekle,
    table : table,
}