export default (id, cb, options = {}) => {
    if (typeof window === "undefined") return;

    const sbBridge = new window.StoryblokBridge(options);

    sbBridge.on(["input", "published", "change"], (event) => {
        if (event.action == "input" && event.story.id === id) cb(event.story);
        else location.reload()
    });
};