Modified projects to use EMACS modules in js files and jest files,
it will be possible to use import export syntax for the modules.

# Solution 1:

Use babel as a transpiler,

## babel.config.js must be created

module.exports = {
presets: [
[
"@babel/preset-env",
{
targets: {
node: "current", // compile against the current node version
},
},
],
"@babel/preset-typescript", // if you use TypeScript
],
};

## jest.config.js must be created

# Solution 2

It is possible to avoid a transpiler if the experimental flag is used to run node in such case:
Add to package.json:
"main": "index.js",
"type": "module"

and in the scripts....
"test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"

obviusly jest.config.js and babel.config.js are not needed.
