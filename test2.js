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
  //document.getElementById("mySocieteMobPORTUP").innerHTML = societeMobPORTUP + "%";
  //document.getElementById("myRemTotaleMobPORTUP").innerHTML = formatter1.format(remunerationMobPORTUP);

/************************ ABC PORTAGE (12) *************************/

var tjmABC = url.searchParams.get("tjm");
var fraisABC = url.searchParams.get("frais");
var salaireABC = url.searchParams.get("salaire");
var nbJoursABC = document.getElementById("nbJoursABC").innerHTML = "20";
var caABC = tjmABC * nbJoursABC ;
var societeABC = 50.60;
var caCalculeABC = caABC ;
var cainto120ABC = caABC / 120 ;
var remunerationABC = cainto120ABC * societeABC ;
var remunerationCalculeABC = remunerationABC ;
document.getElementById("mySocieteABC").innerHTML = societeABC + "%";
document.getElementById("myRemTotaleABC").innerHTML = formatter1.format(remunerationABC);
document.getElementById("myTjmABC").innerHTML = formatter2.format(tjmABC); 
document.getElementById("caTotalABC").innerHTML = formatter2.format(caABC);	
document.getElementById("myFraisABC").innerHTML = formatter2.format(fraisABC);	
var tjmMobABC = url.searchParams.get("tjm");
var fraisMobABC = url.searchParams.get("frais");
var salaireMobABC = url.searchParams.get("salaire");
var nbJoursMobABC = "20";
var caMobABC = tjmMobABC * nbJoursMobABC ;
var societeMobABC = 50.60;
var caCalculeMobABC = caMobABC ;
var cainto120MobABC = caMobABC / 120 ;
var remunerationMobABC = cainto120MobABC * societeMobABC ;
var remunerationCalculeMobABC = remunerationMobABC ;
//document.getElementById("mySocieteMob12").innerHTML = societeMobABC + "%";
//document.getElementById("myRemTotaleMob12").innerHTML = formatter1.format(remunerationMobABC);

/************************ ROCKETZ LAB (20) *************************/

var tjmROCKETZ = url.searchParams.get("tjm");
var fraisROCKETZ = url.searchParams.get("frais");
var salaireROCKETZ = url.searchParams.get("salaire");
var nbJoursROCKETZ= document.getElementById("nbJoursROCKETZ").innerHTML = "22";
var caROCKETZ = tjmROCKETZ * nbJoursROCKETZ ;
var societeROCKETZ = 70.00;
document.getElementById("mySocieteROCKETZ").innerHTML = societeROCKETZ + "%";
var caCalculeROCKETZ = caROCKETZ ;
var cainto190ROCKETZ = caROCKETZ / 190 ;
var remunerationROCKETZ = cainto190ROCKETZ * societeROCKETZ ;
var remunerationCalculeROCKETZ = remunerationROCKETZ ;
document.getElementById("myRemTotaleROCKETZ").innerHTML = formatter1.format(remunerationROCKETZ);
document.getElementById("myTjmROCKETZ").innerHTML = formatter2.format(tjmROCKETZ); 
document.getElementById("caTotalROCKETZ").innerHTML = formatter2.format(caROCKETZ);	
document.getElementById("myFraisROCKETZ").innerHTML = formatter2.format(fraisROCKETZ);
var tjmMobROCKETZ = url.searchParams.get("tjm");
var fraisMobROCKETZ = url.searchParams.get("frais");
var salaireMobROCKETZ = url.searchParams.get("salaire");
var nbJoursMobROCKETZ = "20";
var caMobROCKETZ = tjmMobROCKETZ * nbJoursMobROCKETZ ;
var societeMobROCKETZ = 70.00;
var caCalculeMobROCKETZ = caMobROCKETZ ;
var cainto190MobROCKETZ = caMobROCKETZ / 190 ;
var remunerationMobROCKETZ = cainto190MobROCKETZ * societeMobROCKETZ ;
var remunerationCalculeMobROCKETZ = remunerationMobROCKETZ ;
//document.getElementById("mySocieteMob20").innerHTML = societeMobROCKETZ + "%";
//document.getElementById("myRemTotaleMob20").innerHTML = formatter1.format(remunerationMobROCKETZ);

/************************ PORTAGE NUMERIQUE SOLIDAIRE (9) *************************/

var tjmPNS = url.searchParams.get("tjm");
var fraisPNS = url.searchParams.get("frais");
var salairePNS = url.searchParams.get("salaire");
var nbJoursPNS = document.getElementById("nbJoursPNS").innerHTML = "20";
var caPNS = tjmPNS * nbJoursPNS ;
var societePNS = 50.00;
var caCalculePNS = caPNS ;
var cainto100PNS = caPNS / 100 ;
var remunerationPNS = cainto100PNS * societePNS ;
var remunerationCalculePNS = remunerationPNS ;
document.getElementById("mySocietePNS").innerHTML = societePNS + "%";
document.getElementById("myRemTotalePNS").innerHTML = formatter1.format(remunerationPNS);
document.getElementById("myTjmPNS").innerHTML = formatter2.format(tjmPNS); 
document.getElementById("caTotalPNS").innerHTML = formatter2.format(caPNS);	
document.getElementById("myFraisPNS").innerHTML = formatter2.format(fraisPNS);	
var tjmMobPNS = url.searchParams.get("tjm");
var fraisMobPNS = url.searchParams.get("frais");
var salaireMobPNS = url.searchParams.get("salaire");
var nbJoursMobPNS = "20";
var caMobPNS = tjmMobPNS * nbJoursMobPNS ;
var societeMobPNS = 50.00;
var caCalculeMobPNS = caMobPNS ;
var cainto100MobPNS = caMobPNS / 100 ;
var remunerationMobPNS = cainto100MobPNS * societeMobPNS ;
var remunerationCalculeMobPNS = remunerationMobPNS ;
//document.getElementById("mySocieteMob9").innerHTML = societeMobPNS + "%";
//document.getElementById("myRemTotaleMob9").innerHTML = formatter1.format(remunerationMobPNS);

/************************ CEGELEM (17) *************************/

var tjmCEGELEM = url.searchParams.get("tjm");
var fraisCEGELEM = url.searchParams.get("frais");
var salaireCEGELEM = url.searchParams.get("salaire");
var nbJoursCEGELEM = document.getElementById("nbJoursCEGELEM").innerHTML = "20";
var caCEGELEM = tjmCEGELEM * nbJoursCEGELEM ;
var societeCEGELEM = 51.70;
var caCalculeCEGELEM = caCEGELEM ;
var cainto170CEGELEM = caCEGELEM / 170 ;
var remunerationCEGELEM = cainto170CEGELEM * societeCEGELEM ;
var remunerationCalculeCEGELEM = remunerationCEGELEM ;
document.getElementById("mySocieteCEGELEM").innerHTML = societeCEGELEM + "%";
document.getElementById("myRemTotaleCEGELEM").innerHTML = formatter1.format(remunerationCEGELEM);
document.getElementById("myTjmCEGELEM").innerHTML = formatter2.format(tjmCEGELEM); 
document.getElementById("caTotalCEGELEM").innerHTML = formatter2.format(caCEGELEM);	
document.getElementById("myFraisCEGELEM").innerHTML = formatter2.format(fraisCEGELEM);	
var tjmMobCEGELEM = url.searchParams.get("tjm");
var fraisMobCEGELEM = url.searchParams.get("frais");
var salaireMobCEGELEM = url.searchParams.get("salaire");
var nbJoursMobCEGELEM = "20";
var caMobCEGELEM = tjmMobCEGELEM * nbJoursMobCEGELEM ;
var societeMobCEGELEM = 51.70;
var caCalculeMobCEGELEM = caMobCEGELEM ;
var cainto170MobCEGELEM = caMobCEGELEM / 170 ;
var remunerationMobCEGELEM = cainto170MobCEGELEM * societeMobCEGELEM ;
var remunerationCalculeMobCEGELEM = remunerationMobCEGELEM ;
//document.getElementById("mySocieteMob17").innerHTML = societeMobCEGELEM + "%";
//document.getElementById("myRemTotaleMob17").innerHTML = formatter1.format(remunerationMobCEGELEM);

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
  document.getElementById("mySocieteFREECADRE").innerHTML = societeFREECADRE + "%";
  document.getElementById("myRemTotaleFREECADRE").innerHTML = formatter1.format(remunerationFREECADRE);
  document.getElementById("myTjmFREECADRE").innerHTML = formatter2.format(tjmFREECADRE); 
  document.getElementById("caTotalFREECADRE").innerHTML = formatter2.format(caFREECADRE);
  document.getElementById("myFraisFREECADRE").innerHTML = formatter2.format(fraisFREECADRE);
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
  //document.getElementById("mySocieteMob").innerHTML = societeMobFREECADRE + "%";
  //document.getElementById("myRemTotaleMob").innerHTML = formatter1.format(remunerationMobFREECADRE);

/************************ ITG (2) *************************/

  var tjmITG = url.searchParams.get("tjm");
  var fraisITG = url.searchParams.get("frais");
  var salaireITG = url.searchParams.get("salaire");
  var nbJoursITG = document.getElementById("nbJoursITG").innerHTML = "20";
  var caITG = tjmITG * nbJoursITG ;
  var societeITG = 49.34;
  var caCalculeITG = caITG ;
  var cainto100ITG = caITG / 100 ;
  var remunerationITG = cainto100ITG * societeITG ;
  var remunerationCalculeITG = remunerationITG ;
  document.getElementById("mySocieteITG").innerHTML = societeITG + "%";
  document.getElementById("myRemTotaleITG").innerHTML = formatter1.format(remunerationITG);
  document.getElementById("myTjmITG").innerHTML = formatter2.format(tjmITG); 
  document.getElementById("caTotalITG").innerHTML = formatter2.format(caITG);	
  document.getElementById("myFraisITG").innerHTML = formatter2.format(fraisITG);	
  var tjmMobITG = url.searchParams.get("tjm");
  var fraisMobITG = url.searchParams.get("frais");
  var salaireMobITG = url.searchParams.get("salaire");
  var nbJoursMobITG = "20";
  var caMobITG = tjmMobITG * nbJoursMobITG ;
  var societeMobITG = 49.34;
  var caCalculeMobITG = caMobITG ;
  var cainto100MobITG = caMobITG / 100 ;
  var remunerationMobITG = cainto100MobITG * societeMobITG ;
  var remunerationCalculeMobITG = remunerationMobITG ;
  //document.getElementById("mySocieteMob2").innerHTML = societeMobITG + "%";
  //document.getElementById("myRemTotaleMob2").innerHTML = formatter1.format(remunerationMobITG);

/************************ RH SOLUTIONS (3) *************************/

var tjmRHSOL = url.searchParams.get("tjm");
var fraisRHSOL = url.searchParams.get("frais");
var salaireRHSOL = url.searchParams.get("salaire");
var nbJoursRHSOL = document.getElementById("nbJoursRHSOL").innerHTML = "20";
var caRHSOL = tjmRHSOL * nbJoursRHSOL ;
var societeRHSOL = 49.34;
var caCalculeRHSOL = caRHSOL ;
var cainto100RHSOL = caRHSOL / 100 ;
var remunerationRHSOL = cainto100RHSOL * societeRHSOL ;
var remunerationCalculeRHSOL = remunerationRHSOL ;
document.getElementById("mySocieteRHSOL").innerHTML = societeRHSOL + "%";
document.getElementById("myRemTotaleRHSOL").innerHTML = formatter1.format(remunerationRHSOL);
document.getElementById("myTjmRHSOL").innerHTML = formatter2.format(tjmRHSOL); 
document.getElementById("caTotalRHSOL").innerHTML = formatter2.format(caRHSOL);	
document.getElementById("myFraisRHSOL").innerHTML = formatter2.format(fraisRHSOL);	
var tjmMobRHSOL = url.searchParams.get("tjm");
var fraisMobRHSOL = url.searchParams.get("frais");
var salaireMobRHSOL = url.searchParams.get("salaire");
var nbJoursMobRHSOL = "20";
var caMobRHSOL = tjmMobRHSOL * nbJoursMobRHSOL ;
var societeMobRHSOL = 49.34;
var caCalculeMobRHSOL = caMobRHSOL ;
var cainto100MobRHSOL = caMobRHSOL / 100 ;
var remunerationMobRHSOL = cainto100MobRHSOL * societeMobRHSOL ;
var remunerationCalculeMobRHSOL = remunerationMobRHSOL ;
//document.getElementById("mySocieteMob3").innerHTML = societeMobRHSOL + "%";
//document.getElementById("myRemTotaleMob3").innerHTML = formatter1.format(remunerationMobRHSOL);

/************************ PORTAGEO (4) *************************/

var tjmPORTAGEO = url.searchParams.get("tjm");
var fraisPORTAGEO = url.searchParams.get("frais");
var salairePORTAGEO = url.searchParams.get("salaire");
var nbJoursPORTAGEO = document.getElementById("nbJoursPORTAGEO").innerHTML = "20";
var caPORTAGEO = tjmPORTAGEO * nbJoursPORTAGEO ;
var societePORTAGEO = 49.57;
var caCalculePORTAGEO = caPORTAGEO ;
var cainto100PORTAGEO = caPORTAGEO / 100 ;
var remunerationPORTAGEO = cainto100PORTAGEO * societePORTAGEO ;
var remunerationCalculePORTAGEO = remunerationPORTAGEO ;
document.getElementById("mySocietePORTAGEO").innerHTML = societePORTAGEO + "%";
document.getElementById("myRemTotalePORTAGEO").innerHTML = formatter1.format(remunerationPORTAGEO);
document.getElementById("myTjmPORTAGEO").innerHTML = formatter2.format(tjmPORTAGEO); 
document.getElementById("caTotalPORTAGEO").innerHTML = formatter2.format(caPORTAGEO);	
document.getElementById("myFraisPORTAGEO").innerHTML = formatter2.format(fraisPORTAGEO);	
var tjmMobPORTAGEO = url.searchParams.get("tjm");
var fraisMobPORTAGEO = url.searchParams.get("frais");
var salaireMobPORTAGEO = url.searchParams.get("salaire");
var nbJoursMobPORTAGEO = "20";
var caMobPORTAGEO = tjmMobPORTAGEO * nbJoursMobPORTAGEO ;
var societeMobPORTAGEO = 49.57;
var caCalculeMobPORTAGEO = caMobPORTAGEO ;
var cainto100MobPORTAGEO = caMobPORTAGEO / 100 ;
var remunerationMobPORTAGEO = cainto100MobPORTAGEO * societeMobPORTAGEO ;
var remunerationCalculeMobPORTAGEO = remunerationMobPORTAGEO ;
//document.getElementById("mySocieteMob4").innerHTML = societeMobPORTAGEO + "%";
//document.getElementById("myRemTotaleMob4").innerHTML = formatter1.format(remunerationMobPORTAGEO);

/************************ EP PORTAGE (5) *************************/

var tjmEPPORTAGE = url.searchParams.get("tjm");
var fraisEPPORTAGE = url.searchParams.get("frais");
var salaireEPPORTAGE = url.searchParams.get("salaire");
var nbJoursEPPORTAGE = document.getElementById("nbJoursEPPORTAGE").innerHTML = "20";
var caEPPORTAGE = tjmEPPORTAGE * nbJoursEPPORTAGE ;
var societeEPPORTAGE = 49.62;
var caCalculeEPPORTAGE = caEPPORTAGE ;
var cainto100EPPORTAGE = caEPPORTAGE / 100 ;
var remunerationEPPORTAGE = cainto100EPPORTAGE * societeEPPORTAGE ;
var remunerationCalculeEPPORTAGE = remunerationEPPORTAGE ;
document.getElementById("mySocieteEPPORTAGE").innerHTML = societeEPPORTAGE + "%";
document.getElementById("myRemTotaleEPPORTAGE").innerHTML = formatter1.format(remunerationEPPORTAGE);
document.getElementById("myTjmEPPORTAGE").innerHTML = formatter2.format(tjmEPPORTAGE); 
document.getElementById("caTotalEPPORTAGE").innerHTML = formatter2.format(caEPPORTAGE);	
document.getElementById("myFraisEPPORTAGE").innerHTML = formatter2.format(fraisEPPORTAGE);
var tjmMobEPPORTAGE = url.searchParams.get("tjm");
var fraisMobEPPORTAGE = url.searchParams.get("frais");
var salaireMobEPPORTAGE = url.searchParams.get("salaire");
var nbJoursMobEPPORTAGE = "20";
var caMobEPPORTAGE = tjmMobEPPORTAGE * nbJoursMobEPPORTAGE ;
var societeMobEPPORTAGE = 49.62;
var caCalculeMobEPPORTAGE = caMobEPPORTAGE ;
var cainto100MobEPPORTAGE = caMobEPPORTAGE / 100 ;
var remunerationMobEPPORTAGE = cainto100MobEPPORTAGE * societeMobEPPORTAGE ;
var remunerationCalculeMobEPPORTAGE = remunerationMobEPPORTAGE ;
//document.getElementById("mySocieteMob5").innerHTML = societeMobEPPORTAGE + "%";
//document.getElementById("myRemTotaleMob5").innerHTML = formatter1.format(remunerationMobEPPORTAGE);

/************************ ADMISSIONS (6) *************************/

var tjmADMISSIONS = url.searchParams.get("tjm");
var fraisADMISSIONS = url.searchParams.get("frais");
var salaireADMISSIONS = url.searchParams.get("salaire");
var nbJoursADMISSIONS = document.getElementById("nbJoursADMISSIONS").innerHTML = "20";
var caADMISSIONS = tjmADMISSIONS * nbJoursADMISSIONS ;
var societeADMISSIONS = 49.90;
var caCalculeADMISSIONS = caADMISSIONS ;
var cainto100ADMISSIONS = caADMISSIONS / 100 ;
var remunerationADMISSIONS = cainto100ADMISSIONS * societeADMISSIONS ;
var remunerationCalculeADMISSIONS = remunerationADMISSIONS ;
document.getElementById("mySocieteADMISSIONS").innerHTML = societeADMISSIONS + "%";
document.getElementById("myRemTotaleADMISSIONS").innerHTML = formatter1.format(remunerationADMISSIONS);
document.getElementById("myTjmADMISSIONS").innerHTML = formatter2.format(tjmADMISSIONS); 
document.getElementById("caTotalADMISSIONS").innerHTML = formatter2.format(caADMISSIONS);	
document.getElementById("myFraisADMISSIONS").innerHTML = formatter2.format(fraisADMISSIONS);	
var tjmMobADMISSIONS = url.searchParams.get("tjm");
var fraisMobADMISSIONS = url.searchParams.get("frais");
var salaireMobADMISSIONS = url.searchParams.get("salaire");
var nbJoursMobADMISSIONS = "20";
var caMobADMISSIONS = tjmMobADMISSIONS * nbJoursMobADMISSIONS ;
var societeMobADMISSIONS = 49.90;
var caCalculeMobADMISSIONS = caMobADMISSIONS ;
var cainto100MobADMISSIONS = caMobADMISSIONS / 100 ;
var remunerationMobADMISSIONS = cainto100MobADMISSIONS * societeMobADMISSIONS ;
var remunerationCalculeMobADMISSIONS = remunerationMobADMISSIONS ;
//document.getElementById("mySocieteMob6").innerHTML = societeMobADMISSIONS + "%";
//document.getElementById("myRemTotaleMob6").innerHTML = formatter1.format(remunerationMobADMISSIONS);

/************************ KINGURLEY (7) *************************/

var tjmKINGURLEY = url.searchParams.get("tjm");
var fraisKINGURLEY = url.searchParams.get("frais");
var salaireKINGURLEY = url.searchParams.get("salaire");
var nbJoursKINGURLEY = document.getElementById("nbJoursKINGURLEY").innerHTML = "20";
var caKINGURLEY = tjmKINGURLEY * nbJoursKINGURLEY ;
var societeKINGURLEY = 50.00;
var caCalculeKINGURLEY = caKINGURLEY ;
var cainto100KINGURLEY = caKINGURLEY / 100 ;
var remunerationKINGURLEY = cainto100KINGURLEY * societeKINGURLEY ;
var remunerationCalculeKINGURLEY = remunerationKINGURLEY ;
document.getElementById("mySocieteKINGURLEY").innerHTML = societeKINGURLEY + "%";
document.getElementById("myRemTotaleKINGURLEY").innerHTML = formatter1.format(remunerationKINGURLEY);
document.getElementById("myTjmKINGURLEY").innerHTML = formatter2.format(tjmKINGURLEY); 
document.getElementById("caTotalKINGURLEY").innerHTML = formatter2.format(caKINGURLEY);	
document.getElementById("myFraisKINGURLEY").innerHTML = formatter2.format(fraisKINGURLEY);	
var tjmMobKINGURLEY = url.searchParams.get("tjm");
var fraisMobKINGURLEY = url.searchParams.get("frais");
var salaireMobKINGURLEY = url.searchParams.get("salaire");
var nbJoursMobKINGURLEY = "20";
var caMobKINGURLEY = tjmMobKINGURLEY * nbJoursMobKINGURLEY ;
var societeMobKINGURLEY = 50.00;
var caCalculeMobKINGURLEY = caMobKINGURLEY ;
var cainto100MobKINGURLEY = caMobKINGURLEY / 100 ;
var remunerationMobKINGURLEY = cainto100MobKINGURLEY * societeMobKINGURLEY ;
var remunerationCalculeMobKINGURLEY = remunerationMobKINGURLEY ;
//document.getElementById("mySocieteMob7").innerHTML = societeMobKINGURLEY + "%";
//document.getElementById("myRemTotaleMob7").innerHTML = formatter1.format(remunerationMobKINGURLEY);

/************************ PRIUM PORTAGE (8) *************************/

var tjmPRIUM = url.searchParams.get("tjm");
var fraisPRIUM = url.searchParams.get("frais");
var salairePRIUM = url.searchParams.get("salaire");
var nbJoursPRIUM = document.getElementById("nbJoursPRIUM").innerHTML = "20";
var caPRIUM = tjmPRIUM * nbJoursPRIUM ;
var societePRIUM = 50.00;
var caCalculePRIUM = caPRIUM ;
var cainto100PRIUM = caPRIUM / 100 ;
var remunerationPRIUM = cainto100PRIUM * societePRIUM ;
var remunerationCalculePRIUM = remunerationPRIUM ;
document.getElementById("mySocietePRIUM").innerHTML = societePRIUM + "%";
document.getElementById("myRemTotalePRIUM").innerHTML = formatter1.format(remunerationPRIUM);
document.getElementById("myTjmPRIUM").innerHTML = formatter2.format(tjmPRIUM); 
document.getElementById("caTotalPRIUM").innerHTML = formatter2.format(caPRIUM);	
document.getElementById("myFraisPRIUM").innerHTML = formatter2.format(fraisPRIUM);	
var tjmMobPRIUM = url.searchParams.get("tjm");
var fraisMobPRIUM = url.searchParams.get("frais");
var salaireMobPRIUM = url.searchParams.get("salaire");
var nbJoursMobPRIUM = "20";
var caMobPRIUM = tjmMobPRIUM * nbJoursMobPRIUM ;
var societeMobPRIUM = 50.00;
var caCalculeMobPRIUM = caMobPRIUM ;
var cainto100MobPRIUM = caMobPRIUM / 100 ;
var remunerationMobPRIUM = cainto100MobPRIUM * societeMobPRIUM ;
var remunerationCalculeMobPRIUM = remunerationMobPRIUM ;
//document.getElementById("mySocieteMob8").innerHTML = societeMobPRIUM + "%";
//document.getElementById("myRemTotaleMob8").innerHTML = formatter1.format(remunerationMobPRIUM);

/************************ EGS PORTAGE (10) *************************/

var tjmEGS = url.searchParams.get("tjm");
var fraisEGS = url.searchParams.get("frais");
var salaireEGS = url.searchParams.get("salaire");
var nbJoursEGS = document.getElementById("nbJoursEGS").innerHTML = "20";
var caEGS = tjmEGS * nbJoursEGS ;
var societeEGS = 50.50;
var caCalculeEGS = caEGS ;
var cainto100EGS = caEGS / 100 ;
var remunerationEGS = cainto100EGS * societeEGS ;
var remunerationCalculeEGS = remunerationEGS ;
document.getElementById("mySocieteEGS").innerHTML = societeEGS + "%";
document.getElementById("myRemTotaleEGS").innerHTML = formatter1.format(remunerationEGS);
document.getElementById("myTjmEGS").innerHTML = formatter2.format(tjmEGS); 
document.getElementById("caTotalEGS").innerHTML = formatter2.format(caEGS);	
document.getElementById("myFraisEGS").innerHTML = formatter2.format(fraisEGS);	
var tjmMobEGS = url.searchParams.get("tjm");
var fraisMobEGS = url.searchParams.get("frais");
var salaireMobEGS = url.searchParams.get("salaire");
var nbJoursMobEGS = "20";
var caMobEGS = tjmMobEGS * nbJoursMobEGS ;
var societeMobEGS = 50.50;
var caCalculeMobEGS = caMobEGS ;
var cainto100MobEGS = caMobEGS / 100 ;
var remunerationMobEGS = cainto100MobEGS * societeMobEGS ;
var remunerationCalculeMobEGS = remunerationMobEGS ;
//document.getElementById("mySocieteMob10").innerHTML = societeMobEGS + "%";
//document.getElementById("myRemTotaleMob10").innerHTML = formatter1.format(remunerationMobEGS);

/************************ DIDAXIS (11) *************************/

var tjmDIDAXIS = url.searchParams.get("tjm");
var fraisDIDAXIS = url.searchParams.get("frais");
var salaireDIDAXIS = url.searchParams.get("salaire");
var nbJoursDIDAXIS = document.getElementById("nbJoursDIDAXIS").innerHTML = "20";
var caDIDAXIS = tjmDIDAXIS * nbJoursDIDAXIS ;
var societeDIDAXIS = 50.53;
var caCalculeDIDAXIS = caDIDAXIS ;
var cainto110DIDAXIS = caDIDAXIS / 110 ;
var remunerationDIDAXIS = cainto110DIDAXIS * societeDIDAXIS ;
var remunerationCalculeDIDAXIS = remunerationDIDAXIS ;
document.getElementById("mySocieteDIDAXIS").innerHTML = societeDIDAXIS + "%";
document.getElementById("myRemTotaleDIDAXIS").innerHTML = formatter1.format(remunerationDIDAXIS);
document.getElementById("myTjmDIDAXIS").innerHTML = formatter2.format(tjmDIDAXIS); 
document.getElementById("caTotalDIDAXIS").innerHTML = formatter2.format(caDIDAXIS);	
document.getElementById("myFraisDIDAXIS").innerHTML = formatter2.format(fraisDIDAXIS);	
var tjmMobDIDAXIS = url.searchParams.get("tjm");
var fraisMobDIDAXIS = url.searchParams.get("frais");
var salaireMobDIDAXIS = url.searchParams.get("salaire");
var nbJoursMobDIDAXIS = "20";
var caMobDIDAXIS = tjmMobDIDAXIS * nbJoursMobDIDAXIS ;
var societeMobDIDAXIS = 50.53;
var caCalculeMobDIDAXIS = caMobDIDAXIS ;
var cainto110MobDIDAXIS = caMobDIDAXIS / 110 ;
var remunerationMobDIDAXIS = cainto110MobDIDAXIS * societeMobDIDAXIS ;
var remunerationCalculeMobDIDAXIS = remunerationMobDIDAXIS ;
//document.getElementById("mySocieteMob11").innerHTML = societeMobDIDAXIS + "%";
//document.getElementById("myRemTotaleMob11").innerHTML = formatter1.format(remunerationMobDIDAXIS);

/************************ JAM (13) *************************/

var tjmJAM = url.searchParams.get("tjm");
var fraisJAM = url.searchParams.get("frais");
var salaireJAM = url.searchParams.get("salaire");
var nbJoursJAM = document.getElementById("nbJoursJAM").innerHTML = "20";
var caJAM = tjmJAM * nbJoursJAM ;
  var societeJAM = 50.60;
var caCalculeJAM = caJAM ;
var cainto130JAM = caJAM / 130 ;
var remunerationJAM = cainto130JAM * societeJAM ;
var remunerationCalculeJAM = remunerationJAM ;
document.getElementById("mySocieteJAM").innerHTML = societeJAM + "%";
document.getElementById("myRemTotaleJAM").innerHTML = formatter1.format(remunerationJAM);
document.getElementById("myTjmJAM").innerHTML = formatter2.format(tjmJAM); 
document.getElementById("caTotalJAM").innerHTML = formatter2.format(caJAM);	
document.getElementById("myFraisJAM").innerHTML = formatter2.format(fraisJAM);	
var tjmMobJAM = url.searchParams.get("tjm");
var fraisMobJAM = url.searchParams.get("frais");
var salaireMobJAM = url.searchParams.get("salaire");
var nbJoursMobJAM = "20";
var caMobJAM = tjmMobJAM * nbJoursMobJAM ;
  var societeMobJAM = 50.60;
var caCalculeMobJAM = caMobJAM ;
var cainto130MobJAM = caMobJAM / 130 ;
var remunerationMobJAM = cainto130MobJAM * societeMobJAM ;
var remunerationCalculeMobJAM = remunerationMobJAM ;
//document.getElementById("mySocieteMob13").innerHTML = societeMobJAM + "%";
//document.getElementById("myRemTotaleMob13").innerHTML = formatter1.format(remunerationMobJAM);

/************************ BE PORTAGE (14) *************************/

var tjmBEPORTAGE = url.searchParams.get("tjm");
var fraisBEPORTAGE = url.searchParams.get("frais");
var salaireBEPORTAGE = url.searchParams.get("salaire");
var nbJoursBEPORTAGE = document.getElementById("nbJoursBEPORTAGE").innerHTML = "20";
var caBEPORTAGE = tjmBEPORTAGE * nbJoursBEPORTAGE ;
var societeBEPORTAGE = 50.76;
var caCalculeBEPORTAGE = caBEPORTAGE ;
var cainto140BEPORTAGE = caBEPORTAGE / 140 ;
var remunerationBEPORTAGE = cainto140BEPORTAGE * societeBEPORTAGE ;
var remunerationCalculeBEPORTAGE = remunerationBEPORTAGE ;
var remunerationAnnuelleBEPORTAGE = remunerationCalculeBEPORTAGE * 12;
document.getElementById("mySocieteBEPORTAGE").innerHTML = societeBEPORTAGE + "%";
document.getElementById("myRemTotaleBEPORTAGE").innerHTML = formatter1.format(remunerationBEPORTAGE);
document.getElementById("myTjmBEPORTAGE").innerHTML = formatter2.format(tjmBEPORTAGE); 
document.getElementById("caTotalBEPORTAGE").innerHTML = formatter2.format(caBEPORTAGE);	
document.getElementById("myFraisBEPORTAGE").innerHTML = formatter2.format(fraisBEPORTAGE);	
var tjmMobBEPORTAGE = url.searchParams.get("tjm");
var fraisMobBEPORTAGE = url.searchParams.get("frais");
var salaireMobBEPORTAGE = url.searchParams.get("salaire");
var nbJoursMobBEPORTAGE = "20";
var caMobBEPORTAGE = tjmMobBEPORTAGE * nbJoursMobBEPORTAGE ;
var societeMobBEPORTAGE = 50.76;
var caCalculeMobBEPORTAGE = caMobBEPORTAGE ;
var cainto140MobBEPORTAGE = caMobBEPORTAGE / 140 ;
var remunerationMobBEPORTAGE = cainto140MobBEPORTAGE * societeMobBEPORTAGE ;
var remunerationCalculeMobBEPORTAGE = remunerationMobBEPORTAGE ;
//document.getElementById("mySocieteMob14").innerHTML = societeMobBEPORTAGE + "%";
//document.getElementById("myRemTotaleMob14").innerHTML = formatter1.format(remunerationMobBEPORTAGE);

/************************ 2iPORTAGE (15) *************************/

var tjm2iPORTAGE = url.searchParams.get("tjm");
var frais2iPORTAGE = url.searchParams.get("frais");
var salaire2iPORTAGE = url.searchParams.get("salaire");
var nbJours2iPORTAGE = document.getElementById("nbJours2iPORTAGE").innerHTML = "20";
var ca2iPORTAGE = tjm2iPORTAGE * nbJours2iPORTAGE ;
var societe2iPORTAGE = 51.00;
var caCalcule2iPORTAGE = ca2iPORTAGE ;
var cainto1502iPORTAGE = ca2iPORTAGE / 150 ;
var remuneration2iPORTAGE = cainto1502iPORTAGE * societe2iPORTAGE ;
var remunerationCalcule2iPORTAGE = remuneration2iPORTAGE ;
document.getElementById("mySociete2iPORTAGE").innerHTML = societe2iPORTAGE + "%";
document.getElementById("myRemTotale2iPORTAGE").innerHTML = formatter1.format(remuneration2iPORTAGE);
document.getElementById("myTjm2iPORTAGE").innerHTML = formatter2.format(tjm2iPORTAGE); 
document.getElementById("caTotal2iPORTAGE").innerHTML = formatter2.format(ca2iPORTAGE);	
document.getElementById("myFrais2iPORTAGE").innerHTML = formatter2.format(frais2iPORTAGE);	
var tjmMob2iPORTAGE = url.searchParams.get("tjm");
var fraisMob2iPORTAGE = url.searchParams.get("frais");
var salaireMob2iPORTAGE = url.searchParams.get("salaire");
var nbJoursMob2iPORTAGE = "20";
var caMob2iPORTAGE = tjmMob2iPORTAGE * nbJoursMob2iPORTAGE ;
var societeMob2iPORTAGE = 51.00;
var caCalculeMob2iPORTAGE = caMob2iPORTAGE ;
var cainto150Mob2iPORTAGE = caMob2iPORTAGE / 150 ;
var remunerationMob2iPORTAGE = cainto150Mob2iPORTAGE * societeMob2iPORTAGE ;
var remunerationCalculeMob2iPORTAGE = remunerationMob2iPORTAGE ;
//document.getElementById("mySocieteMob15").innerHTML = societeMob2iPORTAGE + "%";
//document.getElementById("myRemTotaleMob15").innerHTML = formatter1.format(remunerationMob2iPORTAGE);

/************************ LABEL VIE (16) *************************/

var tjmLABELVIE = url.searchParams.get("tjm");
var fraisLABELVIE = url.searchParams.get("frais");
var salaireLABELVIE = url.searchParams.get("salaire");
var nbJoursLABELVIE = document.getElementById("nbJoursLABELVIE").innerHTML = "20";
var caLABELVIE = tjmLABELVIE * nbJoursLABELVIE ;
var societeLABELVIE = 51.10;
var caCalculeLABELVIE = caLABELVIE ;
var cainto160LABELVIE = caLABELVIE / 160 ;
var remunerationLABELVIE = cainto160LABELVIE * societeLABELVIE ;
var remunerationCalculeLABELVIE = remunerationLABELVIE ;
document.getElementById("mySocieteLABELVIE").innerHTML = societeLABELVIE + "%";
document.getElementById("myRemTotaleLABELVIE").innerHTML = formatter1.format(remunerationLABELVIE);
document.getElementById("myTjmLABELVIE").innerHTML = formatter2.format(tjmLABELVIE); 
document.getElementById("caTotalLABELVIE").innerHTML = formatter2.format(caLABELVIE);	
document.getElementById("myFraisLABELVIE").innerHTML = formatter2.format(fraisLABELVIE);	
var tjmMobLABELVIE = url.searchParams.get("tjm");
var fraisMobLABELVIE = url.searchParams.get("frais");
var salaireMobLABELVIE = url.searchParams.get("salaire");
var nbJoursMobLABELVIE = "20";
var caMobLABELVIE = tjmMobLABELVIE * nbJoursMobLABELVIE ;
var societeMobLABELVIE = 51.10;
var caCalculeMobLABELVIE = caMobLABELVIE ;
var cainto160MobLABELVIE = caMobLABELVIE / 160 ;
var remunerationMobLABELVIE = cainto160MobLABELVIE * societeMobLABELVIE ;
var remunerationCalculeMobLABELVIE = remunerationMobLABELVIE ;
//document.getElementById("mySocieteMob16").innerHTML = societeMobLABELVIE + "%";
//document.getElementById("myRemTotaleMob16").innerHTML = formatter1.format(remunerationMobLABELVIE);

/************************ UMALIS GROUP (18) *************************/

var tjmUMALIS = url.searchParams.get("tjm");
var fraisUMALIS = url.searchParams.get("frais");
var salaireUMALIS = url.searchParams.get("salaire");
var nbJoursUMALIS = document.getElementById("nbJoursUMALIS").innerHTML = "20";
var caUMALIS = tjmUMALIS * nbJoursUMALIS ;
var societeUMALIS = 55.16;
var caCalculeUMALIS = caUMALIS ;
var cainto180UMALIS = caUMALIS / 180 ;
var remunerationUMALIS = cainto180UMALIS * societeUMALIS ;
var remunerationCalculeUMALIS = remunerationUMALIS ;
document.getElementById("mySocieteUMALIS").innerHTML = societeUMALIS + "%";
document.getElementById("myRemTotaleUMALIS").innerHTML = formatter1.format(remunerationUMALIS);
document.getElementById("myTjmUMALIS").innerHTML = formatter2.format(tjmUMALIS); 
document.getElementById("caTotalUMALIS").innerHTML = formatter2.format(caUMALIS);	
document.getElementById("myFraisUMALIS").innerHTML = formatter2.format(fraisUMALIS);	
var tjmMobUMALIS = url.searchParams.get("tjm");
var fraisMobUMALIS = url.searchParams.get("frais");
var salaireMobUMALIS = url.searchParams.get("salaire");
var nbJoursMobUMALIS = "20";
var caMobUMALIS = tjmMobUMALIS * nbJoursMobUMALIS ;
var societeMobUMALIS = 55.16;
var caCalculeMob18 = caMobUMALIS ;
var cainto180MobUMALIS = caMobUMALIS / 180 ;
var remunerationMobUMALIS = cainto180MobUMALIS * societeMobUMALIS ;
var remunerationCalculeMobUMALIS = remunerationMobUMALIS ;
//document.getElementById("mySocieteMob18").innerHTML = societeMobUMALIS + "%";
//document.getElementById("myRemTotaleMob18").innerHTML = formatter1.format(remunerationMobUMALIS);

/************************ HIGHTEKERS (19) *************************/

var tjmHIGHTEKERS = url.searchParams.get("tjm");
var fraisHIGHTEKERS = url.searchParams.get("frais");
var salaireHIGHTEKERS = url.searchParams.get("salaire");
var nbJoursHIGHTEKERS = document.getElementById("nbJoursHIGHTEKERS").innerHTML = "20";
var caHIGHTEKERS = tjmHIGHTEKERS * nbJoursHIGHTEKERS ;
var societeHIGHTEKERS = 65.00;
var caCalculeHIGHTEKERS = caHIGHTEKERS ;
var cainto190HIGHTEKERS = caHIGHTEKERS / 190 ;
var remunerationHIGHTEKERS = cainto190HIGHTEKERS * societeHIGHTEKERS ;
var remunerationCalculeHIGHTEKERS = remunerationHIGHTEKERS ;
document.getElementById("mySocieteHIGHTEKERS").innerHTML = societeHIGHTEKERS + "%";
document.getElementById("myRemTotaleHIGHTEKERS").innerHTML = formatter1.format(remunerationHIGHTEKERS);
document.getElementById("myTjmHIGHTEKERS").innerHTML = formatter2.format(tjmHIGHTEKERS); 
document.getElementById("caTotalHIGHTEKERS").innerHTML = formatter2.format(caHIGHTEKERS);	
document.getElementById("myFraisHIGHTEKERS").innerHTML = formatter2.format(fraisHIGHTEKERS);
var tjmMobHIGHTEKERS = url.searchParams.get("tjm");
var fraisMobHIGHTEKERS = url.searchParams.get("frais");
var salaireMobHIGHTEKERS = url.searchParams.get("salaire");
var nbJoursMobHIGHTEKERS = "20";
var caMobHIGHTEKERS = tjmMobHIGHTEKERS * nbJoursMobHIGHTEKERS ;
var societeMobHIGHTEKERS = 65.00;
var caCalculeMobHIGHTEKERS = caMobHIGHTEKERS ;
var cainto190MobHIGHTEKERS = caMobHIGHTEKERS / 190 ;
var remunerationMobHIGHTEKERS = cainto190MobHIGHTEKERS * societeMobHIGHTEKERS ;
var remunerationCalculeMobHIGHTEKERS = remunerationMobHIGHTEKERS ;
//document.getElementById("mySocieteMob19").innerHTML = societeMobHIGHTEKERS + "%";
//document.getElementById("myRemTotaleMob19").innerHTML = formatter1.format(remunerationMobHIGHTEKERS);

/************************ GARDEN IT (21) *************************/

var tjmGARDENIT = url.searchParams.get("tjm");
var fraisGARDENIT = url.searchParams.get("frais");
var salaireGARDENIT = url.searchParams.get("salaire");
var nbJoursGARDENIT= document.getElementById("nbJoursGARDENIT").innerHTML = "20";
var caGARDENIT = tjmGARDENIT * nbJoursGARDENIT ;
var societeGARDENIT = 70.00;
var caCalculeGARDENIT = caGARDENIT ;
var cainto190GARDENIT = caGARDENIT / 190 ;
var remunerationGARDENIT = cainto190GARDENIT * societeGARDENIT ;
var remunerationCalculeGARDENIT = remunerationGARDENIT ;
document.getElementById("mySocieteGARDENIT").innerHTML = societeGARDENIT + "%";
document.getElementById("myRemTotaleGARDENIT").innerHTML = formatter1.format(remunerationGARDENIT);
document.getElementById("myTjmGARDENIT").innerHTML = formatter2.format(tjmGARDENIT); 
document.getElementById("caTotalGARDENIT").innerHTML = formatter2.format(caGARDENIT);	
document.getElementById("myFraisGARDENIT").innerHTML = formatter2.format(fraisGARDENIT);
var tjmMobGARDENIT = url.searchParams.get("tjm");
var fraisMobGARDENIT = url.searchParams.get("frais");
var salaireMobGARDENIT = url.searchParams.get("salaire");
var nbJoursMobGARDENIT = "20";
var caMobGARDENIT = tjmMobGARDENIT * nbJoursMobGARDENIT ;
var societeMobGARDENIT = 70.00;
var caCalculeMobGARDENIT = caMobGARDENIT ;
var cainto190MobGARDENIT = caMobGARDENIT / 190 ;
var remunerationMobGARDENIT = cainto190MobGARDENIT * societeMobGARDENIT ;
var remunerationCalculeMobGARDENIT = remunerationMobGARDENIT ;
//document.getElementById("mySocieteMob21").innerHTML = societeMobGARDENIT + "%";
//document.getElementById("myRemTotaleMob21").innerHTML = formatter1.format(remunerationMobGARDENIT);

/************************ PORTAGE LAB (22) *************************/

var tjmPORTAGELAB = url.searchParams.get("tjm");
var fraisPORTAGELAB = url.searchParams.get("frais");
var salairePORTAGELAB = url.searchParams.get("salaire");
var nbJoursPORTAGELAB= document.getElementById("nbJoursPORTAGELAB").innerHTML = "20";
var caPORTAGELAB = tjmPORTAGELAB * nbJoursPORTAGELAB ;
var societePORTAGELAB = 70.00;
var caCalculePORTAGELAB = caPORTAGELAB ;
var cainto190PORTAGELAB = caPORTAGELAB / 190 ;
var remunerationPORTAGELAB = cainto190PORTAGELAB * societePORTAGELAB ;
var remunerationCalculePORTAGELAB = remunerationPORTAGELAB ;
document.getElementById("mySocietePORTAGELAB").innerHTML = societePORTAGELAB + "%";
document.getElementById("myRemTotalePORTAGELAB").innerHTML = formatter1.format(remunerationPORTAGELAB);
document.getElementById("myTjmPORTAGELAB").innerHTML = formatter2.format(tjmPORTAGELAB); 
document.getElementById("caTotalPORTAGELAB").innerHTML = formatter2.format(caPORTAGELAB);	
document.getElementById("myFraisPORTAGELAB").innerHTML = formatter2.format(fraisPORTAGELAB);
var tjmMobPORTAGELAB = url.searchParams.get("tjm");
var fraisMobPORTAGELAB = url.searchParams.get("frais");
var salaireMobPORTAGELAB = url.searchParams.get("salaire");
var nbJoursMobPORTAGELAB = "20";
var caMobPORTAGELAB = tjmMobPORTAGELAB * nbJoursMobPORTAGELAB ;
var societeMobPORTAGELAB = 70.00;
var caCalculeMobPORTAGELAB = caMobPORTAGELAB ;
var cainto190MobPORTAGELAB = caMobPORTAGELAB / 190 ;
var remunerationMobPORTAGELAB = cainto190MobPORTAGELAB * societeMobPORTAGELAB ;
var remunerationCalculeMobPORTAGELAB = remunerationMobPORTAGELAB ;
//document.getElementById("mySocieteMobPORTAGELAB").innerHTML = societeMobPORTAGELAB + "%";
//document.getElementById("myRemTotaleMobPORTAGELAB").innerHTML = formatter1.format(remunerationMobPORTAGELAB);

