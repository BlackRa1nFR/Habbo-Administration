'use strict';

import database from './app/database/server';
import website from './app/http/server';

class Application 
{

    constructor ()
    {
        this.environment();

        this.console();

        new website;
    }

    // Environment 
    environment ()
    {
        global.home = __dirname;
    }


    // Console 
    console ()
    {
        process.stdout.write("\x1B[2J");
        
        console.log('');
        console.log('       Chris Codes - Habbo Administration I');
        console.log();
    
    }



}
export default Application;