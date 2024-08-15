const navbatModel = require("../Models/navbat")

const navbat = {

    createNavat: async (req, res) => {
        const { service, time, phone , doctor } = req.body
        const navbatDB = new navbatModel({
            service, time, phone, doctor
        })
        await navbatDB.save()
            .then(data => res.redirect("/"))
            .catch(err => res.send(err))
    },
    getNavbat: async (req, res) => {
      

        const navbat = await navbatModel.find()
        res.render('admin/category', {
            layout: './layout/admin_layout',
            navbat
        })
    }
    ,
    deleteNavbat: async (req, res) => {
        await navbatModel.findByIdAndDelete(req.params.id)
            .then(data => res.redirect("/"))
            .catch(err => res.send(err))
    },
}

module.exports = navbat