const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function search(e){
    e.preventDefault();
    let frase = document.getElementById ("loading-sentence") ;
    let comp = document.getElementById ("compare"); 
    let answ = document.getElementById ("risposta");
    let info = document.getElementById("pInfo");
    frase.innerHTML="<p>Invio del prompt a: <br> ChatGPT, Gemini, Claude</p>";
    await sleep(3000)
    comp.textContent="Confronto delle risposte..."
    await sleep(3000)
    let risposta = "La migliore risposta individuata è quella di Gemini: <br><br>" + "Ricevuto. Indosso i panni dell'esperto di produttività e coaching strategico e rispondo al prompt che abbiamo appena creato. Ecco la tua guida definitiva al Principio di Pareto.<br><br>🎯 La Strategia dell'80/20: Massimo Risultato, Minimo Sforzo<br>Il Principio di Pareto non è una formula magica, ma una legge statistica osservata per la prima volta dall'economista Vilfredo Pareto. Egli notò che il 20% della popolazione possedeva l'80% della ricchezza. In termini di produttività, significa che la maggior parte di ciò che facciamo è rumore, mentre solo una piccola parte è segnale.<br><br>🧠 La Logica: Perché funziona?<br>Il mondo non è lineare. Non tutte le ore di lavoro hanno lo stesso valore e non tutte le pagine di un libro sono ugualmente importanti. Concentrarsi sul Vital Few (i pochi vitali) invece che sui Trivial Many (i molti banali) ti permette di liberare tempo ed energia. Se identifichi quel 20% di attività che muove davvero l'ago della bilancia, otterrai l'80% del successo con una frazione dello sforzo totale.<br><br>🗺️ 3 Scenari Applicativi<br><br>1. Studio (Per lo Studente)<br>Invece di leggere e sottolineare ogni singola pagina (attività a basso impatto), focalizzati sui concetti che il professore ha ripetuto più spesso o che compaiono costantemente nei temi d'esame degli anni precedenti.<br><br>Azione: Dedica il primo 20% del tuo tempo a mappare l'indice e a capire i pilastri della materia. Una volta capiti quelli, il restante 80% dei dettagli si incastrerà da solo.<br><br>2. Lavoro (Per il Dipendente)<br>In ufficio, l'80% del valore che porti all'azienda deriva probabilmente da due o tre compiti chiave (es. chiudere contratti, risolvere bug critici, scrivere report strategici). Le email, le riunioni non necessarie e le chat sono il rumore che consuma l'80% del tempo producendo solo il 20% del valore.<br><br>Azione: Identifica i compiti che il tuo capo considera fondamentali. Svolgi quelli per primi, quando la tua energia è al massimo, e lascia la gestione delle email a fine giornata.<br><br>3. Vita Privata (Per Tutti)<br>Applica la regola alle tue relazioni o alla salute. Spesso l'80% della tua felicità deriva dal tempo passato con il 20% delle persone che conosci. Allo stesso modo, l'80% della tua forma fisica dipende dal 20% delle tue abitudini (dormire bene e mangiare cibo vero, piuttosto che comprare integratori costosi).<br><br>Azione: Semplifica. Riduci gli impegni sociali che ti svuotano e investi quel tempo nelle poche attività che ti rigenerano davvero.<br><br>📝 Piano d'Azione: Le 5 domande del mattino<br>Per non perdere la bussola, ogni mattina (mentre bevi il caffè) fatti queste domande:<br><br>'Se oggi potessi completare una sola cosa per sentirmi soddisfatto, quale sarebbe?'<br><br>'Questa attività fa parte del mio 20% ad alto impatto o è solo un modo per sentirmi occupato?'<br><br>'Qual è quel compito che, se fatto, renderebbe tutti gli altri più facili o superflui?'<br><br>'Quale attività mi sta causando l'80% dello stress in questo momento e come posso affrontarne il nucleo?'<br><br>'Cosa posso eliminare, delegare o rimandare oggi per fare spazio a ciò che conta davvero?' <br>Ti è utile questa analisi o preferiresti che approfondissimo come applicare questo metodo a un obiettivo specifico che hai in mente (magari un progetto di lavoro o un esame imminente)?"
    let respVett = risposta.split(" ");
    info.innerHTML = "";
    answ.innerHTML="<p>" ;
    for (let fraz of respVett) {
        answ.innerHTML = answ.innerHTML + fraz + " ";
        await sleep(10);
    }
    answ.innerHTML=answ.innerHTML + "</p>" ;
    //#d8c7fa
}
