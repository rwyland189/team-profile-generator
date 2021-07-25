const team = data => {
    const teamManager = manager => {
        // get bootstrap for cards
        return `
            <div class="card">
            ${manager.getName()}
            ${manager.getRole()}
            ${manager.getEmail()}
            ${manager.getId()}
            </div>
        `
    },

    const teamEngineer = engineer => {
        return `
            <div class="card">
            ${engineer.getName()}
            ${engineer.getRole()}
            ${engineer.getEmail()}
            ${engineer.getId()}
            </div>
        `
    }
}