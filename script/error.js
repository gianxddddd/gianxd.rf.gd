$("body").terminal({
    reload: () => {
        window.location.href = "index.html";
    }
}, {
    greetings: "An unknown error occurred.\nExecute 'reload' to go back to main webpage.",
    onCommandNotFound: () => { return }
});