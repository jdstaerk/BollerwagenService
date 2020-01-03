const config = require('./config');
const osutils = require('./lib/osutils');
const pMS = require('pretty-ms');
const express = require('express');
const app = express();

app.use(express.static('./frontend/dist'))

// Return all relevant data in a short notation
// Currently supports only pi stats like CPU, RAM, ...
app.get('/api/v1/data-combined', async (req, res) => {
    const q = await Promise.all([
        osutils.freeCommand(),
        osutils.harddrive(),
        osutils.cpuUsage(),
    ]);

    let uptimeMS = pMS(((osutils.sysUptime() || 1000) * 1000), { colonNotation: true }).toString();
    let usedDiskPct = (q[1].used / q[1].total);
    if (usedDiskPct) usedDiskPct = (usedDiskPct * 100).toFixed(2) + ' %';
    let cpu = q[2];
    if (cpu) cpu = (cpu * 100).toFixed(2) + ' %'
    let loadAvg5 = osutils.loadavg(5);
    if (loadAvg5) loadAvg5 = (loadAvg5 * 100).toFixed(2) + ' %';
    let loadAvg15 = osutils.loadavg(15);
    if (loadAvg15) loadAvg15 = (loadAvg15 * 100).toFixed(2) + ' %';

    data = {};
    data.piStats = [];
    data.piStats.push({ name: 'Uptime', value: uptimeMS || '0' });
    data.piStats.push({ name: 'Mem', value: q[0] || '0' });
    data.piStats.push({ name: 'CPU', value: cpu  || '0' });
    data.piStats.push({ name: 'DU', value: usedDiskPct || '0' });
    data.piStats.push({ name: 'Load 5m', value: loadAvg5 || '0' });
    data.piStats.push({ name: 'Load 15m', value: loadAvg15 || '0' });

    res.json(data);
});

app.get('/api/v1/set-light-effect', (req, res) => {
    // Set different light effect (by id)
    // Mapping:
    // 0 = Default
    // 1 = Sinus curve
    // 2 = Static color Cycle
});

app.get('/api/v1/set-custom-light', (req, res) => {
    // Set light to "custom" mode and allow the user to set an rgb color on left / right / front / rear
     
});

app.listen(config.http.port, () => console.log('Bollerwagen Web Service is running on :' + config.http.port))
