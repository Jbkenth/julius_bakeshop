<!DOCTYPE html>
<html>
    <head>
        <title>JULIUS BAKESHOP</title>
        <link rel="stylesheet" type="text/css" href="personal information.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </head>
    <body>
        <form action="f.html">
        <div class="up">
        <h1>Personal Information</h1>
        </div>
        <div class="down">
        <div class="name">
            <p><i>Ngalan sa mokuha ug cake</i></p>
            <label>Lastname:</label>
            <br>
            <input type="text" required/>
            <br>
            <label>Firstname:</label>
            <br class="br">
            <input type="text" required/>
            <br>
            <label>Middlename:</label>
            <br class="br">
            <input type="text"/>
            <br>
            <label>Cellphone Number: </label>
            <br class="br">
            <input type="tel" pattern="[0-9]{11}" minlength="11" maxlength="11" required/>
        </div>
        <br>
        <input style="margin-left:63%;width:100px;height:50px;background:red;color:white;border:2px solid red;font-size:25px;padding:5px;border-radius:10px" type="submit" value="Next" />
        </div>
</form>
    </body>
</html>