Events.on(EventType.ClientLoadEvent, () => {
    Vars.ui.menufrag.addButton("stringTest", () => {
        if(Core.settings.getInt("cruxahh-diff")==0)Core.settings.put("cruxahh-diff", 100);
        else{
            let buf = Core.settings.getInt("cruxahh-diff");
            buf++;
            if(buf>104)buf=100;
            Core.settings.put("cruxahh-diff", 100);
        }
    });
});