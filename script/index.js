const greeter = "Welcome to GianXD's portfolio, version 1.0.2\nExecute 'help' to view help info."
    + "\n---------------------------------------";
const commands = ["about", "clear", "echo", "exit", "help"];
const pages = [];

$("body").terminal({
    "..": function () {
        // Equivalent to cd with .. parameter
        this.exec("cd ..", true);
    },
    about: function () {
        // About me and this portfolio (very damas)
        this.echo("I'm GianXD, a 14-year old Filipino who likes coding and to play games.");
        this.echo("I don't have anything to say so it's nice to see you visiting my portfolio :P");
    },
    cd: function (page) {
        // Navigate to specified page
        if (page === undefined) return;
        if (!pages.includes(page)) return;
        if (page === "..") {
            history.back();
            return;
        }

        window.location.href = `${page}.html`;
    },
    echo: function (message) {
        // Print message to terminal
        if (message === undefined) return;
        this.echo(message);
    },
    exit: async function (force) {
        // Close the website tab with 3 seconds delay if force isn't specified
        if (force === undefined && force != "--force")
        {
            var second = 3;
            this.echo("Closing in 3 seconds...");
            window.setInterval(() => {
                if (second < 0) return;
                second -= 1;
    
                if (second < 2) {
                    this.echo(`Closing in ${second} second...`);
                    return;
                }
    
                this.echo(`Closing in ${second} seconds...`);
            }, 1000);
    
            await new Promise(r => setTimeout(r, 3000));
        }

        window.close();
    },
    help: function () {
        // Print out help information
        this.echo("Here's a plenty of commands:");
        this.echo(commands);
        this.echo("");
        this.echo("To view a list of navigation pages, execute 'tree'");
        this.echo("To navigate a page, execute 'cd' with a following '<page>' parameter.");
        this.echo("To go back to previous page, execute 'cd' with '..' followed.");
        this.echo("To immediately close this portfolio on your browser, execute 'exit' with the '--force' parameter");
    },
    tree: function() {
        // List available pages [SOON]
        this.echo("Pages are unavailable yet may be available soon!");
    }
}, {
    convertLinks: false,
    checkArity: false,
    echo: true,
    greetings: greeter,
    onCommandNotFound: (cmd, term) => { term.echo(`The command '${cmd}' does not exist.`) },
    prompt: "[visitor@gianxd.rf.gd] $ "
});