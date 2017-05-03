/**
 * Created by thomaskekeisen on 03.05.17.
 */
const exportPath = './geo-commits.json';
const logDirectory = './commit-log/';
const fs = require('fs');
const logFiles = fs.readdirSync(logDirectory);
var exportData = {
    type:     'FeatureCollection',
    features: []
};

for (var i in logFiles) {
    const logFileName = logFiles[i];

    if (logFileName === '.gitkeep') {
        continue;
    }

    const logFilePath = logDirectory + logFileName;

    const content = fs.readFileSync(logFilePath, 'utf8');

    try {
        const parsedContent = JSON.parse(content);

        if (parsedContent.longitude && parsedContent.latitude) {
            const newItem = {
                type:       'Feature',
                geometry:   {
                    type:        'Point',
                    coordinates: [
                        parseFloat(parsedContent.longitude, 2),
                        parseFloat(parsedContent.latitude, 2)
                    ]
                },
                properties: {
                    "Date":       parsedContent.date,
                    "Commit":     parsedContent.commit_id,
                    "Name":       parsedContent.name,
                    "Repository": parsedContent.repository_name
                }
            };

            exportData.features.push(newItem);
        }
    } catch (exception) {
        console.log('Skipped file ' + logFileName + ' + since it contains no valid json.');
        console.log(exception);
    }
}

const exportDataJson = JSON.stringify(exportData);

fs.writeFile(exportPath, exportDataJson, function (error) {
    if (error) {
        console.error('Oh no, something went wrong.');
    }
});

console.log('Export done, see commits.geolocation');

