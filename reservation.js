 

	
	var  btv=0;
	var carb=0;
	var prv=0;
	function Reservation_moto() {
		document.getElementById("Hybrade").style="display:none";
		document.getElementById("Diesel").style="display:none";
		document.getElementById("Electrique").style="display:visible";
		document.getElementById("Essence").style="display:visible";
		document.getElementById("Automatique").style="display:none";
		document.getElementById("Manuelle").style="display:none";
		prv=10;
	}

	function Reservation_citadine(){
		document.getElementById("Automatique").style="display:none";
		document.getElementById("Manuelle").style="display:visible";
		document.getElementById("Hybrade").style="display:visible";
		document.getElementById("Diesel").style="display:visible";
		document.getElementById("Electrique").style="display:visible";
		document.getElementById("Essence").style="display:visible";
		prv=12;

	}
	function Reservation_compact(){
        document.getElementById("Hybrade").style="display:visible";
		document.getElementById("Essence").style="display:visible";
	 	document.getElementById("Diesel").style="display:visible";
		document.getElementById("Electrique").style="display:none";
		document.getElementById("Manuelle").style="display:visible";
		document.getElementById("Automatique").style="display:none";
		prv=14;

	}
	function Reservation_berline(){
		document.getElementById("Hybrade").style="display:visible";
		document.getElementById("Essence").style="display:visible";
	 	document.getElementById("Diesel").style="display:visible";
	    document.getElementById("Electrique").style="display:none";		
		document.getElementById("Manuelle").style="display:none";
		document.getElementById("Automatique").style="display:visible";

		 prv=20;

	}
	function Reservation_utilitaire(){
		document.getElementById("Electrique").style="display:none";
		document.getElementById("Hybrade").style="display:none";
		document.getElementById("Essence").style="display:none";
		document.getElementById("Diesel").style="display:visible";
	 	document.getElementById("Manuelle").style="display:visible";
		document.getElementById("Automatique").style="display:none";

		prv=16;

	}
	function Reservation_engin_de_chantier(){
		document.getElementById("Electrique").style="display:none";
		document.getElementById("Hybrade").style="display:none";
		document.getElementById("Diesel").style="display:visible";
		document.getElementById("Essence").style="display:visible";
	 	document.getElementById("Manuelle").style="display:visible";
		document.getElementById("Automatique").style="display:none";

		prv=900;

	}
	function Reservation_camion(){
		document.getElementById("Electrique").style="display:none";
		document.getElementById("Hybrade").style="display:none";
		document.getElementById("Essence").style="display:none";
		document.getElementById("Diesel").style="display:visible";
	 	document.getElementById("Automatique").style="display:visible";
		 document.getElementById("Manuelle").style="display:none";

		prv=250;
	}


function calcul() {
if(prv==0){
	alert('selectionner un type');
}

	var days=document.getElementById('days').value;
	var i=0;
	var tabC=[5,9,14,21];
	var tamanAuto=[1,19];
	var tabp=[10,12,14,20,16,900,250];
	var rates = document.getElementsByName('carburant');
	var btvs = document.getElementsByName('manAuto');
	var rate_value=-1;
	var manAuto_value=-1;
	for(i = 0; i < rates.length; i++){
    	if(rates[i].checked){
        	rate_value = i;
    }
}
		if(rate_value!=-1)
     carb=tabC[rate_value];
    for(i = 0; i < btvs.length; i++){
    	if(btvs[i].checked){
        	manAuto_value = i;
    }
}
	if(manAuto_value!=-1)
    btv=tamanAuto[manAuto_value];
    var prixtotale= (prv +carb*100/prv + btv*100/prv)*days;
	var total = prixtotale.toFixed(2);
    document.getElementById("prix").innerHTML= total + " £";
}




