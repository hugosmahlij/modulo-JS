async function eventsApi(){
    try{
        var apiStats = await (await fetch('https://mind-hub.up.railway.app/amazing')).json()
    }
    catch(error){
        console.log(error)
    }

    pastEvents = apiStats.events.filter(event => event.assistance)

    pastEvents.map(event => {
        event.revenue = event.price * event.assistance
        event.percentageAssitance = 100 * event.assistance / event.capacity
    })

    const assistancePercentEv = pastEvents.sort((a,b) => a.percentageAssitance - b.percentageAssitance)
    console.log(assistancePercentEv);

    const assitanceMaxEv = assistancePercentEv[assistancePercentEv.length-1]

}
 eventsApi()