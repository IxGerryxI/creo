const { exec } = require('child_process');

/**
 * runs a command
 * @param {String} cmd - the command to run
 */
async function run(cmd) {
    return new Promise((res, rej) => {
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                console.log(err);
                rej(err)
            };
            console.log(stdout);
            console.log(stderr);
            res(stdout);
        });
    });
}

/**
 * clears the console
 */
function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
}

module.exports = {
    run,
    clear
}