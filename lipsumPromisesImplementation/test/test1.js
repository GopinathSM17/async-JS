import { 
    writeAndDeletionOfTextFiles 
} from "../problem1.js";

import { 
    people 
} from "../data/person.js";

// const fs = require('fs');
import fs from 'fs'


function test1() {
      const directoryName = "newDir";      
      writeAndDeletionOfTextFiles(people, directoryName);
}

test1();