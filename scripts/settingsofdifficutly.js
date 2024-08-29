Events.on(EventType.ClientLoadEvent, () => {
    if(Core.settings.getBool("cruxahh-laun")==true){
        Blocks.launchPad.buildVisibility=BuildVisibility.editorOnly;
    }
    if(Core.settings.getBool("cruxahh-wave")==true){
        Planets.serpulo.allowWaveSimulation=false;
    }
    Vars.ui.menufrag.addButton("@cruxahh-difficulty-button",Icon.logic,() => {
        // let buf = Core.settings.getBool("cruxahh-diff");
        // buf=!buf;
        // Core.settings.put("cruxahh-diff", buf);
        let stringEnabled=Core.bundle.get("cruxahh-difficulty-enabled");
        let stringDisabled=Core.bundle.get("cruxahh-difficulty-disabled");
        const CSprompt = new BaseDialog("@cruxahh-difficulty-title");
        CSprompt.cont.add(Core.bundle.get("cruxahh-difficulty-description")).row();
        let buttonLaun = CSprompt.cont.button(Core.bundle.get("cruxahh-difficulty-launchpad")+(Core.settings.getBool("cruxahh-laun")?stringDisabled:stringEnabled),()=>{
            let buf=Core.settings.getBool("cruxahh-laun");
            if(buf)Blocks.launchPad.buildVisibility=BuildVisibility.editorOnly;
            else Blocks.launchPad.buildVisibility=BuildVisibility.campaignOnly;
            Core.settings.put("cruxahh-laun",!buf);
            buttonLaun.setText(Core.bundle.get("cruxahh-difficulty-launchpad")+(Core.settings.getBool("cruxahh-laun")?stringDisabled:stringEnabled));
        }).size(600,75).row().get();
        let buttonWave = CSprompt.cont.button(Core.bundle.get("cruxahh-difficulty-wavesim")+(Core.settings.getBool("cruxahh-wave")?stringDisabled:stringEnabled),()=>{
            let buf=Core.settings.getBool("cruxahh-wave");
            Planets.serpulo.allowWaveSimulation=!buf;
            Core.settings.put("cruxahh-wave",!buf);
            buttonWave.setText(Core.bundle.get("cruxahh-difficulty-wavesim")+(Core.settings.getBool("cruxahh-wave")?stringDisabled:stringEnabled));
        }).size(600,75).row().get();
        CSprompt.addCloseButton();
        CSprompt.show();
    })

    // Vars.ui.settings.addCategory(Core.bundle.get("cruxahh-settings"), "cruxahh-setting-icon", cruxs => {
    //     cruxs.checkPref("cruxahh-launchpad", true);
    //     cruxs.checkPref("cruxahh-sim", true);
    // })

    // if (Core.settings.getBool("cruxahh-launchpad") == true){
    //     Blocks.launchPad.buildVisibility=BuildVisibility.editorOnly;
    // }
    // if (Core.settings.getBool("cruxahh-sim") == true){
    //     Planets.serpulo.allowWaveSimulation=false;
    // }
});