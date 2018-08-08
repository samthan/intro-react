#### live-server serves the web page from the public directory:
`live-server public/`

#### babel translates JSX to usable React.  To get a valid app.js render it with:
`babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`
