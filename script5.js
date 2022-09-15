var url_string = window.location.href;
  var url = new URL(url_string);
  const formatter1 = new Intl.NumberFormat('fr-FR', {
  style: 'currency',currency: 'EUR',minimumFractionDigits: 2
})
const formatter2 = new Intl.NumberFormat('fr-FR', {
  style: 'currency', currency: 'EUR',minimumFractionDigits: 0
})

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
