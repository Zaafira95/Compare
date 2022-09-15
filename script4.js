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
  document.getElementById("myTjm").innerHTML = formatter2.format(tjmFREECADRE); 
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

/************************ PORT UP (1) *************************/
  var tjmPORTUP = url.searchParams.get("tjm");
  var fraisPORTUP = url.searchParams.get("frais");
  var salairePORTUP = url.searchParams.get("salaire");
  var nbJoursPORTUP = document.getElementById("nbJoursPORTUP").innerHTML = "20";
  var caPORTUP = tjmPORTUP * nbJoursPORTUP ;
  var societePORTUP = 48.61;
  var caCalculePORTUP = caPORTUP ;
  var cainto100PORTUP = caPORTUP / 100 ;
  var remunerationPORTUP = cainto100PORTUP * societePORTUP ;
  var remunerationCalculePORTUP = remunerationPORTUP ;
  document.getElementById("mySocietePORTUP").innerHTML = societePORTUP + "%";
  document.getElementById("myRemTotalePORTUP").innerHTML = formatter1.format(remunerationPORTUP);
  document.getElementById("myTjmPORTUP").innerHTML = formatter2.format(tjmPORTUP); 
  document.getElementById("caTotalPORTUP").innerHTML = formatter2.format(caPORTUP);	
  document.getElementById("myFraisPORTUP").innerHTML = formatter2.format(fraisPORTUP);	
  var tjmMobPORTUP = url.searchParams.get("tjm");
  var fraisMobPORTUP = url.searchParams.get("frais");
  var salaireMobPORTUP = url.searchParams.get("salaire");
  var nbJoursMobPORTUP = "20";
  var caMobPORTUP = tjmMobPORTUP * nbJoursMobPORTUP ;
  var societeMobPORTUP = 48.61;
  var caCalculeMobPORTUP = caMobPORTUP ;
  var cainto100MobPORTUP = caMobPORTUP / 100 ;
  var remunerationMobPORTUP = cainto100MobPORTUP * societeMobPORTUP ;
  var remunerationCalculeMobPORTUP = remunerationMobPORTUP ;
  document.getElementById("mySocieteMobPORTUP").innerHTML = societeMobPORTUP + "%";
  document.getElementById("myRemTotaleMobPORTUP").innerHTML = formatter1.format(remunerationMobPORTUP);
