'use strict';

import chalk from 'chalk';
import Website from './app/http/server';
import Install from './app/libraries/install/check';

class Application
{

    constructor ()
    {
        const status = new Install;
        Application.environment();
        if (!status.completed)
        {

            Application.console();

            new Website;
        }
    }

    static environment ()
    {
        global.home = __dirname;
        global.crash = false;
        global.start = Date.now();
    }


    static console ()
    {
        process.stdout.write("\x1B[2J");
        console.log(
            chalk.bgRed.bold(
            "                                                           " + "\n" +
            "                                                           " + "\n" +
            "                       xHabbo Two                          " + "\n" +
            "                   Developed by LeChris                    " + "\n" +
            "                                                           " + "\n" +
            "                                                           " + "\n"
            )
            + chalk.bgYellow(
            "                                                           " + "\n" +
            "                                                           " + "\n" +
            "                        Database                           " + "\n" +
            "                    Plus Emulator Ready                    " + "\n" +
            "                                                           " + "\n" +
            "                                                           "
            )
        );
    }

    static crash ()
    {
        global.crash = true;
    }



}
export default Application;
