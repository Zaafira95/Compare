  var url_string = window.location.href;
  var url = new URL(url_string);
  const formatter1 = new Intl.NumberFormat('fr-FR', {
  style: 'currency',currency: 'EUR',minimumFractionDigits: 2
})
const formatter2 = new Intl.NumberFormat('fr-FR', {
  style: 'currency', currency: 'EUR',minimumFractionDigits: 0
})
  var tjm = url.searchParams.get("tjm");
  var frais = url.searchParams.get("frais");
  var salaire = url.searchParams.get("salaire");
  var nbJours = document.getElementById("nbJours").innerHTML = "20";
  var ca = tjm * nbJours ;
  var societe = 48.10;
  var caCalcule = ca ;
  var cainto100 = ca / 100 ;
  var remuneration = cainto100 * societe ;
  var remunerationCalcule = remuneration ;
  var remunerationAnnuelle = remunerationCalcule * 12;
  document.getElementById("mySociete").innerHTML = societe + "%";
  document.getElementById("myRemTotale").innerHTML = formatter1.format(remuneration);
  document.getElementById("myRemTotaleAnnuelle").innerHTML = formatter1.format(remunerationAnnuelle);
  document.getElementById("myTjm").innerHTML = formatter2.format(tjm); 
  document.getElementById("caTotal").innerHTML = formatter2.format(ca);
  document.getElementById("myFrais").innerHTML = formatter2.format(frais);
  var tjmMob = url.searchParams.get("tjm");
  var fraisMob = url.searchParams.get("frais");
  var salaireMob = url.searchParams.get("salaire");
  var nbJoursMob = document.getElementById("nbJoursMob").innerHTML = "20";
  var caMob = tjmMob * nbJoursMob ;
  var societeMob = 48.10;
  var caCalculeMob = caMob ;
  var cainto100Mob = caMob / 100 ;
  var remunerationMob = cainto100Mob * societeMob ;
  var remunerationCalculeMob = remunerationMob ;
  var remunerationAnnuelleMob = remunerationCalculeMob * 12;
  document.getElementById("mySocieteMob").innerHTML = societeMob + "%";
  document.getElementById("myRemTotaleMob").innerHTML = formatter1.format(remunerationMob);
  document.getElementById("myRemTotaleAnnuelleMob").innerHTML = formatter1.format(remunerationAnnuelleMob);
  document.getElementById("myTjmMob").innerHTML = formatter2.format(tjmMob); 
  document.getElementById("caTotalMob").innerHTML = formatter2.format(caMob);
  document.getElementById("myFraisMob").innerHTML = formatter2.format(fraisMob);
