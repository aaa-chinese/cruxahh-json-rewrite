Events.on(EventType.ClientLoadEvent, () => {
    Vars.ui.menufrag.addButton("stringTest", () => {
        let buf = Core.settings.getBool("cruxahh-diff");
        buf=!buf
        Core.settings.put("cruxahh-diff", buf);
    })});