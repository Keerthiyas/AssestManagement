const Assest = require("../models/Assest");
const getAssetStatusSummary = async () => {

    return await Assest.aggregate([
        {
            $group: {
                _id: "$status",
                total: {
                    $sum: 1
                }
            }
        }
    ]);

};

Assest.aggregate([
    {
        $match:{
            status:"AVAILABLE"
        }
    },
    {
        $group:{
            _id:"$brand",
            totalAssets:{
                $sum:1
            }
        }
    },
    {
        $project:{
            _id:0,
            brand:"$_id",
            count:"$totalAssets"
        }
    }
]);