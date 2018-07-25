# Legacy eksempel prosjekt

Satt opp til å bruke `browserify` og `lessc`.

For å sjekke om alt er ok kjør; 
```
npm install
npm run build
```

## Quirks
Modulene er satt opp for å også fungere med webpacks `style-loader`, og importerer derfor også `less`-filer i javscript filene.

For at `browserify` skal fungere må det derfor brukes en plugin:
```
"scripts": {
    "build:js": "browserify src/index.js -o out/index.js -p [ browserify-file-filter -p \"\\.(?:css|less|scss|sass)$\" ]",
}
```

`browserify-file-filter` godtar en regex (som en string) som eneste parameter. Hvis filnavnet matcher vil filen bli endret til en tom-fil slik at `browserify` ikke ser noe mer på den.

Om man bruker gulp kan det settes opp sånn;
```javascript
browserify('index.js', opts)
  .plugin(require('browserify-file-filter'), { p: '\\.(?:css|less|scss|sass)$' })
```
 
 ## Quirks 2
 For at less-filene skal kompilere må to globale variabler være definert: `nodeModulesPath` og `coreModulePath`.
 Dette gjøres enkelt ved å definere disse to i toppen av `index.less`, før man importere noen moduler: 
 
```
@nodeModulesPath: './../node_modules';
@coreModulePath: './../node_modules';
```

## Bilder og ikoner
Ikonene ligger i pakken nav-frontend-ikoner-assets, for legacy løsninger fortsettes det med å kopiere over disse til lokal mappe. Dette bør da gjøres som en del av byggesteget.