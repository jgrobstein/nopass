import { PBKDF2, SHA3 } from "crypto-js";
import Base64 from 'crypto-js/enc-base64';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
// UIkit.notification('Hello world.');


var site = document.querySelector('#site');
var pass = document.querySelector('#pass');
var counter = document.querySelector('#counter');
var length = document.querySelector('#length');
var button = document.querySelector('#getpass');
button.addEventListener('click', getPass);

function getPass() {
    if (site.value == '') {
        UIkit.notification('You must fill in the website field.');
        return false;
    }
    if (pass.value == '') {
        UIkit.notification('You must fill in the password field.');
        return false;
    }
    let opts = {keySize: 512 / 32, iterations: 1000 * counter.value};
    let salt = SHA3(site.value, {outputLength: 128});
    let enc = PBKDF2(pass.value+site.value, salt, opts);
    let password = String(Base64.stringify(enc)).slice(-Math.abs(length.value)-2, -2);
    console.log(password);
    document.querySelector('#password').innerHTML = password;
}
