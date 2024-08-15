# Skeletons

## Topics discussed

1. Steps for creating a npm project
2. Steps for creating a typescript project


1. 
    - Make sure that you have the node + npm installed. If not, see the introduction section
    - Open a terminal in the folder that you want to have the project in
    - Either type `npm init` and follow the steps
    - Or type `npm init -y` and it will use the defaults for every setting
    - After you complete the steps, in the folder you should have a package.json file with a content similar to the one below:
        ```JavaScript
            {
                "name": "projectName",
                "version": "1.0.0",
                "main": "index.js",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                },
                "keywords": [],
                "author": "",
                "license": "ISC",
                "description": ""
                }
        ```
    - in the scripts section delete the ""test": "echo \"Error: no test specified\" && exit 1"" and add
        `"start": node index.js`
    - create a file named `index.js` with `console.log('Hello)` as content
    - open the terminal and type: `npm start`


2. 
     - Make sure that you have the node + npm installed. If not, see the introduction section
    - Open a terminal in the folder that you want to have the project in
    - create an npm project
        - either `npm init` or `npm init -y`
    - install typescript
        `npm install typescript`
    - run `npx tsc --init`
    - uncomment the `outDir` entry and set it to `./dist`,
    - add the following script in package json:
    ```typescript
        "build": "tsc -w",
        "start:dev": "node --watch dist/index.js",
        "start": "npm run build & npm run start:dev"
    ``` 
    - create a file named: `index.ts` and add a console.log there