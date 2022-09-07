const acc = require("./dbac");

export function set( key, value )
{
    sessionStorage.setItem( key, value );
}

export function get( key )
{
    return sessionStorage.getItem( key );
}

export function login( user, pass )
{
    console.log("check-up login...");
    console.log(`SELECT * FROM tbl_users WHERE uname = '${user}' AND pword = '${pass}'`);
    acc.get( 
        `SELECT * FROM tbl_users`, 
        function( answer )
        {
            console.log("output: " + answer);
        }
    );
}
