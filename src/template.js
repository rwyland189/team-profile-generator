// this will be called by index.js to create the html of the team profile
const generateTeam = teamHtml => {
    const teamManager = manager => {
        // get bootstrap for cards
        return `
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title">${manager.getRole()}</h3>
                </div>

                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}:>${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>         
            </div>
        `
    };

    const teamEngineer = engineer => {
        return `
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h3 class="card-title">${engineer.getRole()}</h3>
                </div>

                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}:>${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()} target="_blank">${engineer.getGitHub()}</a></li>
                    </ul>
                </div>         
            </div>
        `
    };

    const teamIntern = intern => {
        return `
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title">${intern.getRole()}</h3>
                </div>

                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}:>${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>         
            </div>
        `
    };  
}



module.exports = teamHtml => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
                <link rel="stylesheet" href="style.css">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        
                <title>Team Profile</title>
            </head>
        
            <body>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 header">
                            <h1 class="text-center fs-2">Team Profile</h1>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="d-flex justify-content-evenly">${generateTeam(teamHtml)}</div>
                    </div>
                </div>
                
            </body>
        </html>
    `;
};