sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/bosch/cpappui/test/integration/FirstJourney',
		'com/bosch/cpappui/test/integration/pages/RisksList',
		'com/bosch/cpappui/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/bosch/cpappui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);