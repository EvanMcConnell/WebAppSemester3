import { configure } from '@storybook/react';

/*function importAll(req){
    //Puts a require statement on all found files
    req.keys().forEach(filename => req(filname))
}

function loadStories(){
    let req
    //searches for all files ending in .story.js
    req = require.context("../src", true, /\.story\.js$/)
    importAll(req)
}*/

configure(require.context('../src', true, /\.stories\.js$/), module);
