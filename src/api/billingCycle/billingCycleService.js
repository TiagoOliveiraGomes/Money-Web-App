const BillingCycle = require("./billingCycle")
const errorHandler = require("../common/errorHandler")
const billingCycle = require("./billingCycle")

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})
billingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('get', (req, res, next) => {

    BillingCycle.find({}, (err, docs) => {

        if(!err) {

            res.json(docs)

        } else {

            res.status(500).json({errors: [error]})

        }

    })

})

BillingCycle.route('count', (req, res, next)=> {
    BillingCycle.count((error, value)=>{
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next)=>{
    BillingCycle.aggregate({
        $project: {debt: {$sum: "$debt.value"}, credit: {$sum: "$credit.value"}}
    }, {
        $group: {_id: null, debt: {$sum: "$debt"}, credit: {$sum: "$credit"}}
    }, {
        $project: {_id: 0, debt: 1, credit: 1},
    },
        (error, result) => {
            if(error){
                res.status(500).json({errors: [error]})
            } else {
                res.json( result[0] || {credit: 0, debt: 0})
            }
        }
    )
})

module.exports = BillingCycle