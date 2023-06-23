console.log("Hello World");

Hooks.on("init", function() {
    console.log("VTT is beginning initialization");
});

Hooks.on("ready", function() {
    console.log("Foundry init is complete and ready to go");
    const test_data = {
        user: "God",
        speaker: "God",
        content: "Let there be Light",
    };
    ChatMessage.create(test_data, {});
})

