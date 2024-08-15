
const admin = require('../Models/admin')
const bookModel = require('../Models/books')
module.exports = mainAdmin = {
  dashboard: async (req, res) => {
    const admins = await admin.find()
    //      await bookModel.aggregate([{
    //           $group: {
    //                _id: '$bookCategory',
    //                books: {
    //                     $push: '$$ROOT',
    //                },
    //                count: { $sum: 1 }


    //           },

    //      }, {
    //           $lookup: {
    //                from: 'categories',
    //                localField: '_id',
    //                foreignField: '_id',
    //                as: 'category',
    //           },
    //      },

    // ])
    let user = req.cookies.userData
    const adminlist = await admin.find()
    res.render('admin/index', {
      layout: './layout/main_admin_layout',
      user,
     adminlist
    })
  }
}