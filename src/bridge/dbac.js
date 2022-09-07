// Dient zum Abrufen der API-Daten
function fetchSQL(url, met, cbk)
{
    fetch(url, {
		method: met,
		mode: 'cors',
		headers: {
		  'Access-Control-Allow-Origin': '*',
		  'Access-Control-Allow-Methods': 'GET, POST'
		}
	  })
      .then((res) =>
        res.json()
      )
      .then((out) =>
        cbk(out)
      )
      .catch((err) =>
        console.error(err)
      );
}

// Je nach Anfrage werden Daten vom MySQL-Datenbank abgerufen
export function get( query, cbk )
{
	const url = "http://57336763.swh.strato-hosting.eu/wbs-coding-school/index.php?";
	if ( query.search("tb_users") > 0 )
		fetchSQL( url + "this=tbl_users&query=" + query, 'GET', cbk );
	else if ( query.search("tbl_login") > 0 )
		fetchSQL( url + "this=tbl_login&query=" + query, 'GET', cbk );
	else if ( query.search("tbl_reminder") > 0 )
		fetchSQL( url + "this=tbl_reminder&query=" + query, 'GET', cbk );
	else if ( query.search("tbl_settings") > 0 )
		fetchSQL( url + "this=tbl_settings&query=" + query, 'GET', cbk );
	else if ( query.search("tbl_visitors") > 0 )
		fetchSQL( url + "this=tbl_visitors&query=" + query, 'GET', cbk );
	else if ( query.search("tbl_events") > 0 )
		fetchSQL( url + "this=tbl_events&query=" + query, 'GET', cbk );
	else if ( query.search("tbl_event_history") > 0 )
		fetchSQL( url + "this=tbl_event_history&query=" + query, 'GET', cbk );
	else if ( query.search("tbl_messages") > 0 )
		fetchSQL( url + "this=tbl_messages&query=" + query, 'GET', cbk );
	else if ( query.search("tbl_reminder_notification") > 0 )
		fetchSQL( url + "this=tbl_reminder_notification&query=" + query, 'GET', cbk );
}

// Es wird eine Schreiboperation im Datenbank ausgeführt
export function set( query )
{
	console.log(query);
	const url = "http://57336763.swh.strato-hosting.eu/wbs-coding-school/index.php?this=run_query&query=" + query;
	fetchSQL( url, 'POST', function(){return null;} );
}
