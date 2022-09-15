var url_string = window.location.href;
  var url = new URL(url_string);
  const formatter1 = new Intl.NumberFormat('fr-FR', {
  style: 'currency',currency: 'EUR',minimumFractionDigits: 2
})
const formatter2 = new Intl.NumberFormat('fr-FR', {
  style: 'currency', currency: 'EUR',minimumFractionDigits: 0
})

/************************ FREE CADRE () *************************/
  var tjmFREECADRE = url.searchParams.get("tjm");
  var fraisFREECADRE = url.searchParams.get("frais");
  var salaireFREECADRE = url.searchParams.get("salaire");
  var nbJoursFREECADRE = document.getElementById("nbJours").innerHTML = "20";
  var caFREECADRE = tjmFREECADRE * nbJoursFREECADRE ;
  var societeFREECADRE = 48.10;
  var caCalculeFREECADRE = caFREECADRE ;
  var cainto100FREECADRE = caFREECADRE / 100 ;
  var remunerationFREECADRE = cainto100FREECADRE * societeFREECADRE ;
  var remunerationCalculeFREECADRE = remunerationFREECADRE ;
  document.getElementById("mySociete").innerHTML = societeFREECADRE + "%";
  document.getElementById("myRemTotale").innerHTML = formatter1.format(remunerationFREECADRE);
  document.getElementById("myTjmFREECADRE").innerHTML = formatter2.format(tjmFREECADRE); 
  document.getElementById("caTotal").innerHTML = formatter2.format(caFREECADRE);
  document.getElementById("myFrais").innerHTML = formatter2.format(fraisFREECADRE);
  var tjmMobFREECADRE = url.searchParams.get("tjm");
  var fraisMobFREECADRE = url.searchParams.get("frais");
  var salaireMobFREECADRE = url.searchParams.get("salaire");
  var nbJoursMobFREECADRE = document.getElementById("nbJoursMob").innerHTML = "20";
  var caMobFREECADRE = tjmMobFREECADRE * nbJoursMobFREECADRE ;
  var societeMobFREECADRE = 48.10;
  var caCalculeMobFREECADRE = caMobFREECADRE ;
  var cainto100MobFREECADRE = caMobFREECADRE / 100 ;
  var remunerationMobFREECADRE = cainto100MobFREECADRE * societeMobFREECADRE ;
  var remunerationCalculeMobFREECADRE = remunerationMobFREECADRE ;
  document.getElementById("mySocieteMob").innerHTML = societeMobFREECADRE + "%";
  document.getElementById("myRemTotaleMob").innerHTML = formatter1.format(remunerationMobFREECADRE);
  document.getElementById("myTjmMob").innerHTML = formatter2.format(tjmMobFREECADRE); 
  document.getElementById("caTotalMob").innerHTML = formatter2.format(caMobFREECADRE);
  document.getElementById("myFraisMob").innerHTML = formatter2.format(fraisMobFREECADRE);
