const config = require('./config');
const osutils = require('./lib/osutils');
const pMS = require('pretty-ms');
const { exec } = require('child_process');
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
    // 0 = Off
    // 1 = Default
    // 2 = Sinus curve
    // 3 = Static color cycle
    
    let effect = req.query.status;
    if (effect) exec('rosservice call /set_light_effect ' + effect)

    res.sendStatus(200);
});

app.get('/api/v1/set-custom-light', (req, res) => {
    // Set light to "custom" mode and allow the user to set an rgb color on left / right / front / rear
    if (req.query) exec('rosservice call /set_light_effect 1');
    if (req.query.front) exec('rosservice call /set_light_rgb 1 ' + req.query.front);
    if (req.query.right) exec('rosservice call /set_light_rgb 2 ' + req.query.right);
    if (req.query.rear) exec('rosservice call /set_light_rgb 3 ' + req.query.rear);
    if (req.query.left) exec('rosservice call /set_light_rgb 4 ' + req.query.left);

    res.sendStatus(200);
});

app.listen(config.http.port, () => console.log('Bollerwagen Web Service is running on :' + config.http.port))
