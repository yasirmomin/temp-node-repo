const a='Super secret'; //a local variable
//below are the shared variables i.e used in this file only
const b='Yasir';
const c='Momin';
module.exports={b,c};//this function is used to share in the app.js
module.exports.items=['Item-1','Item-2']
const person={ //an object
    name:'Yasir'
}
module.exports.Person=person