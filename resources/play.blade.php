
<html lang="en">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <title>iHabbo - Client</title>
        <link rel="shortcut icon" href="http://swfs.ihabbo.pw/assets/web-gallery/v2/favicon.ico" type="image/vnd.microsoft.icon" />
        <link rel="stylesheet" href="http://swfs.ihabbo.pw/assets/web-gallery/styles/habboflashclient.css" type="text/css">

        <script type="text/javascript" src="http://swfs.ihabbo.pw/assets/web-gallery/static/js/habboflashclient.js"></script>
        <script type="text/javascript">
            var BaseUrl = "http://swfs.ihabbo.pw/swfs/gordon/PRODUCTION-201601012205-226667486/";
            var flashvars =
            {
                "client.starting" : "This is my house",
                "client.allow.cross.domain" : "1",
                "client.notify.cross.domain" : "0",
                "connection.info.host" : "164.132.170.71",
                "connection.info.port" : "30000",
                "site.url" : "http://ihabbo.pw",
                "url.prefix" : "http://ihabbo.pw",
                "client.reload.url" : "http://ihabbo.pw/play",
                "client.fatal.error.url" : "http://ihabbo.pw/me",
                "client.connection.failed.url" : "http://ihabbo.pw/me",
                "external.variables.txt" : "http://swfs.ihabbo.pw/swfs/gamedata/external_variables.txt",
                "external.texts.txt" : "http://swfs.ihabbo.pw/swfs/gamedata/external_flash_texts.txt",
				        "external.override.variables.txt" : "http://swfs.ihabbo.pw/swfs/gamedata/override/external_override_variables.txt",
				        "external.flash.override.texts.txt" : "http://swfs.ihabbo.pw/swfs/gamedata/override/external_flash_override_texts.txt",
                "productdata.load.url" : "http://swfs.ihabbo.pw/swfs/gamedata/productdata.txt",
                "furnidata.load.url" : "http://swfs.ihabbo.pw/swfs/gamedata/furnidata.xml",
                "use.sso.ticket" : "1",
                "sso.ticket" : "{{ $daddy }}",
                "processlog.enabled" : "0",
                "flash.client.url" : BaseUrl,
                "flash.client.origin" : "popup"

            };
            var params =
            {
                "base" : BaseUrl + "/",
                "allowScriptAccess" : "always",
                "menu" : "false"
            };
            swfobject.embedSWF("http://swfs.ihabbo.pw/swfs/gamedata/Habbo.swf", "client", "100%", "100%", "10.0.0", "http://swfs.ihabbo.pw/swfs/expressInstall.swf", flashvars, params, null);
        </script>
    </head>

    <body>

	<div id="client-ui">

        <div id="client"></div>


    </body>
</html>
