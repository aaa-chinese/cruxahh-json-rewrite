Events.on(EventType.ClientLoadEvent, () => {
    if(Core.settings.getBool("cruxahh-diff")==true){
        Planets.serpulo.allowWaveSimulation=false;
        Blocks.launchPad.buildVisibility=BuildVisibility.editorOnly;
    }else{
        Planets.serpulo.allowWaveSimulation=true;
        Blocks.launchPad.buildVisibility=BuildVisibility.campaignOnly;
    }
});