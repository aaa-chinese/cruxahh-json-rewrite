Events.on(EventType.ClientLoadEvent, () => {
    Vars.ui.menufrag.addButton("stringTest", () => {
        if(Core.settings.getInt("cruxahh-diff")==0)Core.settings.put("cruxahh-diff", 0xf0);
        else{
            let buf = Core.settings.getInt("cruxahh-diff");
            buf++;
            if(buf>0xf3)buf=0xf0;
            Core.settings.put("cruxahh-diff", buf);
        }
    });
});