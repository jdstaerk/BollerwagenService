const config = require('./config');
const osutils = require('./lib/osutils');
const pMS = require('pretty-ms');
const express = require('express');
const app = express();

app.use(express.static('./frontend/dist'))

app.get('/api/v1/data-combined', async (req, res) => {
    // Stats we want to display:
    // CPU Temp
    // CPU Load (1m, 5m, 15m, current)
    // RAM
    // (Disk)

    let uptimeMS = pMS(((osutils.sysUptime() || 1000) * 1000), { colonNotation: true }).toString();

    const q = await Promise.all([
        osutils.freeCommand(),
    ]);

    var data = {};
    data.piStats = [];
    data.piStats.push({ name: 'Uptime', value: uptimeMS || '0' });
    data.piStats.push({ name: 'Mem', value: q[0] || '0' });
    //data.piStats.loadAvg1m = { name: 'Load 1m', value: getLoadAvg1m() };
    //data.piStats.loadAvg5m = { name: 'Load 5m', value: getLoadAvg5m() };
    //data.piStats.loadAvg15m = { name: 'Load 15m', value: getLoadAvg15m() };
    res.json(data);
});

app.listen(config.http.port, () => console.log('Bollerwagen Web Service is running on :' + config.http.port))
