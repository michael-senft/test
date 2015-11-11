# Voortgangsverslag 1 **Joske Vermeulen**
# (Voorlopige) Titel onderwerp:
## Promotors  *Tim Dams, tim.dams@ap.be  *Tim Van Broekhoven, tim.vanbroekhoven@aspex.be
<!--Zet hier alle namen+email van je verschillende promotors (stagebegeleider, stagementor). Zeker in vet zetten indien er veranderingen hebben plaatsgevonden-->
## Abstract
<!--Het abstract is een samenvatting van je totale bachelorproef, inclusief reeds gekende resultaten-->


ASPEX is een bedrijf dat cloudoplossingen biedt aan KMO en ISV. Ze hebben hiervoor hun eigen datacenter maar bieden ook alle Microsoft Azure diensten aan.  
Voor de ISV's bieden ze vooral devops, public cloud en private cloud aan. Dan hebben ze nog Office365, EMS waaronder Azure AD, Intune en RMS behoren, zijn de producten dat ze voor hun kmo's aanbieden.

Ze hebben een monitoring dat klanten kunnen gebruiken om hun servers in het oog te houden. Dit willen ze nu naar de Microsoft Azure market place brengen. Hiervoor ga ik templates en images maken die de klant kan installeren zodat zijn subscription gemonitord kan worden.  
Op deze VM zal dan een webapp draaien waarop gekozen kan worden welke instanties hij gemonitord wilt hebben. Mijn BAP zal eruit bestaan om deze deze app volledig werkend in de Microsoft Azure market place te krijgen. Dit bestaat uit werkende templates en images te maken waarop de vm gedeployed kan worden. Ook de webapp die opgebouwd zal worden met ASP.NET en het MVC model zal hierbij behoren.

## Technische omschrijving
<!--Technische omschrijving van de evolutie van het project tijdens de betrokken periode, met aanduiding van de reeds bekomen resultaten en een planning voor de verdere uitwerking, welke problemen zijn ondervonden en hun oplossingen:-->
<!--Minimum 3000 woorden-->


Wij hebben twee mogelijke keuzes om de monitoring aan te bieden in de Microsoft Azure market place. Via een solution template of via een image. Een solution template is een template waarin je met een json file alle instanties en hun instellingen kan meegeven zodat deze een specifieke configuratie hebben. Met een image moet je een VM instellen naar je wensen en de nodige programma's installeren, je kan deze configuratie ook doen via een DSC script. Het DSC script zal ervoor zorgen dat tijdens de provisionering van de VM extra windows configuraties kunnen gebeuren, vb: IIS.  
We zijn uiteindelijk voor de image gegaan omdat blijkbaar bij de solution template de mensen voor het deployen de json zelf kunnen aanpassen in de portal en er kan ook geen billing op gebeuren wat uiteraard een belangrijke feature is als je een betalende monitoring wilt aanbieden.
De eerste stap om een image op Azure te maken is een basis vm te starten. We baseren ons op Windows Server 2012 R2. Daarop installeren we azure powershell zodat het de azure cmdlets kan runnen die in het startup script zitten, ook installeren we IIS zodat hierop de webapp kan draaien. Om ervoor te zorgen dat de VM geconfigureerd wordt, plaatsen er een setupcomplete2.cmd bestand in de system32 map op de C: schijf. 
Dit bestand zal dan tijdens het provisionen een script downloaden vanuit onze azure storage account. Nadat setupcomplete2.cmd op de VM geplaatst is kunnen we de VM syspreppen zodat deze gebruikt kan worden als image. Na het syspreppen verwijderen we de VM en behouden we enkel de OSdisk, welk een VHD file is. Met deze file kan dan via een script de uiteindelijke image gemaakt worden.   

De webapp zal op de VM draaien die de klant op de market place heeft gekocht en gestart in zijn subscription. Deze wordt geschreven in ASP.NET met Model-View-Controller. In deze webapp zal de gebruiker zich moeten inloggen met zijn Azure credentials. Hierna worden zijn VM's in een lijst getoond, waaruit hij kan aanvinken welke gemonitord moeten worden. Omdat er een verschil is met de klassieke VM's en degene die door de Resource manager worden gedeployed, zullen deze in 2 verschillende lijsten getoond worden. Het verschil tussen de klassieke VM's en de resource manager hangt samen met de portals van Azure. De klassieke VM's zijn die in de normale portal worden gedeployed of via powershell op de oude manier. De resource manager hangt vast aan de nieuwe preview portal. Het grootste verschil met de vorige portal is dat alle intanties worden gedeployed in een resourcegroup, ook zijn er voor de preview portal nieuwe cmdlets.  
De webapp komt aan de vm lijst via een script dat met de user zijn credentials zal inloggen en zo een json file download van zijn VM's. Maar omdat je met de twee portals zit zal je ook twee json files moeten downloaden. Nadat de user zijn keuze heeft gemaakt klikt hij op de knop monitor. Nu wordt er naar onze SCOM omgeving de lijst gestuurd van gekozen VM's, waarop dan agents naartoe gestuurd worden. Vanaf nu zijn de klant zijn VM's gemonitord bij ASPEX.  
Tussen het kopen van de monitoring app in de market place en het installeren van de agents op de VM's zit nog een acceptatie die de afdeling sales moet opvolgen.
## Extra informatie
### Bijscholingen
<!--Bijgewoonde seminaries, presentaties, workshops, bedrijfsbezoeken etc in deze periode (onderwerp, datum, korte samenvatting en beoordeling)-->

### Nieuwe contacten
<!--Nieuwe contacten gemaakt in deze periode (naam, voornaam, e-mail, telefoonnummer, bedrijf, functie, relevantie voor het werk)-->

### Literatuur
<!--Nieuwe contacten gemaakt in deze periode (naam, voornaam, e-mail, telefoonnummer, bedrijf, functie, relevantie voor het onderzoek)-->
