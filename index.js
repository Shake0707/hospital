const express = require('express')
const connectDB = require('./config/db')
const app = express()
const PORT = 5000 || process.env.PORT
const path = require('path')
const cors = require('cors')
connectDB()


const Layout = require('express-ejs-layouts')
require('ejs')

const methodOverride = require('method-override')
app.use(methodOverride('_method', {
     methods: ["POST", "GET"]
}))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(Layout)

    

app.use(express.static(path.join(__dirname + '/public')))
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }))
// for read json 
// app.use(require('./Route/booksRoute'))
// app.use(require('./Route/categoryRoute'))
// app.use(require("./Route/institutRoute"))
// app.use(require('./Route/userRoute'))
// app.use(require('./Route/dashboardRoute'))
// app.use(require('./Rsoute/requestRoute'))
// app.use(require('./Route/guruhRoute'))
// app.use(require("./Route/otmdashboard"))
// app.use(require('./Route/adminRoute'))
// app.use(require("./Route/vazirlikRoute"))
// app.use(require("./Route/errorRoute"))
// app.use(require('./Route/institutAdminRoute'))


app.use(require('./Route/navbatROute'))
app.use(require('./Route/messageRoute'))
app.listen(PORT, () => {
    console.log(`Sever is running at ${PORT} port`)
})
