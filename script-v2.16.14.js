var url_string = window.location.href;
  var url = new URL(url_string);
  const formatter1 = new Intl.NumberFormat('fr-FR', {
  style: 'currency',currency: 'EUR',minimumFractionDigits: 2
})
const formatter2 = new Intl.NumberFormat('fr-FR', {
  style: 'currency', currency: 'EUR',minimumFractionDigits: 0
})

// Société EGS
var tjmEGS = url.searchParams.get("tjm");
var fraisEGS = url.searchParams.get("frais");
var salaireEGS = url.searchParams.get("salaire");
var nbJoursEGS = document.getElementById("nbJoursEGS").innerHTML = "20";
var caEGS = tjmEGS * nbJoursEGS ;
var caPourcentEGS;
var cainto100EGS = caEGS / 100;

if(tjmEGS <= 300 && tjmEGS < 320){
    caPourcentEGS = 56.08;
}
else if(320 <= tjmEGS && tjmEGS < 340){
    caPourcentEGS = 54.13;
}
else if(340 <= tjmEGS && tjmEGS < 360){
    caPourcentEGS = 53.83;
}
else if(360 <= tjmEGS && tjmEGS < 380){
    caPourcentEGS = 53.75;
}
else if(380 <= tjmEGS && tjmEGS < 400){
    caPourcentEGS = 53.68;
}
else if(400 <= tjmEGS && tjmEGS < 420){
    caPourcentEGS = 53.62;
}
else if(420 <= tjmEGS && tjmEGS < 440){
    caPourcentEGS = 53.56;
}
else if(440 <= tjmEGS && tjmEGS < 460){
    caPourcentEGS = 53.22;
}
else if(460 <= tjmEGS && tjmEGS < 480){
    caPourcentEGS = 52.85;
}
else if(480 <= tjmEGS && tjmEGS < 500){
    caPourcentEGS = 52.81;
}
else if(500 <= tjmEGS && tjmEGS < 520){
    caPourcentEGS = 53.32;
}
else if(520 <= tjmEGS && tjmEGS < 540){
    caPourcentEGS = 53.28;
}
else if(540 <= tjmEGS && tjmEGS < 560){
    caPourcentEGS = 53.24;
}
else if(560 <= tjmEGS && tjmEGS < 580){
    caPourcentEGS = 53.21;
}
else if(580 <= tjmEGS && tjmEGS < 600){
    caPourcentEGS = 53.18;
}
else if(600 <= tjmEGS && tjmEGS < 620){
    caPourcentEGS = 53.15;
}
else if(620 <= tjmEGS && tjmEGS < 640){
    caPourcentEGS = 53.12;
}
else if(640 <= tjmEGS && tjmEGS < 660){
    caPourcentEGS = 52.88;
}
else if(660 <= tjmEGS && tjmEGS < 680){
    caPourcentEGS = 53.07;
}
else if(680 <= tjmEGS && tjmEGS < 700){
    caPourcentEGS = 53.05;
}
else if(tjmEGS >= 700){
    caPourcentEGS = 53.03;
}
var remunerationEGS = cainto100EGS * caPourcentEGS;
document.getElementById("mySocieteEGS").innerHTML = caPourcentEGS + "%";
document.getElementById("myRemTotaleEGS").innerHTML = formatter1.format(remunerationEGS);
document.getElementById("myTjmEGS").innerHTML = formatter2.format(tjmEGS);
document.getElementById("caTotalEGS").innerHTML = formatter2.format(caEGS);
document.getElementById("myFraisEGS").innerHTML = formatter2.format(fraisEGS);


// Société Portageo

var tjmPortageo = url.searchParams.get("tjm");
var fraisPortageo = url.searchParams.get("frais");
var salairePortageo = url.searchParams.get("salaire");
var nbJoursPortageo = document.getElementById("nbJoursPortageo").innerHTML = "20";
var caPortageo = tjmPortageo * nbJoursPortageo ;
var caPourcentPortageo;
var cainto100Portageo = caPortageo / 100 ;

if(tjmPortageo <= 300 && tjmPortageo < 320){
    caPourcentPortageo = 50.58;
}
else if(320 <= tjmPortageo && tjmPortageo < 340){
    caPourcentPortageo = 50.45;
}
else if(340 <= tjmPortageo && tjmPortageo < 360){
    caPourcentPortageo = 50.35;
}
else if(360 <= tjmPortageo && tjmPortageo < 380){
    caPourcentPortageo = 50.24;
}
else if(380 <= tjmPortageo && tjmPortageo < 400){
    caPourcentPortageo = 50.14;
}
else if(400 <= tjmPortageo && tjmPortageo < 420){
    caPourcentPortageo = 50.06;
}
else if(420 <= tjmPortageo && tjmPortageo < 440){
    caPourcentPortageo = 49.99;
}
else if(440 <= tjmPortageo && tjmPortageo < 460){
    caPourcentPortageo = 50.07;
}
else if(460 <= tjmPortageo && tjmPortageo < 480){
    caPourcentPortageo = 50.16;
}
else if(480 <= tjmPortageo && tjmPortageo < 500){
    caPourcentPortageo = 50.24;
}
else if(500 <= tjmPortageo && tjmPortageo < 520){
    caPourcentPortageo = 50.32;
}
else if(520 <= tjmPortageo && tjmPortageo < 540){
    caPourcentPortageo = 50.39;
}
else if(540 <= tjmPortageo && tjmPortageo < 560){
    caPourcentPortageo = 50.45;
}
else if(560 <= tjmPortageo && tjmPortageo < 580){
    caPourcentPortageo = 50.52;
}
else if(580 <= tjmPortageo && tjmPortageo < 600){
    caPourcentPortageo = 50.57;
}
else if(600 <= tjmPortageo && tjmPortageo < 620){
    caPourcentPortageo = 50.62;
}
else if(620 <= tjmPortageo && tjmPortageo < 640){
    caPourcentPortageo = 50.67;
}  
else if(640 <= tjmPortageo && tjmPortageo < 660){
    caPourcentPortageo = 50.71;
}
else if(660 <= tjmPortageo && tjmPortageo < 680){
    caPourcentPortageo = 50.75;
}
else if(680 <= tjmPortageo && tjmPortageo < 700){
    caPourcentPortageo = 50.80;
}
else if(tjmPortageo >= 700){
    caPourcentPortageo = 50.84;
}
var remunerationPortageo = cainto100Portageo * caPourcentPortageo;
document.getElementById("mySocietePortageo").innerHTML = caPourcentPortageo + "%";
document.getElementById("myRemTotalePortageo").innerHTML = formatter1.format(remunerationPortageo);
document.getElementById("myTjmPortageo").innerHTML = formatter2.format(tjmPortageo);
document.getElementById("caTotalPortageo").innerHTML = formatter2.format(caPortageo);
document.getElementById("myFraisPortageo").innerHTML = formatter2.format(fraisPortageo);


// Société Portup

var tjmPortup = url.searchParams.get("tjm");
var fraisPortup = url.searchParams.get("frais");
var salairePortup = url.searchParams.get("salaire");
var nbJoursPortup = document.getElementById("nbJoursPortup").innerHTML = "20";
var caPortup = tjmPortup * nbJoursPortup ;
var caPourcentPortup;
var cainto100Portup = caPortup / 100 ;
if(tjmPortup <= 300 & tjmPortup < 320){
    caPourcentPortup = 51.40;
}
else if(320 <= tjmPortup && tjmPortup < 340){
    caPourcentPortup = 51.23;
}
else if(340 <= tjmPortup && tjmPortup < 360){
    caPourcentPortup = 51.07;
}
else if(360 <= tjmPortup && tjmPortup < 380){
    caPourcentPortup = 50.94;
}
else if(380 <= tjmPortup && tjmPortup < 400){
    caPourcentPortup = 50.82;
}
else if(400 <= tjmPortup && tjmPortup < 420){    
    caPourcentPortup = 50.71;
}
else if(420 <= tjmPortup && tjmPortup < 440){
    caPourcentPortup = 50.62;
}
else if(440 <= tjmPortup && tjmPortup < 460){
    caPourcentPortup = 50.53;
}
else if(460 <= tjmPortup && tjmPortup < 480){
    caPourcentPortup = 50.45;
}
else if(480 <= tjmPortup && tjmPortup < 500){
    caPourcentPortup = 50.38;
}
else if(500 <= tjmPortup && tjmPortup < 520){
    caPourcentPortup = 50.31;
}
else if(520 <= tjmPortup && tjmPortup < 540){
    caPourcentPortup = 50.25;
}
else if(540 <= tjmPortup && tjmPortup < 560){
    caPourcentPortup = 50.19;
}
else if(560 <= tjmPortup && tjmPortup < 580){
    caPourcentPortup = 50.14;
}
else if(580 <= tjmPortup && tjmPortup < 600){
    caPourcentPortup = 50.09;
}
else if(600 <= tjmPortup && tjmPortup < 620){
    caPourcentPortup = 50.05;
}
else if(620 <= tjmPortup && tjmPortup< 640){
    caPourcentPortup = 49.99;
}
else if(640 <= tjmPortup && tjmPortup < 660){
    caPourcentPortup = 49.95;
}
else if(660 <= tjmPortup && tjmPortup < 680){
    caPourcentPortup = 49.91;
}
else if(680 <= tjmPortup && tjmPortup < 700){
    caPourcentPortup = 49.87;
}
else if(tjmPortup >= 700 ){
    caPourcentPortup = 49.83;
}
var remunerationPortup = cainto100Portup * caPourcentPortup;
document.getElementById("mySocietePortup").innerHTML = caPourcentPortup + "%";
document.getElementById("myRemTotalePortup").innerHTML = formatter1.format(remunerationPortup);
document.getElementById("myTjmPortup").innerHTML = formatter2.format(tjmPortup);
document.getElementById("caTotalPortup").innerHTML = formatter2.format(caPortup);
document.getElementById("myFraisPortup").innerHTML = formatter2.format(fraisPortup);


// Société Cegelem

var tjmCegelem = url.searchParams.get("tjm");
var fraisCegelem = url.searchParams.get("frais");
var salaireCegelem = url.searchParams.get("salaire");
var nbJoursCegelem = document.getElementById("nbJoursCegelem").innerHTML = "20";
var caCegelem = tjmCegelem * nbJoursCegelem ;
var caPourcentCegelem;
var cainto100Cegelem = caCegelem / 100 ;

if(tjmCegelem <= 300  && tjmCegelem < 320){
    caPourcentCegelem = 54.87;
}
else if(320 <= tjmCegelem && tjmCegelem < 340){
    caPourcentCegelem = 54.70;
}
else if(340 <= tjmCegelem && tjmCegelem < 360){
    caPourcentCegelem = 54.54;
}
else if(360 <= tjmCegelem && tjmCegelem < 380){
    caPourcentCegelem = 54.41;
}
else if(380 <= tjmCegelem && tjmCegelem < 400){
    caPourcentCegelem = 54.29;
}
else if(400 <= tjmCegelem && tjmCegelem < 420){
    caPourcentCegelem = 54.18;
}
else if(420 <= tjmCegelem && tjmCegelem < 440){
    caPourcentCegelem = 54.09;
}
else if(440 <= tjmCegelem && tjmCegelem < 460){
    caPourcentCegelem = 54.01;
}
else if(460 <= tjmCegelem && tjmCegelem < 480){
    caPourcentCegelem = 53.93;
}
else if(480 <= tjmCegelem && tjmCegelem < 500){
    caPourcentCegelem = 53.86;
}
else if(500 <= tjmCegelem && tjmCegelem < 520){
    caPourcentCegelem = 53.77;
}
else if(520 <= tjmCegelem && tjmCegelem < 540){
    caPourcentCegelem = 53.71;
}
else if(540 <= tjmCegelem && tjmCegelem < 560){
    caPourcentCegelem = 53.65;
}
else if(560 <= tjmCegelem && tjmCegelem < 580){
    caPourcentCegelem = 53.59;
}
else if(580 <= tjmCegelem && tjmCegelem < 600){
    caPourcentCegelem = 53.54;
}
else if(600 <= tjmCegelem && tjmCegelem < 620){
    caPourcentCegelem = 53.49;
}
else if(620 <= tjmCegelem && tjmCegelem < 640){
    caPourcentCegelem = 53.44;
}
else if(640 <= tjmCegelem && tjmCegelem < 660){
    caPourcentCegelem = 53.40;
}
else if(660 <= tjmCegelem && tjmCegelem < 680){
    caPourcentCegelem = 53.35;
}
else if(680 <= tjmCegelem && tjmCegelem < 700){
    caPourcentCegelem = 53.31;
}
else if(tjmCegelem >= 700 ){
    caPourcentCegelem = 53.30;
}
var remunerationCegelem = cainto100Cegelem * caPourcentCegelem;
document.getElementById("mySocieteCegelem").innerHTML = caPourcentCegelem + "%";
document.getElementById("myRemTotaleCegelem").innerHTML = formatter1.format(remunerationCegelem);
document.getElementById("myTjmCegelem").innerHTML = formatter2.format(tjmCegelem);
document.getElementById("caTotalCegelem").innerHTML = formatter2.format(caCegelem);
document.getElementById("myFraisCegelem").innerHTML = formatter2.format(fraisCegelem);

// Société LabelVie

var tjmLabelVie = url.searchParams.get("tjm");
var fraisLabelVie = url.searchParams.get("frais");
var salaireLabelVie = url.searchParams.get("salaire");
var nbJoursLabelVie = document.getElementById("nbJoursLabelVie").innerHTML = "20";
var caLabelVie = tjmLabelVie * nbJoursLabelVie ;
var caPourcentLabelVie;
var cainto100LabelVie = caLabelVie / 100 ;

if(tjmLabelVie <= 300  && tjmLabelVie < 320){
    caPourcentLabelVie = 49.24;
}
else if(320 <= tjmLabelVie && tjmLabelVie < 340){
    caPourcentLabelVie = 49.04;
}
else if(340 <= tjmLabelVie && tjmLabelVie < 360){
    caPourcentLabelVie = 48.85;
}
else if(360 <= tjmLabelVie && tjmLabelVie < 380){
    caPourcentLabelVie = 48.70;
}
else if(380 <= tjmLabelVie && tjmLabelVie < 400){
    caPourcentLabelVie = 48.56;
}
else if(400 <= tjmLabelVie && tjmLabelVie < 420){
    caPourcentLabelVie = 48.43;
}
else if(420 <= tjmLabelVie && tjmLabelVie < 440){
    caPourcentLabelVie = 48.31;
}
else if(440 <= tjmLabelVie && tjmLabelVie < 460){
    caPourcentLabelVie = 48.20;
}
else if(460 <= tjmLabelVie && tjmLabelVie < 480){
    caPourcentLabelVie = 48.10;
}
else if(480 <= tjmLabelVie && tjmLabelVie < 500){
    caPourcentLabelVie = 48.03;
}
else if(500 <= tjmLabelVie && tjmLabelVie < 520){
    caPourcentLabelVie = 47.95;
}
else if(520 <= tjmLabelVie && tjmLabelVie < 540){
    caPourcentLabelVie = 47.88;
}
else if(540 <= tjmLabelVie && tjmLabelVie < 560){
    caPourcentLabelVie = 47.82;
}
else if(560 <= tjmLabelVie && tjmLabelVie < 580){
    caPourcentLabelVie = 47.76;
}
else if(580 <= tjmLabelVie && tjmLabelVie < 600){
    caPourcentLabelVie = 47.68;
}
else if(600 <= tjmLabelVie && tjmLabelVie < 620){
    caPourcentLabelVie = 47.62;
}
else if(620 <= tjmLabelVie && tjmLabelVie < 640){
    caPourcentLabelVie = 47.57;
}
else if(640 <= tjmLabelVie && tjmLabelVie < 660){
    caPourcentLabelVie = 47.52;
}
else if(660 <= tjmLabelVie && tjmLabelVie < 680){
    caPourcentLabelVie = 47.47;
}
else if(680 <= tjmLabelVie && tjmLabelVie < 700){
    caPourcentLabelVie = 47.43;
}
else if(tjmLabelVie >= 700 ){
    caPourcentLabelVie = 47.39;
}
var remunerationLabelVie = cainto100LabelVie * caPourcentLabelVie;
document.getElementById("mySocieteLabelVie").innerHTML = caPourcentLabelVie + "%";
document.getElementById("myRemTotaleLabelVie").innerHTML = formatter1.format(remunerationLabelVie);
document.getElementById("myTjmLabelVie").innerHTML = formatter2.format(tjmLabelVie);
document.getElementById("caTotalLabelVie").innerHTML = formatter2.format(caLabelVie);
document.getElementById("myFraisLabelVie").innerHTML = formatter2.format(fraisLabelVie);


// Société BePortage

document.getElementById("myFraisGestionBePortage").addEventListener("change", updateBePortage);

var tjmBePortage = url.searchParams.get("tjm");
var fraisBePortage = url.searchParams.get("frais");
var salaireBePortage = url.searchParams.get("salaire");
var nbJoursBePortage = document.getElementById("nbJoursBePortage").innerHTML = "20";
var caBePortage = tjmBePortage * nbJoursBePortage;
var caPourcentBePortage;
var fraisGestionBePortage = 5;
var cainto100BePortage = caBePortage / 100;

// Frais de gestion

document.getElementById("myFraisGestionBePortage").value = fraisGestionBePortage;

function updateBePortage() { 
    fraisGestionBePortage = document.getElementById("myFraisGestionBePortage").value;
    if (fraisGestionBePortage == 5){
        if(tjmBePortage <= 300  && tjmBePortage < 320){
            caPourcentBePortage = 55.88;
        }
        else if(320 <= tjmBePortage && tjmBePortage < 340){
            caPourcentBePortage = 53.94;
        }
        else if(340 <= tjmBePortage && tjmBePortage < 360){
            caPourcentBePortage = 53.70;
        }
        else if(360 <= tjmBePortage && tjmBePortage < 380){
            caPourcentBePortage = 53.49;
        }
        else if(380 <= tjmBePortage && tjmBePortage < 400){
            caPourcentBePortage = 53.29;
        }
        else if(400 <= tjmBePortage && tjmBePortage < 420){
            caPourcentBePortage = 53.13;
        }
        else if(420 <= tjmBePortage && tjmBePortage < 440){
            caPourcentBePortage = 52.98;
        }
        else if(440 <= tjmBePortage && tjmBePortage < 460){
            caPourcentBePortage = 52.83;
        }
        else if(460 <= tjmBePortage && tjmBePortage < 480){
            caPourcentBePortage = 52.70;
        }
        else if(480 <= tjmBePortage && tjmBePortage < 500){
            caPourcentBePortage = 52.58;
        }
        else if(500 <= tjmBePortage && tjmBePortage < 520){
            caPourcentBePortage = 52.47;
        }
        else if(520 <= tjmBePortage && tjmBePortage < 540){
            caPourcentBePortage = 52.36;
        }
        else if(540 <= tjmBePortage && tjmBePortage < 560){
            caPourcentBePortage = 52.29;
        }
        else if(560 <= tjmBePortage && tjmBePortage < 580){
            caPourcentBePortage = 52.20;
        }
        else if(580 <= tjmBePortage && tjmBePortage < 600){
            caPourcentBePortage = 52.12;
        }
        else if(600 <= tjmBePortage && tjmBePortage < 620){
            caPourcentBePortage = 52.04;
        }
        else if(620 <= tjmBePortage && tjmBePortage < 640){
            caPourcentBePortage = 51.97;
        }
        else if(640 <= tjmBePortage && tjmBePortage < 660){
            caPourcentBePortage = 51.90;
        }
        else if(660 <= tjmBePortage && tjmBePortage < 680){
            caPourcentBePortage = 51.84;
        }
        else if(680 <= tjmBePortage && tjmBePortage < 700){
            caPourcentBePortage = 51.78;
        }
        else if(tjmBePortage >= 700){
            caPourcentBePortage = 51.73;
        }
    }
    // Frais de Gestion = 10
    else if (fraisGestionBePortage == 6){
        if (tjmBePortage <= 300  && tjmBePortage < 320){
            caPourcentBePortage = 53.69;
        }
        else if(320 <= tjmBePortage && tjmBePortage < 340){
            caPourcentBePortage = 53.42;
        }
        else if(340 <= tjmBePortage && tjmBePortage < 360){
            caPourcentBePortage = 53.17;
        }
        else if(360 <= tjmBePortage && tjmBePortage < 380){
            caPourcentBePortage = 52.97;
        }
        else if(380 <= tjmBePortage && tjmBePortage < 400){
            caPourcentBePortage = 52.78;
        }
        else if(400 <= tjmBePortage && tjmBePortage < 420){
            caPourcentBePortage = 52.60;
        }
        else if(420 <= tjmBePortage && tjmBePortage < 440){
            caPourcentBePortage = 52.45;
        }
        else if(440 <= tjmBePortage && tjmBePortage < 460){
            caPourcentBePortage = 52.31;
        }
        else if(460 <= tjmBePortage && tjmBePortage < 480){
            caPourcentBePortage = 52.18;
        }
        else if(480 <= tjmBePortage && tjmBePortage < 500){
            caPourcentBePortage = 52.07;
        }
        else if(500 <= tjmBePortage && tjmBePortage < 520){
            caPourcentBePortage = 51.97;
        }
        else if(520 <= tjmBePortage && tjmBePortage < 540){
            caPourcentBePortage = 51.87;
        }
        else if(540 <= tjmBePortage && tjmBePortage < 560){
            caPourcentBePortage = 51.76;
        }
        else if(560 <= tjmBePortage && tjmBePortage < 580){
            caPourcentBePortage = 51.67;
        }
        else if(580 <= tjmBePortage && tjmBePortage < 600){
            caPourcentBePortage = 51.59;
        }
        else if(600 <= tjmBePortage && tjmBePortage < 620){
            caPourcentBePortage = 51.51;
        }
        else if(620 <= tjmBePortage && tjmBePortage < 640){
            caPourcentBePortage = 51.45;
        }
        else if(640 <= tjmBePortage && tjmBePortage < 660){
            caPourcentBePortage = 51.38;
        }
        else if(660 <= tjmBePortage && tjmBePortage < 680){
            caPourcentBePortage = 51.32;
        }
        else if(680 <= tjmBePortage && tjmBePortage < 700){
            caPourcentBePortage = 51.26;
        }
        else if(tjmBePortage >= 700){
            caPourcentBePortage = 51.21;
        }
    }
    // Frais de Gestion = 8
    else if (fraisGestionBePortage == 8){
        if(tjmBePortage <= 300  && tjmBePortage < 320){
            caPourcentBePortage = 52.64;
        }
        else if(320 <= tjmBePortage && tjmBePortage < 340){
            caPourcentBePortage = 52.37;
        }
        else if(340 <= tjmBePortage && tjmBePortage < 360){
            caPourcentBePortage = 52.13;
        }
        else if(360 <= tjmBePortage && tjmBePortage < 380){
            caPourcentBePortage = 51.92;
        }
        else if(380 <= tjmBePortage && tjmBePortage < 400){
            caPourcentBePortage = 51.73;
        }
        else if(400 <= tjmBePortage && tjmBePortage < 420){
            caPourcentBePortage = 51.55;
        }
        else if(420 <= tjmBePortage && tjmBePortage < 440){
            caPourcentBePortage = 51.40;
        }
        else if(440 <= tjmBePortage && tjmBePortage < 460){
            caPourcentBePortage = 51.26;
        }
        else if(460 <= tjmBePortage && tjmBePortage < 480){
            caPourcentBePortage = 51.13;
        }
        else if(480 <= tjmBePortage && tjmBePortage < 500){
            caPourcentBePortage = 51.02;
        }
        else if(500 <= tjmBePortage && tjmBePortage < 520){
            caPourcentBePortage = 50.90;
        }
        else if(520 <= tjmBePortage && tjmBePortage < 540){
            caPourcentBePortage = 50.80;
        }
        else if(540 <= tjmBePortage && tjmBePortage < 560){
            caPourcentBePortage = 50.71;
        }
        else if(560 <= tjmBePortage && tjmBePortage < 580){
            caPourcentBePortage = 50.62;
        }
        else if(580 <= tjmBePortage && tjmBePortage < 600){
            caPourcentBePortage = 50.54;
        }
        else if(600 <= tjmBePortage && tjmBePortage < 620){
            caPourcentBePortage = 50.46;
        }
        else if(620 <= tjmBePortage && tjmBePortage < 640){
            caPourcentBePortage = 50.40;
        }
        else if(640 <= tjmBePortage && tjmBePortage < 660){
            caPourcentBePortage = 50.33;
        }
        else if(660 <= tjmBePortage && tjmBePortage < 680){
            caPourcentBePortage = 50.27;
        }
        else if(680 <= tjmBePortage && tjmBePortage < 700){
            caPourcentBePortage = 50.21;
        }
        else if(tjmBePortage >= 700){
            caPourcentBePortage = 50.16;
        }
    }

    var remunerationBePortage = cainto100BePortage * caPourcentBePortage;
    document.getElementById("mySocieteBePortage").innerHTML = caPourcentBePortage + "%";
    document.getElementById("myRemTotaleBePortage").innerHTML = formatter1.format(remunerationBePortage);
    document.getElementById("myTjmBePortage").innerHTML = formatter2.format(tjmBePortage);
    document.getElementById("caTotalBePortage").innerHTML = formatter2.format(caBePortage);
    document.getElementById("myFraisBePortage").innerHTML = formatter2.format(fraisBePortage);
    console.log(fraisGestionBePortage);
}


updateBePortage();





// Société Didaxis

document.getElementById("myFraisGestionDidaxis").addEventListener("change", updateDidaxis);

var tjmDidaxis = url.searchParams.get("tjm");
var fraisDidaxis = url.searchParams.get("frais");
var salaireDidaxis = url.searchParams.get("salaire");
var nbJoursDidaxis = document.getElementById("nbJoursDidaxis").innerHTML = "20";
var caDidaxis = tjmDidaxis * nbJoursDidaxis;
var caPourcentDidaxis;
var fraisGestionDidaxis = 5; 
var cainto100Didaxis = caDidaxis / 100 ;

// Frais de gestion

document.getElementById("myFraisGestionDidaxis").value = fraisGestionDidaxis;

function updateDidaxis(){
    fraisGestionDidaxis = document.getElementById("myFraisGestionDidaxis").value;

    if(fraisGestionDidaxis = 5){
        if(tjmDidaxis <= 300  && tjmDidaxis < 320){
            caPourcentDidaxis = 53.33;
        }
        else if(320 <= tjmDidaxis && tjmDidaxis < 340){
            caPourcentDidaxis = 53.16;
        }
        else if(340 <= tjmDidaxis && tjmDidaxis < 360){
            caPourcentDidaxis = 53.01;
        }
        else if(360 <= tjmDidaxis && tjmDidaxis < 380){
            caPourcentDidaxis = 52.88;
        }
        else if(380 <= tjmDidaxis && tjmDidaxis < 400){
            caPourcentDidaxis = 52,75;
        }
        else if(400 <= tjmDidaxis && tjmDidaxis < 420){
            caPourcentDidaxis = 52.64;
        }
        else if(420 <= tjmDidaxis && tjmDidaxis < 440){
            caPourcentDidaxis = 52.54;
        }
        else if(440 <= tjmDidaxis && tjmDidaxis < 460){
            caPourcentDidaxis = 52.44;
        }
        else if(460 <= tjmDidaxis && tjmDidaxis < 480){
            caPourcentDidaxis = 52.36;
        }
        else if(480 <= tjmDidaxis && tjmDidaxis < 500){
            caPourcentDidaxis = 52.28;
        }
        else if(500 <= tjmDidaxis && tjmDidaxis < 520){
            caPourcentDidaxis = 52.22;
        }
        else if(520 <= tjmDidaxis && tjmDidaxis < 540){
            caPourcentDidaxis = 52.15;
        }
        else if(540 <= tjmDidaxis && tjmDidaxis < 560){
            caPourcentDidaxis = 52.09;
        }
        else if(560 <= tjmDidaxis && tjmDidaxis < 580){
            caPourcentDidaxis = 52.04;
        }
        else if(580 <= tjmDidaxis && tjmDidaxis < 600){
            caPourcentDidaxis = 51.98;
        }
        else if(600 <= tjmDidaxis && tjmDidaxis < 620){
            caPourcentDidaxis = 51.93;
        }
        else if(620 <= tjmDidaxis && tjmDidaxis < 640){
            caPourcentDidaxis = 51.89;
        }
        else if(640 <= tjmDidaxis && tjmDidaxis < 660){
            caPourcentDidaxis = 51.84;
        }
        else if(660 <= tjmDidaxis && tjmDidaxis < 680){
            caPourcentDidaxis = 51.81;
        }
        else if(680 <= tjmDidaxis && tjmDidaxis < 700){
            caPourcentDidaxis = 51.77;
        }
        else if(tjmDidaxis >= 700){
            caPourcentDidaxis = 51.74;
        }
    
    }
    else if(fraisGestionDidaxis = 6){
        if(tjmDidaxis <= 300  && tjmDidaxis < 320){
            caPourcentDidaxis = 52.80;
        }
        else if(320 <= tjmDidaxis && tjmDidaxis < 340){
            caPourcentDidaxis = 52.63;
        }
        else if(340 <= tjmDidaxis && tjmDidaxis < 360){
            caPourcentDidaxis = 52.47;
        }
        else if(360 <= tjmDidaxis && tjmDidaxis < 380){
            caPourcentDidaxis = 51.81;
        }
        else if(380 <= tjmDidaxis && tjmDidaxis < 400){
            caPourcentDidaxis = 52.21;
        }
        else if(400 <= tjmDidaxis && tjmDidaxis < 420){
            caPourcentDidaxis = 52.10;
        }
        else if(420 <= tjmDidaxis && tjmDidaxis < 440){
            caPourcentDidaxis = 52.00;
        }
        else if(440 <= tjmDidaxis && tjmDidaxis < 460){
            caPourcentDidaxis = 51.91;
        }
        else if(460 <= tjmDidaxis && tjmDidaxis < 480){
            caPourcentDidaxis = 51.83;
        }
        else if(480 <= tjmDidaxis && tjmDidaxis < 500){
            caPourcentDidaxis = 51.75;
        }
        else if(500 <= tjmDidaxis && tjmDidaxis < 520){
            caPourcentDidaxis = 51.68;
        }
        else if(520 <= tjmDidaxis && tjmDidaxis < 540){
            caPourcentDidaxis = 51.62;
        }
        else if(540 <= tjmDidaxis && tjmDidaxis < 560){
            caPourcentDidaxis = 51.56;
        }
        else if(560 <= tjmDidaxis && tjmDidaxis < 580){
            caPourcentDidaxis = 51.50;
        }
        else if(580 <= tjmDidaxis && tjmDidaxis < 600){
            caPourcentDidaxis = 51.45;
        }
        else if(600 <= tjmDidaxis && tjmDidaxis < 620){
            caPourcentDidaxis = 51.40;
        }
        else if(620 <= tjmDidaxis && tjmDidaxis < 640){
            caPourcentDidaxis = 51.35;
        }
        else if(640 <= tjmDidaxis && tjmDidaxis < 660){
            caPourcentDidaxis = 51.31;
        }
        else if(660 <= tjmDidaxis && tjmDidaxis < 680){
            caPourcentDidaxis = 51.27;
        }
        else if(680 <= tjmDidaxis && tjmDidaxis < 700){
            caPourcentDidaxis = 51.24;
        }
        else if(tjmDidaxis >= 700){
            caPourcentDidaxis = 51.20;
        }
    }
    else if (fraisGestionDidaxis = 7){
        if(tjmDidaxis <= 300 && tjmDidaxis< 320){
            caPourcentDidaxis = 52.28;
        }
        else if(320 <= tjmDidaxis && tjmDidaxis < 340){
            caPourcentDidaxis = 52.09;
        }
        else if(340 <= tjmDidaxis && tjmDidaxis < 360){
            caPourcentDidaxis = 51.41;
        }
        else if(360 <= tjmDidaxis && tjmDidaxis < 380){
            caPourcentDidaxis = 51.28;
        }
        else if(380 <= tjmDidaxis && tjmDidaxis < 400){
            caPourcentDidaxis = 51.68;
        }
        else if(400 <= tjmDidaxis && tjmDidaxis < 420){
            caPourcentDidaxis = 51.58;
        }
        else if(420 <= tjmDidaxis && tjmDidaxis < 440){
            caPourcentDidaxis = 51.48;
        }
        else if(440 <= tjmDidaxis && tjmDidaxis < 460){
            caPourcentDidaxis = 51.39;
        }
        else if(460 <= tjmDidaxis && tjmDidaxis < 480){
            caPourcentDidaxis = 51.29;
        }
        else if(480 <= tjmDidaxis && tjmDidaxis < 500){
            caPourcentDidaxis = 51.22;
        }
        else if(500 <= tjmDidaxis && tjmDidaxis < 520){
            caPourcentDidaxis = 51.15;
        }
        else if(520 <= tjmDidaxis && tjmDidaxis < 540){
            caPourcentDidaxis = 51.09;
        }
        else if(540 <= tjmDidaxis && tjmDidaxis< 560){
            caPourcentDidaxis = 51.03;
        }
        else if(560 <= tjmDidaxis  && tjmDidaxis< 580){
            caPourcentDidaxis = 50.97;
        }
        else if(580 <= tjmDidaxis && tjmDidaxis < 600){
            caPourcentDidaxis = 50.92;
        }
        else if(600 <= tjmDidaxis && tjmDidaxis < 620){
            caPourcentDidaxis = 50.88;
        }
        else if(620 <= tjmDidaxis && tjmDidaxis < 640){
            caPourcentDidaxis = 50.82;
        }
        else if(640 <= tjmDidaxis && tjmDidaxis < 660){
            caPourcentDidaxis = 50.78;
        }
        else if(660 <= tjmDidaxis && tjmDidaxis < 680){
            caPourcentDidaxis = 50.74;
        }
        else if(680 <= tjmDidaxis && tjmDidaxis < 700){
            caPourcentDidaxis = 50.71;
        }
        else if(tjmDidaxis >= 700){
            caPourcentDidaxis = 50.67;
        }
    
    }
    var remunerationDidaxis = cainto100Didaxis * caPourcentDidaxis;
    document.getElementById("mySocieteDidaxis").innerHTML = caPourcentDidaxis + "%";
    document.getElementById("myRemTotaleDidaxis").innerHTML = formatter1.format(remunerationDidaxis);
    document.getElementById("myTjmDidaxis").innerHTML = formatter2.format(tjmDidaxis);
    document.getElementById("caTotalDidaxis").innerHTML = formatter2.format(caDidaxis);
    document.getElementById("myFraisDidaxis").innerHTML = formatter2.format(fraisDidaxis);
    
}
updateDidaxis();


// Société Kingurley

var tjmKingurley = url.searchParams.get("tjm");
var fraisKingurley = url.searchParams.get("frais");
var salaireKingurley = url.searchParams.get("salaire");
var nbJoursKingurley = document.getElementById("nbJoursKingurley").innerHTML = "20";
var caKingurley = tjmKingurley * nbJoursKingurley ;
var caPourcentKingurley;
var cainto100Kingurley = caKingurley / 100;

if(tjmKingurley <= 300  && tjmKingurley < 320){
    caPourcentKingurley = 52.82;
}
else if(320 <= tjmKingurley&& tjmKingurley < 340){
    caPourcentKingurley = 52.64;
}
else if(340 <= tjmKingurley&& tjmKingurley < 360){
    caPourcentKingurley = 52.47;
}
else if(360 <= tjmKingurley && tjmKingurley < 380){
    caPourcentKingurley = 52.33;
}
else if(380 <= tjmKingurley && tjmKingurley < 400){
    caPourcentKingurley = 52.21;
}
else if(400 <= tjmKingurley && tjmKingurley < 420){
    caPourcentKingurley = 52.10;
}
else if(420 <= tjmKingurley && tjmKingurley < 440){
    caPourcentKingurley = 52.00;
}
else if(440 <= tjmKingurley && tjmKingurley < 460){
    caPourcentKingurley = 51.91;
}
else if(460 <= tjmKingurley && tjmKingurley < 480){
    caPourcentKingurley = 51.83;
}
else if(480 <= tjmKingurley && tjmKingurley < 500){
    caPourcentKingurley = 51.75;
}
else if(500 <= tjmKingurley && tjmKingurley < 520){
    caPourcentKingurley = 51.68;
}
else if(520 <= tjmKingurley && tjmKingurley < 540){
    caPourcentKingurley = 51.62;
}
else if(540 <= tjmKingurley && tjmKingurley < 560){
    caPourcentKingurley = 51.56;
}
else if(560 <= tjmKingurley && tjmKingurley < 580){
    caPourcentKingurley = 51.50;
}
else if(580 <= tjmKingurley && tjmKingurley < 600){
    caPourcentKingurley = 51.45;
}
else if(600 <= tjmKingurley && tjmKingurley < 620){
    caPourcentKingurley = 51.40;
}
else if(620 <= tjmKingurley && tjmKingurley < 640){
    caPourcentKingurley = 51.35;
}
else if(640 <= tjmKingurley && tjmKingurley < 660){
    caPourcentKingurley = 51.31;
}
else if(660 <= tjmKingurley && tjmKingurley < 680){
    caPourcentKingurley = 51.27;
}
else if(680 <= tjmKingurley && tjmKingurley < 700){
    caPourcentKingurley = 51.24;
}
else if(tjmKingurley >= 700){
    caPourcentKingurley = 51.20;
}
var remunerationKingurley = cainto100Kingurley * caPourcentKingurley;
document.getElementById("mySocieteKingurley").innerHTML = caPourcentKingurley + "%";
document.getElementById("myRemTotaleKingurley").innerHTML = formatter1.format(remunerationKingurley);
document.getElementById("myTjmKingurley").innerHTML = formatter2.format(tjmKingurley);
document.getElementById("caTotalKingurley").innerHTML = formatter2.format(caKingurley);
document.getElementById("myFraisKingurley").innerHTML = formatter2.format(fraisKingurley);



// Société Admission

var tjmAdmission = url.searchParams.get("tjm");
var fraisAdmission = url.searchParams.get("frais");
var salaireAdmission = url.searchParams.get("salaire");
var nbJoursAdmission = document.getElementById("nbJoursAdmission").innerHTML = "20";
var caAdmission = tjmAdmission * nbJoursAdmission ;
var caPourcentAdmission;
var cainto100Admission = caAdmission / 100;

if(tjmAdmission <= 300  && tjmAdmission < 320){
    caPourcentAdmission = 52.65;
}
else if(320 <= tjmAdmission && tjmAdmission < 340){
    caPourcentAdmission = 52.47;
}
else if(340 <= tjmAdmission && tjmAdmission < 360){
    caPourcentAdmission = 52.31;
}
else if(360 <= tjmAdmission && tjmAdmission < 380){
    caPourcentAdmission = 52.17;
}
else if(380 <= tjmAdmission && tjmAdmission < 400){
    caPourcentAdmission = 52.05;
}
else if(400 <= tjmAdmission && tjmAdmission < 420){
    caPourcentAdmission = 51.93;
}
else if(420 <= tjmAdmission && tjmAdmission < 440){
    caPourcentAdmission = 51.83;
}
else if(440 <= tjmAdmission && tjmAdmission < 460){
    caPourcentAdmission = 51.74;
}
else if(460 <= tjmAdmission && tjmAdmission < 480){
    caPourcentAdmission = 51.65;
}
else if(480 <= tjmAdmission && tjmAdmission < 500){
    caPourcentAdmission = 51.58;
}
else if(500 <= tjmAdmission && tjmAdmission < 520){
    caPourcentAdmission = 51.50;
}
else if(520 <= tjmAdmission && tjmAdmission< 540){
    caPourcentAdmission = 51.44;
}
else if(540 <= tjmAdmission && tjmAdmission < 560){
    caPourcentAdmission = 51.38;
}
else if(560 <= tjmAdmission && tjmAdmission < 580){
    caPourcentAdmission = 51.32;
}
else if(580 <= tjmAdmission && tjmAdmission < 600){
    caPourcentAdmission = 51.27;
}
else if(600 <= tjmAdmission && tjmAdmission < 620){
    caPourcentAdmission = 51.22;
}
else if(620 <= tjmAdmission && tjmAdmission < 640){
    caPourcentAdmission = 51.17;
}
else if(640 <= tjmAdmission && tjmAdmission < 660){
    caPourcentAdmission = 51.13;
}
else if(660 <= tjmAdmission && tjmAdmission < 680){
    caPourcentAdmission = 51.09;
}
else if(680 <= tjmAdmission && tjmAdmission < 700){
    caPourcentAdmission = 51.05;
}
else if(tjmAdmission >= 700){
    caPourcentAdmission = 51.01;
}
var remunerationAdmission = cainto100Admission * caPourcentAdmission;
document.getElementById("mySocieteAdmission").innerHTML = caPourcentAdmission + "%";
document.getElementById("myRemTotaleAdmission").innerHTML = formatter1.format(remunerationAdmission);
document.getElementById("myTjmAdmission").innerHTML = formatter2.format(tjmAdmission);
document.getElementById("caTotalAdmission").innerHTML = formatter2.format(caAdmission);
document.getElementById("myFraisAdmission").innerHTML = formatter2.format(fraisAdmission);




// Société EPPortage

document.getElementById("myFraisGestionEPPortage").addEventListener("change", updateEPPortage);

var tjmEPPortage = url.searchParams.get("tjm");
var fraisEPPortage = url.searchParams.get("frais");
var salaireEPPortage = url.searchParams.get("salaire");
var nbJoursEPPortage = document.getElementById("nbJoursEPPortage").innerHTML = "20";
var caEPPortage = tjmEPPortage*nbJoursEPPortage;
var caPourcentEPPortage;
var fraisGestionEPPortage = 3; 
var cainto100EPPortage = caEPPortage / 100;

// Frais de gestion

document.getElementById("myFraisGestionEPPortage").value = fraisGestionEPPortage;

function updateEPPortage(){
    fraisGestionEPPortage = document.getElementById("myFraisGestionEPPortage").value;
    if(fraisGestionEPPortage=3){
        if(tjmEPPortage <= 300  && tjmEPPortage < 320){
            caPourcentEPPortage = 52.52;
        }
        else if(320 <= tjmEPPortage && tjmEPPortage < 340){
            caPourcentEPPortage = 52.51;
        }
        else if(340 <= tjmEPPortage && tjmEPPortage < 360){
            caPourcentEPPortage = 52.50;
        }
        else if(360 <= tjmEPPortage && tjmEPPortage < 380){
            caPourcentEPPortage = 52.50;
        }
        else if(380 <= tjmEPPortage && tjmEPPortage < 400){
            caPourcentEPPortage = 52.49;
        }
        else if(400 <= tjmEPPortage && tjmEPPortage < 420){
            caPourcentEPPortage = 52.48;
        }
        else if(420 <= tjmEPPortage && tjmEPPortage < 440){
            caPourcentEPPortage = 52.48;
        }
        else if(440 <= tjmEPPortage && tjmEPPortage < 460){
            caPourcentEPPortage = 52.47;
        }
        else if(460 <= tjmEPPortage && tjmEPPortage < 480){
            caPourcentEPPortage = 52.47;
        }
        else if(480 <= tjmEPPortage && tjmEPPortage < 500){
            caPourcentEPPortage = 52.47;
        }
        else if(500 <= tjmEPPortage && tjmEPPortage < 520){
            caPourcentEPPortage = 52.46;
        }
        else if(520 <= tjmEPPortage && tjmEPPortage < 540){
            caPourcentEPPortage = 52.46;
        }
        else if(540 <= tjmEPPortage && tjmEPPortage < 560){
            caPourcentEPPortage = 52.46;
        }
        else if(560 <= tjmEPPortage && tjmEPPortage < 580){
            caPourcentEPPortage = 52.45;
        }
        else if(580 <= tjmEPPortage && tjmEPPortage < 600){
            caPourcentEPPortage = 52.45;
        }
        else if(600 <= tjmEPPortage && tjmEPPortage < 620){
            caPourcentEPPortage = 52.37;
        }
        else if(620 <= tjmEPPortage && tjmEPPortage < 640){
            caPourcentEPPortage = 52.45;
        }
        else if(640 <= tjmEPPortage && tjmEPPortage < 660){
            caPourcentEPPortage = 52.44;
        }
        else if(660 <= tjmEPPortage && tjmEPPortage < 680){
            caPourcentEPPortage = 52.44;
        }
        else if(680 <= tjmEPPortage && tjmEPPortage < 700){
            caPourcentEPPortage = 52.44;
        }
        else if(tjmEPPortage >= 700){
            caPourcentEPPortage = 52.44;
        }
    
    }
    else if (fraisGestionEPPortage=5){
    
        if(tjmEPPortage <= 300  && tjmEPPortage < 320){
            caPourcentEPPortage = 51.44;
        }
        else if(320 <= tjmEPPortage && tjmEPPortage < 340){
            caPourcentEPPortage = 51.43;
        }
        else if(340 <= tjmEPPortage && tjmEPPortage < 360){
            caPourcentEPPortage = 51.42;
        }
        else if(360 <= tjmEPPortage && tjmEPPortage < 380){
            caPourcentEPPortage = 51.42;
        }
        else if(380 <= tjmEPPortage && tjmEPPortage < 400){
            caPourcentEPPortage = 51.41;
        }
        else if(400 <= tjmEPPortage && tjmEPPortage < 420){
            caPourcentEPPortage = 51.40;
        }
        else if(420 <= tjmEPPortage  && tjmEPPortage< 440){
            caPourcentEPPortage = 51.40;
        }
        else if(440 <= tjmEPPortage && tjmEPPortage < 460){
            caPourcentEPPortage = 51.39;
        }
        else if(460 <= tjmEPPortage && tjmEPPortage < 480){
            caPourcentEPPortage = 51.39;
        }
        else if(480 <= tjmEPPortage && tjmEPPortage < 500){
            caPourcentEPPortage = 51.39;
        }
        else if(500 <= tjmEPPortage && tjmEPPortage < 520){
            caPourcentEPPortage = 51.38;
        }
        else if(520 <= tjmEPPortage && tjmEPPortage < 540){
            caPourcentEPPortage = 51.38;
        }
        else if(540 <= tjmEPPortage && tjmEPPortage < 560){
            caPourcentEPPortage = 51.38;
        }
        else if(560 <= tjmEPPortage && tjmEPPortage < 580){
            caPourcentEPPortage = 51.37;
        }
        else if(580 <= tjmEPPortage && tjmEPPortage < 600){
            caPourcentEPPortage = 51.37;
        }
        else if(600 <= tjmEPPortage && tjmEPPortage < 620){
            caPourcentEPPortage = 51.37;
        }
        else if(620 <= tjmEPPortage && tjmEPPortage < 640){
            caPourcentEPPortage = 51.37;
        }
        else if(640 <= tjmEPPortage && tjmEPPortage < 660){
            caPourcentEPPortage = 51.36;
        }
        else if(660 <= tjmEPPortage && tjmEPPortage < 680){
            caPourcentEPPortage = 51.36;
        }
        else if(680 <= tjmEPPortage && tjmEPPortage < 700){
            caPourcentEPPortage = 51.36;
        }
        else if(tjmEPPortage >= 700){
            caPourcentEPPortage = 51.36;
        }
    }
    
    else if(fraisGestionEPPortage=7){
    
        if(tjmEPPortage <= 300  && tjmEPPortage < 320){
            caPourcentEPPortage = 51.36;
        }
        else if(320 <= tjmEPPortage && tjmEPPortage < 340){
            caPourcentEPPortage = 50.35;
        }
        else if(340 <= tjmEPPortage && tjmEPPortage < 360){
            caPourcentEPPortage = 50.34;
        }
        else if(360 <= tjmEPPortage && tjmEPPortage < 380){
            caPourcentEPPortage = 50.34;
        }
        else if(380 <= tjmEPPortage  && tjmEPPortage< 400){
            caPourcentEPPortage = 50.33;
        }
        else if(400 <= tjmEPPortage && tjmEPPortage < 420){
            caPourcentEPPortage = 50.32;
        }
        else if(420 <= tjmEPPortage && tjmEPPortage < 440){
            caPourcentEPPortage = 50.32;
        }
        else if(440 <= tjmEPPortage  && tjmEPPortage< 460){
            caPourcentEPPortage = 50.31;
        }
        else if(460 <= tjmEPPortage  && tjmEPPortage< 480){
            caPourcentEPPortage = 50.31;
        }
        else if(480 <= tjmEPPortage && tjmEPPortage < 500){
            caPourcentEPPortage = 50.31;
        }
        else if(500 <= tjmEPPortage  && tjmEPPortage< 520){
            caPourcentEPPortage = 50.30;
        }
        else if(520 <= tjmEPPortage  && tjmEPPortage< 540){
            caPourcentEPPortage = 50.30;
        }
        else if(540 <= tjmEPPortage && tjmEPPortage < 560){
            caPourcentEPPortage = 50.30;
        }
        else if(560 <= tjmEPPortage && tjmEPPortage < 580){
            caPourcentEPPortage = 50.29;
        }
        else if(580 <= tjmEPPortage && tjmEPPortage < 600){
            caPourcentEPPortage = 50.29;
        }
        else if(600 <= tjmEPPortage && tjmEPPortage < 620){
            caPourcentEPPortage = 50.29;
        }
        else if(620 <= tjmEPPortage && tjmEPPortage < 640){
            caPourcentEPPortage = 50.29;
        }
        else if(640 <= tjmEPPortage && tjmEPPortage < 660){
            caPourcentEPPortage = 50.28;
        }
        else if(660 <= tjmEPPortage && tjmEPPortage < 680){
            caPourcentEPPortage = 50.28;
        }
        else if(680 <= tjmEPPortage && tjmEPPortage < 700){
            caPourcentEPPortage = 50.28;
        }
        else if(tjmEPPortage >= 700){
            caPourcentEPPortage = 50.28;
        }
    }
    var remunerationEPPortage = cainto100EPPortage * caPourcentEPPortage;
    document.getElementById("mySocieteEPPortage").innerHTML = caPourcentEPPortage + "%";
    document.getElementById("myRemTotaleEPPortage").innerHTML = formatter1.format(remunerationEPPortage);
    document.getElementById("myTjmEPPortage").innerHTML = formatter2.format(tjmEPPortage);
    document.getElementById("caTotalEPPortage").innerHTML = formatter2.format(caEPPortage);
    document.getElementById("myFraisEPPortage").innerHTML = formatter2.format(fraisEPPortage);
    document.getElementById("myFraisGestionEPPortage").innerHTML = fraisGestionEPPortage + "%";
    
    
}
updateDidaxis();

// Société RHSolutions

var tjmRHSolutions = url.searchParams.get("tjm");
var fraisRHSolutions = url.searchParams.get("frais");
var salaireRHSolutions = url.searchParams.get("salaire");
var nbJoursRHSolutions = document.getElementById("nbJoursRHSolutions").innerHTML = "20";
var caRHSolutions = tjmRHSolutions * nbJoursRHSolutions;
var caPourcentRHSolutions;
var cainto100RHSolutions = caRHSolutions / 100;

if(tjmRHSolutions <= 300  && tjmRHSolutions < 320){
    caPourcentRHSolutions = 51.76;
}
else if(320 <= tjmRHSolutions && tjmRHSolutions < 340){
    caPourcentRHSolutions = 51.59;
}
else if(340 <= tjmRHSolutions && tjmRHSolutions < 360){
    caPourcentRHSolutions = 51.44;
}
else if(360 <= tjmRHSolutions && tjmRHSolutions < 380){
    caPourcentRHSolutions = 51.30;
}
else if(380 <= tjmRHSolutions && tjmRHSolutions < 400){
    caPourcentRHSolutions = 51.18;
}
else if(400 <= tjmRHSolutions && tjmRHSolutions < 420){
    caPourcentRHSolutions = 51.06;
}
else if(420 <= tjmRHSolutions && tjmRHSolutions < 440){
    caPourcentRHSolutions = 51.51;
}
else if(440 <= tjmRHSolutions && tjmRHSolutions < 460){
    caPourcentRHSolutions = 51.42;
}
else if(460 <= tjmRHSolutions && tjmRHSolutions < 480){
    caPourcentRHSolutions = 51.34;
}
else if(480 <= tjmRHSolutions && tjmRHSolutions < 500){
    caPourcentRHSolutions = 51.26;
}
else if(500 <= tjmRHSolutions && tjmRHSolutions < 520){
    caPourcentRHSolutions = 51.19;
}
else if(520 <= tjmRHSolutions && tjmRHSolutions < 540){
    caPourcentRHSolutions = 51.13;
}
else if(540 <= tjmRHSolutions && tjmRHSolutions < 560){
    caPourcentRHSolutions = 51.07;
}
else if(560 <= tjmRHSolutions && tjmRHSolutions < 580){
    caPourcentRHSolutions = 51.01;
}
else if(580 <= tjmRHSolutions && tjmRHSolutions < 600){
    caPourcentRHSolutions = 50.96;
}
else if(600 <= tjmRHSolutions && tjmRHSolutions < 620){
    caPourcentRHSolutions = 50.91;
}
else if(620 <= tjmRHSolutions && tjmRHSolutions < 640){
    caPourcentRHSolutions = 50.87;
}
else if(640 <= tjmRHSolutions && tjmRHSolutions < 660){
    caPourcentRHSolutions = 50.83;
}
else if(660 <= tjmRHSolutions && tjmRHSolutions < 680){
    caPourcentRHSolutions = 50.79;
}
else if(680 <= tjmRHSolutions && tjmRHSolutions < 700){
    caPourcentRHSolutions = 50.75;
}
else if(tjmRHSolutions >= 700){
    caPourcentRHSolutions = 50.72;
}
var remunerationRHSolutions = cainto100RHSolutions * caPourcentRHSolutions;
document.getElementById("mySocieteRHSolutions").innerHTML = caPourcentRHSolutions + "%";
document.getElementById("myRemTotaleRHSolutions").innerHTML = formatter1.format(remunerationRHSolutions);
document.getElementById("myTjmRHSolutions").innerHTML = formatter2.format(tjmRHSolutions);
document.getElementById("caTotalRHSolutions").innerHTML = formatter2.format(caRHSolutions);
document.getElementById("myFraisRHSolutions").innerHTML = formatter2.format(fraisRHSolutions);



// Société ITG

var tjmITG = url.searchParams.get("tjm");
var fraisITG = url.searchParams.get("frais");
var salaireITG = url.searchParams.get("salaire");
var nbJoursITG = document.getElementById("nbJoursITG").innerHTML = "20";
var caITG = tjmITG * nbJoursITG 
var caPourcentITG;

if(tjmITG <= 300  && tjmITG < 320){
   caPourcentITG = 51.30;
}
else if(320 <= tjmITG && tjmITG < 340){
   caPourcentITG = 51.11;
}
else if(340 <= tjmITG && tjmITG < 360){
   caPourcentITG = 50.96;
}
else if(360 <= tjmITG && tjmITG < 380){
   caPourcentITG = 50.78;
}
else if(380 <= tjmITG && tjmITG < 400){
   caPourcentITG = 50.61;
}
else if(400 <= tjmITG && tjmITG < 420){
   caPourcentITG = 50.46;
}
else if(420 <= tjmITG && tjmITG < 440){
   caPourcentITG = 50.33;
}
else if(440 <= tjmITG && tjmITG < 460){
   caPourcentITG = 50.22;
}
else if(460 <= tjmITG && tjmITG < 480){
   caPourcentITG = 50.11;
}
else if(480 <= tjmITG && tjmITG < 500){
   caPourcentITG = 50.00;
}
else if(500 <= tjmITG && tjmITG < 520){
   caPourcentITG = 50.15;
}
else if(520 <= tjmITG && tjmITG < 540){
   caPourcentITG = 50.08;
}
else if(540 <= tjmITG && tjmITG < 560){
   caPourcentITG = 50.03;
}
else if(560 <= tjmITG && tjmITG < 580){
   caPourcentITG = 49.98;
}
else if(580 <= tjmITG && tjmITG < 600){
   caPourcentITG = 49.94;
}
else if(600 <= tjmITG && tjmITG < 620){
   caPourcentITG = 49.88;
}
else if(620 <= tjmITG && tjmITG < 640){
   caPourcentITG = 49.83;
}
else if(640 <= tjmITG && tjmITG < 660){
   caPourcentITG = 49.80;
}
else if(660 <= tjmITG && tjmITG < 680){
   caPourcentITG = 49.74;
}
else if(680 <= tjmITG && tjmITG < 700){
   caPourcentITG = 49.71;
}
else if(tjmITG >= 700){
   caPourcentITG = 49.67;
}

var cainto100ITG = caITG / 100;
var remunerationITG = cainto100ITG * caPourcentITG;
document.getElementById("mySocieteITG").innerHTML = caPourcentITG + "%";
document.getElementById("myRemTotaleITG").innerHTML = formatter1.format(remunerationITG);
document.getElementById("myTjmITG").innerHTML = formatter2.format(tjmITG);
document.getElementById("caTotalITG").innerHTML = formatter2.format(caITG);
document.getElementById("myFraisITG").innerHTML = formatter2.format(fraisITG);

// Société Freecadre

var tjmFreecadre = url.searchParams.get("tjm");
var fraisFreecadre = url.searchParams.get("frais");
var salaireFreecadre = url.searchParams.get("salaire");
var nbJoursFreecadre = document.getElementById("nbJoursFreecadre").innerHTML = "20";
var caFreecadre = tjmFreecadre * nbJoursFreecadre 
var caPourcentFreecadre;


if(tjmFreecadre <= 300  && tjmFreecadre < 320){
   caPourcentFreecadre = 52.20;
}
else if(320 <= tjmFreecadre && tjmFreecadre < 340){
   caPourcentFreecadre = 52.03;
}
else if(340 <= tjmFreecadre && tjmFreecadre < 360){
   caPourcentFreecadre = 51.88;
}
else if(360 <= tjmFreecadre && tjmFreecadre < 380){
   caPourcentFreecadre = 51.75;
}
else if(380 <= tjmFreecadre && tjmFreecadre < 400){
   caPourcentFreecadre = 51.63;
}
else if(400 <= tjmFreecadre && tjmFreecadre < 420){
   caPourcentFreecadre = 51.53;
}
else if(420 <= tjmFreecadre && tjmFreecadre < 440){
   caPourcentFreecadre = 51.43;
}
else if(440 <= tjmFreecadre && tjmFreecadre < 460){
   caPourcentFreecadre = 51.34;
}
else if(460 <= tjmFreecadre && tjmFreecadre < 480){
   caPourcentFreecadre = 51.26;
}
else if(480 <= tjmFreecadre && tjmFreecadre < 500){
   caPourcentFreecadre = 51.19;
}
else if(500 <= tjmFreecadre && tjmFreecadre < 520){
   caPourcentFreecadre = 51.12;
}
else if(520 <= tjmFreecadre && tjmFreecadre < 540){
   caPourcentFreecadre = 51.06;
}
else if(540 <= tjmFreecadre && tjmFreecadre < 560){
   caPourcentFreecadre = 51.00;
}
else if(560 <= tjmFreecadre && tjmFreecadre < 580){
   caPourcentFreecadre = 50.95;
}
else if(580 <= tjmFreecadre && tjmFreecadre < 600){
   caPourcentFreecadre = 50.90;
}
else if(600 <= tjmFreecadre && tjmFreecadre < 620){
   caPourcentFreecadre = 50.85;
}
else if(620 <= tjmFreecadre && tjmFreecadre < 640){
   caPourcentFreecadre = 50.81;
}
else if(640 <= tjmFreecadre && tjmFreecadre < 660){
   caPourcentFreecadre = 50.77;
}
else if(660 <= tjmFreecadre && tjmFreecadre < 680){
   caPourcentFreecadre = 50.73;
}
else if(680 <= tjmFreecadre && tjmFreecadre < 700){
   caPourcentFreecadre = 50.69;
}
else if(tjmFreecadre >= 700){
   caPourcentFreecadre = 50.66;
}

var cainto100Freecadre = caFreecadre / 100;
var remunerationFreecadre = cainto100Freecadre * caPourcentFreecadre;
document.getElementById("mySocieteFreecadre").innerHTML = caPourcentFreecadre + "%";
document.getElementById("myRemTotaleFreecadre").innerHTML = formatter1.format(remunerationFreecadre);
document.getElementById("myTjmFreecadre").innerHTML = formatter2.format(tjmFreecadre);
document.getElementById("caTotalFreecadre").innerHTML = formatter2.format(caFreecadre);
document.getElementById("myFraisFreecadre").innerHTML = formatter2.format(fraisFreecadre);

// Société TalentFactory

var tjmTalentFactory = url.searchParams.get("tjm");
var fraisTalentFactory = url.searchParams.get("frais");
var salaireTalentFactory = url.searchParams.get("salaire");
var nbJoursTalentFactory = document.getElementById("nbJoursTalentFactory").innerHTML = "20";
var caTalentFactory = tjmTalentFactory * nbJoursTalentFactory ;
var caPourcentTalentFactory;

if(tjmTalentFactory <= 300  && tjmTalentFactory < 320){
    caPourcentTalentFactory = 52.48;
}
else if(320 <= tjmTalentFactory && tjmTalentFactory < 340){
    caPourcentTalentFactory = 53.98;
}
else if(340 <= tjmTalentFactory && tjmTalentFactory < 360){
    caPourcentTalentFactory = 55.31;
}
else if(360 <= tjmTalentFactory && tjmTalentFactory < 380){
    caPourcentTalentFactory = 56.48;
}
else if(380 <= tjmTalentFactory && tjmTalentFactory < 400){
    caPourcentTalentFactory = 57.54;
}
else if(400 <= tjmTalentFactory && tjmTalentFactory < 420){
    caPourcentTalentFactory = 58.49;
}
else if(420 <= tjmTalentFactory && tjmTalentFactory < 440){
    caPourcentTalentFactory = 59.34;
}
else if(440 <= tjmTalentFactory && tjmTalentFactory < 460){
    caPourcentTalentFactory = 60.12;
}
else if(460 <= tjmTalentFactory && tjmTalentFactory < 480){
    caPourcentTalentFactory = 60.846;
}
else if(480 <= tjmTalentFactory && tjmTalentFactory < 500){
    caPourcentTalentFactory = 61.49;
}
else if(500 <= tjmTalentFactory && tjmTalentFactory < 520){
    caPourcentTalentFactory = 62.09;
}
else if(520 <= tjmTalentFactory && tjmTalentFactory < 540){
    caPourcentTalentFactory = 62.64;
}
else if(540 <= tjmTalentFactory && tjmTalentFactory < 560){
    caPourcentTalentFactory = 63.16;
}
else if(560 <= tjmTalentFactory && tjmTalentFactory < 580){
    caPourcentTalentFactory = 63.63;
}
else if(580 <= tjmTalentFactory && tjmTalentFactory < 600){
    caPourcentTalentFactory = 64.08;
}
else if(600 <= tjmTalentFactory && tjmTalentFactory < 620){
    caPourcentTalentFactory = 64.49;
}
else if(620 <= tjmTalentFactory && tjmTalentFactory < 640){
    caPourcentTalentFactory = 64.88;
}
else if(640 <= tjmTalentFactory && tjmTalentFactory < 660){
    caPourcentTalentFactory = 65.24;
}
else if(660 <= tjmTalentFactory && tjmTalentFactory < 680){
    caPourcentTalentFactory = 65.58;
}
else if(680 <= tjmTalentFactory && tjmTalentFactory < 700){
    caPourcentTalentFactory = 65.90;
}
else if(tjmTalentFactory >= 700){
    caPourcentTalentFactory = 66.21;
}

var cainto100TalentFactory = caTalentFactory / 100;
var remunerationTalentFactory = cainto100TalentFactory * caPourcentTalentFactory;
document.getElementById("mySocieteTalentFactory").innerHTML = caPourcentTalentFactory + "%";
document.getElementById("myRemTotaleTalentFactory").innerHTML = formatter1.format(remunerationTalentFactory);
document.getElementById("myTjmTalentFactory").innerHTML = formatter2.format(tjmTalentFactory);
document.getElementById("caTotalTalentFactory").innerHTML = formatter2.format(caTalentFactory);
document.getElementById("myFraisTalentFactory").innerHTML = formatter2.format(fraisTalentFactory);



// Société Umalis

var tjmUmalis = url.searchParams.get("tjm");
var fraisUmalis = url.searchParams.get("frais");
var salaireUmalis = url.searchParams.get("salaire");
var nbJoursUmalis = document.getElementById("nbJoursUmalis").innerHTML = "20";
var caUmalis = tjmUmalis * nbJoursUmalis 
var caPourcentUmalis;

if(tjmUmalis <= 300  && tjmUmalis < 320){
   caPourcentUmalis = 56.05;
}
else if(320 <= tjmUmalis && tjmUmalis < 340){
   caPourcentUmalis = 55.75;
}
else if(340 <= tjmUmalis && tjmUmalis < 360){
   caPourcentUmalis = 55.49;
}
else if(360 <= tjmUmalis && tjmUmalis < 380){
   caPourcentUmalis = 55.25;
}
else if(380 <= tjmUmalis && tjmUmalis < 400){
   caPourcentUmalis = 55.04;
}
else if(400 <= tjmUmalis && tjmUmalis < 420){
   caPourcentUmalis = 54.86;
}
else if(420 <= tjmUmalis && tjmUmalis < 440){
   caPourcentUmalis = 55.70;
}
else if(440 <= tjmUmalis && tjmUmalis < 460){
   caPourcentUmalis = 55.50;
}
else if(460 <= tjmUmalis && tjmUmalis < 480){
   caPourcentUmalis = 55.31;
}
else if(480 <= tjmUmalis && tjmUmalis < 500){
   caPourcentUmalis = 55.15;
}
else if(500 <= tjmUmalis && tjmUmalis < 520){
   caPourcentUmalis = 54.99;
}
else if(520 <= tjmUmalis && tjmUmalis < 540){
   caPourcentUmalis = 54.48;
}
else if(540 <= tjmUmalis && tjmUmalis < 560){
   caPourcentUmalis = 54.36;
}
else if(560 <= tjmUmalis && tjmUmalis < 580){
   caPourcentUmalis = 54.25;
}
else if(580 <= tjmUmalis && tjmUmalis < 600){
   caPourcentUmalis = 54.15;
}
else if(600 <= tjmUmalis && tjmUmalis < 620){
   caPourcentUmalis = 54.06;
}
else if(620 <= tjmUmalis && tjmUmalis < 640){
   caPourcentUmalis = 53.98;
}
else if(640 <= tjmUmalis && tjmUmalis < 660){
   caPourcentUmalis = 53.90;
}
else if(660 <= tjmUmalis && tjmUmalis < 680){
   caPourcentUmalis = 53.82;
}
else if(680 <= tjmUmalis && tjmUmalis < 700){
   caPourcentUmalis = 53.74;
}
else if(tjmUmalis >= 700){
   caPourcentUmalis = 53.67;
}

var cainto100Umalis = caUmalis / 100;
var remunerationUmalis = cainto100Umalis * caPourcentUmalis;
document.getElementById("mySocieteUmalis").innerHTML = caPourcentUmalis + "%";
document.getElementById("myRemTotaleUmalis").innerHTML = formatter1.format(remunerationUmalis);
document.getElementById("myTjmUmalis").innerHTML = formatter2.format(tjmUmalis);
document.getElementById("caTotalUmalis").innerHTML = formatter2.format(caUmalis);
document.getElementById("myFraisUmalis").innerHTML = formatter2.format(fraisUmalis);;




// Société Highteckers 

var tjmHighteckers = url.searchParams.get("tjm");
var fraisHighteckers = url.searchParams.get("frais");
var salaireHighteckers = url.searchParams.get("salaire");
var nbJoursHighteckers = document.getElementById("nbJoursHighteckers").innerHTML = "20";
var caHighteckers = tjmHighteckers * nbJoursHighteckers ;
var caPourcentHighteckers;

if(tjmHighteckers <= 300  && tjmHighteckers < 320){
    caPourcentHighteckers =51.36;
}
else if(320 <= tjmHighteckers && tjmHighteckers < 340){
    caPourcentHighteckers =52.93;
}
else if(340 <= tjmHighteckers && tjmHighteckers < 360){
    caPourcentHighteckers =54.32;
}
else if(360 <= tjmHighteckers && tjmHighteckers < 380){
    caPourcentHighteckers =55.55;
}
else if(380 <= tjmHighteckers && tjmHighteckers < 400){
    caPourcentHighteckers =56.65;
}
else if(400 <= tjmHighteckers && tjmHighteckers < 420){
    caPourcentHighteckers =57.65;
}
else if(420 <= tjmHighteckers && tjmHighteckers < 440){
    caPourcentHighteckers =58.54;
}
else if(440 <= tjmHighteckers && tjmHighteckers < 460){
    caPourcentHighteckers =59.36;
}
else if(460 <= tjmHighteckers && tjmHighteckers < 480){
    caPourcentHighteckers =60.11;
}
else if(480 <= tjmHighteckers && tjmHighteckers < 500){
    caPourcentHighteckers =60.79;
}
else if(500 <= tjmHighteckers && tjmHighteckers < 520){
    caPourcentHighteckers =61.42;
}
else if(520 <= tjmHighteckers && tjmHighteckers < 540){
    caPourcentHighteckers =62.00;
}
else if(540 <= tjmHighteckers && tjmHighteckers < 560){
    caPourcentHighteckers =62.53;
}
else if(560 <= tjmHighteckers && tjmHighteckers < 580){
    caPourcentHighteckers =63.03;
}
else if(580 <= tjmHighteckers && tjmHighteckers < 600){
    caPourcentHighteckers =63.50;
}
else if(600 <= tjmHighteckers && tjmHighteckers < 620){
    caPourcentHighteckers =63.93;
}
else if(620 <= tjmHighteckers && tjmHighteckers < 640){
    caPourcentHighteckers =64.34;
}
else if(640 <= tjmHighteckers && tjmHighteckers < 660){
    caPourcentHighteckers =64.72;
}
else if(660 <= tjmHighteckers && tjmHighteckers < 680){
    caPourcentHighteckers =65.07;
}
else if(680 <= tjmHighteckers && tjmHighteckers < 700){
    caPourcentHighteckers =65.41;
}
else if (tjmHighteckers >= 700){
    caPourcentHighteckers =65.73;
}

var cainto100Highteckers = caHighteckers / 100;
var remunerationHighteckers = cainto100Highteckers * caPourcentHighteckers;
document.getElementById("mySocieteHighteckers").innerHTML = caPourcentHighteckers + "%";
document.getElementById("myRemTotaleHighteckers").innerHTML = formatter1.format(remunerationHighteckers);
document.getElementById("myTjmHighteckers").innerHTML = formatter2.format(tjmHighteckers);
document.getElementById("caTotalHighteckers").innerHTML = formatter2.format(caHighteckers);
document.getElementById("myFraisHighteckers").innerHTML = formatter2.format(fraisHighteckers);



// Société ABCPortage

var tjmABCPortage = url.searchParams.get("tjm");
var fraisABCPortage = url.searchParams.get("frais");
var salaireABCPortage = url.searchParams.get("salaire");
var nbJoursABCPortage = document.getElementById("nbJoursABCPortage").innerHTML = "20";
var caABCPortage = tjmABCPortage * nbJoursABCPortage ;
var caPourcentABCPortage;
var fraisGestionABCPortage;


// Affichage des frais de gestion en fonction du TJM
if(tjmABCPortage < 500){
    fraisGestionABCPortage = 8;
}
if(tjmABCPortage >= 500){
    fraisGestionABCPortage = 7;
}
document.getElementById("myFraisGestionABCPortage").innerHTML = fraisGestionABCPortage + "%";

//
if(tjmABCPortage <= 300  && tjmABCPortage< 320){
    caPourcentABCPortage = 50.40;
}
else if(320 <= tjmABCPortage && tjmABCPortage < 340){
    caPourcentABCPortage = 50.22;
}
else if(340 <= tjmABCPortage && tjmABCPortage < 360){
    caPourcentABCPortage = 50.06;
}
else if(360 <= tjmABCPortage && tjmABCPortage < 380){
    caPourcentABCPortage = 49.92;
}
else if(380 <= tjmABCPortage && tjmABCPortage < 400){
    caPourcentABCPortage = 49.79;
}
else if(400 <= tjmABCPortage && tjmABCPortage < 420){
    caPourcentABCPortage = 49.68;
}
else if(420 <= tjmABCPortage && tjmABCPortage < 440){
    caPourcentABCPortage = 49.57;
}
else if(440 <= tjmABCPortage && tjmABCPortage < 460){
    caPourcentABCPortage = 49.48;
}
else if(460 <= tjmABCPortage && tjmABCPortage < 480){
    caPourcentABCPortage = 49.39;
}
else if(480 <= tjmABCPortage && tjmABCPortage < 500){
    caPourcentABCPortage = 49.31;
}
else if(500 <= tjmABCPortage && tjmABCPortage < 520){
    caPourcentABCPortage = 49.76;
}
else if(520 <= tjmABCPortage && tjmABCPortage < 540){
    caPourcentABCPortage = 49.69;
}
else if(540 <= tjmABCPortage && tjmABCPortage < 560){
    caPourcentABCPortage = 49.63;
}
else if(560 <= tjmABCPortage && tjmABCPortage < 580){
    caPourcentABCPortage = 49.57;
}
else if(580 <= tjmABCPortage && tjmABCPortage < 600){
    caPourcentABCPortage = 49.52;
}
else if(600 <= tjmABCPortage && tjmABCPortage < 620){
    caPourcentABCPortage = 49.47;
}
else if(620 <= tjmABCPortage  && tjmABCPortage< 640){
    caPourcentABCPortage = 49.43;
}
else if(640 <= tjmABCPortage && tjmABCPortage < 660){
    caPourcentABCPortage = 49.38;
}
else if(660 <= tjmABCPortage && tjmABCPortage < 680){
    caPourcentABCPortage = 49.34;
}
else if(680 <= tjmABCPortage && tjmABCPortage < 700){
    caPourcentABCPortage = 49.30;
}
else if(tjmABCPortage >= 700){
    caPourcentABCPortage = 49.26;
}

var cainto100ABCPortage = caABCPortage / 100;
var remunerationABCPortage = cainto100ABCPortage * caPourcentABCPortage;
document.getElementById("mySocieteABCPortage").innerHTML = caPourcentABCPortage + "%";
document.getElementById("myRemTotaleABCPortage").innerHTML = formatter1.format(remunerationABCPortage);
document.getElementById("myTjmABCPortage").innerHTML = formatter2.format(tjmABCPortage);
document.getElementById("caTotalABCPortage").innerHTML = formatter2.format(caABCPortage);
document.getElementById("myFraisABCPortage").innerHTML = formatter2.format(fraisABCPortage);
