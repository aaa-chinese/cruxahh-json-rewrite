Events.on(EventType.ClientLoadEvent, () => {
    Vars.ui.menufrag.addButton("CruxScape Settings", () => {
        // let buf = Core.settings.getBool("cruxahh-diff");
        // buf=!buf;
        // Core.settings.put("cruxahh-diff", buf);
        let diffString="";
        Core.settings.getBool("cruxahh-diff")==0?diffString="NORMAL":diffString="HARD";
        const CSprompt = new BaseDialog("CruxScape Difficulty Setting");
        CSprompt.cont.add("You can change the mod's difficutly settings here.").row();
        CSprompt.cont.add("\"NORMAL\" means normal casual campaign difficutly, while \"HARD\" disables launch pad and wave simulation.").row();
        CSprompt.cont.add("Current difficutly: "+diffString).row();
        CSprompt.cont.button("NORMAL",()=>{
            Core.settings.put("cruxahh-diff",false);
            CSprompt.hide();
        }).size(600,75).row();
        CSprompt.cont.button("HARD",()=>{
            Core.settings.put("cruxahh-diff",true);
            CSprompt.hide();
        }).size(600,75);
        CSprompt.show();
    })});