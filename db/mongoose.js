const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Trial:Dontseeme@cluster0.uffu9.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
console.log('connected')