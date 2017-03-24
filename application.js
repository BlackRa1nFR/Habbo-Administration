'use strict';

import chalk from 'chalk';
import website from './app/http/server';
import database from './app/database/test';

class Application 
{

    constructor ()
    {
        this.environment();
        this.console();
        
        if (new database)
        {
            new website;
        } 
        else 
        {
            process.exit();
        }
    }

    // Environment 
    environment ()
    {
        global.home = __dirname;
        global.start = Date.now();
    }


    // Console 
    console ()
    {  
        process.stdout.write("\x1B[2J");
        console.log(
            chalk.bgRed.bold(
            "                                                           " + "\n" +
            "                                                           " + "\n" +
            "                        Habbo CMS                          " + "\n" + 
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



}
export default Application;