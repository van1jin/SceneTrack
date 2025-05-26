let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let langBtn = document.getElementById('langbt');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
let logString = "";
let lang = "en";

startBtn.addEventListener('click', function () {
	timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', function () {
	timer = false;
});

resetBtn.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
	document.getElementById('log-txt').innerHTML = "";
	logString = "";
});

langBtn.addEventListener('click', function () {
    if (langBtn.innerHTML == "Deutsch") {
        langBtn.innerHTML = "English";
        lang = "de";
        document.getElementById('btn-de').style.display = 'block';
        document.getElementById('btn-en').style.display = 'none';
    } else {
        langBtn.innerHTML = "Deutsch";
        lang = "en";
        document.getElementById('btn-de').style.display = 'none';
        document.getElementById('btn-en').style.display = 'block';
    }
});

document.getElementById('ssss-en').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | 4S<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('ssss-de').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | 4S<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('notarzt-en').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Call for Doctor<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('notarzt-de').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Notarzt Nachforderung<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('ansprache-en').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Talking to the Patient<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('ansprache-de').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Ansprache des Patienten<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('bewusstsein-en').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Assessment of consciousness<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('bewusstsein-de').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Bewusstseinskontrolle<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('sampler-en').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | SAMPLER<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('sampler-de').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | SAMPLER<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('opqrst-en').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | OPQRST<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('opqrst-de').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | OPQRST<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('reeval-en').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Reevaluation of the patients state<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('reeval-de').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Reevaluation des Patientenzustandes<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('zugang-en').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Start of iv/io access<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('zugang-de').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Anlage i.v./i.o.-Zugang<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('critical-en').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Checking for critical bleeding<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('critical-de').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Kontrolle kritischer Blutungen<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('atemweg-en').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Assessment of the airway<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('atemweg-de').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Kontrolle des Atemwegs<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('af-en').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Assessment of respiratory rate<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('af-de').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Kontrolle der Atemfrequenz<br>";
	document.getElementById('log-txt').innerHTML = logString;
});


document.getElementById('auskultation-en').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Auskultation der Lunge<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('auskultation-de').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Auskultation der Lunge<br>";
	document.getElementById('log-txt').innerHTML = logString;
});


document.getElementById('spo').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Anlage SpO2-Sensor<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('puls').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Pulskontrolle<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('hf').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Kontrolle der Herzfrequenz<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('rr').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Kontrolle des Blutdrucks<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('ekg').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Kontrolle/Ausdruck des EKG<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('recap').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Kontrolle der Recap-Zeit<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('gcs').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Kontrolle der GCS<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('bz').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Kontrolle des BZ<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('fast').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Untersuchung nach FAST<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('verletzungen').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Kontrolle auf Verletzungen / deren Versorgung<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('temp').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Temperaturkontrolle<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('erkannt').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Reanimationspflichtigkeit erkannt<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('patches').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Patches geklebt<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('schock').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Schock Abgegeben<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('analyse').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Rhythmusanalyse<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('supra').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Gabe Adrenalin 1mg/10ml<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('amio').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Gabe Amiodaron 300/150mg<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('tubus').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | Intubation<br>";
	document.getElementById('log-txt').innerHTML = logString;
});

document.getElementById('rosc').addEventListener('click', function () {
    if (lang == "en") {
        	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | ROSC<br>";
    } else {
        logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | ROSC<br>";
	document.getElementById('log-txt').innerHTML = logString;
	}
});

document.getElementById('other').addEventListener('click', function () {
	logString = logString + ">>> " + hour + ":" + minute + ":" + second + " | " + document.getElementById('andere').value + "<br>";
	document.getElementById('andere').value = "";
	document.getElementById('log-txt').innerHTML = logString;
});

function stopWatch() {
	if (timer) {
		count++;

		if (count == 100) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour;
		let minString = minute;
		let secString = second;
		let countString = count;

		if (hour < 10) {
			hrString = "0" + hrString;
		}

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second <10) {
			secString = "0" + secString;
		}

		if (count < 10) {
			countString = "0" + countString;
		}

		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('count').innerHTML = countString;
		setTimeout(stopWatch, 10);
	}
}
