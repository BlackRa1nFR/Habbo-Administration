'use strict';

import file from 'fs';
import chalk from 'chalk';
import Application from '../../application';

class Error
{

    constructor (type, error)
    {
        if (type == 'fatal')
        {
            Application.crash();
        }

        Error.draw(error);
        Error.write(error);
    }

    static draw (error)
    {
        console.log(chalk.bold.red('        ' + error ));
    }

    static write (error)
    {
        file.writeFile('../conf/logging/errors.txt', error, ((err) =>
        {
            if (err)
            {
                Error.draw(error);
            }
        }));
    }

}