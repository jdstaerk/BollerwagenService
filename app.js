const config = require('./config');
const osutils = require('./lib/osutils');
const pMS = require('pretty-ms');
const { exec, execSync } = require('child_process');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('./frontend/dist'));
app.use(cors());
app.use(express.json());

app.get('/api/v1/pi-stats', async (req, res) => {
    const q = await Promise.all([
        osutils.freeCommand(),
        osutils.harddrive(),
        osutils.cpuUsage(),
    ]);

    let memory = q[0];
    if (memory) memory = memory + 'mb';
    let uptimeMS = pMS(((osutils.sysUptime() || 1000) * 1000), { colonNotation: true }).toString();
    let usedDiskPct = (q[1].used / q[1].total);
    if (usedDiskPct) usedDiskPct = (usedDiskPct * 100).toFixed(1) + '%';
    let cpu = q[2];
    if (cpu) cpu = (cpu * 100).toFixed(1) + '%';
    let loadAvg5 = osutils.loadavg(5);
    if (loadAvg5) loadAvg5 = (loadAvg5 * 100).toFixed(1) + '%';
    let loadAvg15 = osutils.loadavg(15);
    if (loadAvg15) loadAvg15 = (loadAvg15 * 100).toFixed(1) + '%';

    data = [];
    data.push({ name: 'Uptime', value: uptimeMS || '0' });
    data.push({ name: 'Mem', value: memory || '0' });
    data.push({ name: 'DU', value: usedDiskPct || '0' });
    data.push({ name: 'CPU', value: cpu  || '0' });
    data.push({ name: 'Load 5m', value: loadAvg5 || '0' });
    data.push({ name: 'Load 15m', value: loadAvg15 || '0' });

    res.json(data);
});

app.post('/api/v1/command', (req, res) => {
    let command = req.body.command;
    if (!command) res.sendStatus(400);

    try {
        execSync(command + '');
        res.sendStatus(200);
    }
    catch (e) {
        console.log('Error executing command: ' + command);
        res.sendStatus(500);
    }
});

app.get('/api/v1/current-light-effect', (req, res) => {
    // Mocked rn
    res.json(2);
});

app.get('/api/v1/set-light', (req, res) => {
    // Set light to "custom" mode and allow the user to set an rgb color on left / right / front / rear
    if (req.query.lightEffect) execSync('rosservice call /set_light_effect ' + req.query.lightEffect);
    if (req.query.front) execSync('rosservice call /set_light_rgb 1 ' + req.query.front);
    if (req.query.right) execSync('rosservice call /set_light_rgb 2 ' + req.query.right);
    if (req.query.rear) execSync('rosservice call /set_light_rgb 3 ' + req.query.rear);
    if (req.query.left) execSync('rosservice call /set_light_rgb 4 ' + req.query.left);

    res.sendStatus(200);
});

app.listen(config.http.port, () => console.log('Bollerwagen Web Service is running on :' + config.http.port));
