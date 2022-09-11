#!/usr/bin/env node
const CLI = require('./modules/cli');


function start(type, options) {
    switch (type) {
        case 'nuxt': createNuxtProject(options)
    }

}
start(process.argv[2], process.argv.slice(3));

async function createNuxtProject(options) {
    console.log('... creating nuxt project: ' + options[0])
    console.log('/');
    await wait()
}

function wait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 60000)
    })
}