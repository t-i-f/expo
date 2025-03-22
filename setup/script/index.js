#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

(async () => {
    const argsJson = process.argv[2]; // Get JSON string
    const args = JSON.parse(argsJson); // Parse JSON

    console.log("Parsed Object:", args);
    
    const tconf = await fs.promises.readFile('../tisf.json', 'utf8');
    const tisf = JSON.parse(tconf);

    for (const x of tisf.features) {
        execSync(`npx -y @tisf/hb -p @recipes-expo/features/${x}/prompts.json -s tisf.json -t features -n ${x}`, {
            stdio: "inherit",
            cwd: ".."
        });
    }

    for (const x of tisf.modules) {
        execSync(`npx -y @tisf/hb -p @recipes-expo/modules/${x}/prompts.json -s tisf.json -t modules -n ${x}`, {
            stdio: "inherit",
            cwd: ".."
        });
    }

    // execSync(`npx -y @tisf/hb tisf.json @recipes-expo/init/setup.yml .github/workflows/setup.yml -t root`, {
    //     stdio: "inherit",
    //     cwd: ".."
    // });

    console.log('Project setup complete.');
})();