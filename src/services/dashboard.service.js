const dashboardRepository = require("../repositories/dashboard.repository");

const getDashboardSummary = async () => {

    const summary = await dashboardRepository.getAssetStatusSummary();

    const dashboard = {
        totalAssets: 0,
        availableAssets: 0,
        assignedAssets: 0,
        repairAssets: 0,
        retiredAssets: 0
    };

    summary.forEach((item) => {

        dashboard.totalAssets += item.total;

        if (item._id === "AVAILABLE") {
            dashboard.availableAssets = item.total;
        }

        if (item._id === "ASSIGNED") {
            dashboard.assignedAssets = item.total;
        }

        if (item._id === "REPAIR") {
            dashboard.repairAssets = item.total;
        }

        if (item._id === "RETIRED") {
            dashboard.retiredAssets = item.total;
        }

    });

    return dashboard;
};

module.exports = {
    getDashboardSummary
};