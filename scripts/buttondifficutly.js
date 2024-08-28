Events.on(EventType.ClientLoadEvent, () => {
    Vars.ui.menufrag.addButton("CruxScape\nSettings", () => {
        // let buf = Core.settings.getBool("cruxahh-diff");
        // buf=!buf;
        // Core.settings.put("cruxahh-diff", buf);
        let diffString="";
        Core.settings.getBool("cruxahh-diff")==0?diffString="NORMAL":diffString="HARD";
        const CSprompt = new BaseDialog("CruxScape Difficulty Setting");
        CSprompt.cont.add("You can change the mod's difficulty settings here.").row();
        CSprompt.cont.add("\"NORMAL\" means normal casual campaign experience, while \"HARD\" disables launch pad and wave simulation.").row();
        CSprompt.cont.add("Current difficulty: "+diffString).row();
        CSprompt.cont.button("NORMAL",()=>{
            Core.settings.put("cruxahh-diff",false);
            Planets.serpulo.allowWaveSimulation=true;
            Blocks.launchPad.buildVisibility=BuildVisibility.campaignOnly;
            CSprompt.hide();
        }).size(600,75).row();
        CSprompt.cont.button("HARD",()=>{
            Core.settings.put("cruxahh-diff",true);
            Planets.serpulo.allowWaveSimulation=false;
            Blocks.launchPad.buildVisibility=BuildVisibility.editorOnly;
            CSprompt.hide();
        }).size(600,75);
        CSprompt.show();
    })});