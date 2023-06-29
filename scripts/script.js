const secret_api = 'at_vtCnJoIC0NKlCUvq01zFkpo5AUqkD'
const api_uri = 'https://geo.ipify.org/api/'
let current_version = 'v1'

let current_ip = document.getElementById('current-ip')
let current_town = document.getElementById('current-town')
let current_zone = document.getElementById('current-zone')
let current_isp = document.getElementById('current-isp')

const entered_ip = document.getElementById('ip-add')
const search_btn = document.getElementById('search-btn')


const map = L.map('map', {
    'center' : [0,0],
    'zoom': 10,
    'layers': [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

        })
    ]
})

updateMarker = (update_marker = [-23.5489, -46.6388]) => {
    map.setView(update_marker, 13)
    L.marker(update_marker).addTo(map);
}

getIPDetails = (default_ip) => {
    if(default_ip == undefined){
        var ip_url = `${api_uri}${current_version}?apiKey=${secret_api}`
    } 
    else {
        var ip_url = `${api_uri}${current_version}?apiKey=${secret_api}&ipAddress=${default_ip}`
    }

    fetch(ip_url)
    .then(results => results.json())
    .then(data => {
        current_ip.innerHTML = data.ip
        current_town.innerHTML = `${data.location.region} ${data.location.country} ${data.location.postalCode}`
        current_zone.innerHTML = data.location.timezone
        current_isp.innerHTML = data.isp

        updateMarker([data.location.lat, data.location.lng])
    })
    .catch(error => {
        alert("Unable to get IP details")
        console.log(error)
    })

}

document.addEventListener('load', updateMarker())

search_btn.addEventListener('click', e => {
    e.preventDefault()
    if(entered_ip.value != '' && entered_ip.value != null){
        getIPDetails(entered_ip.value) 
        return 
    } 
    alert ("Please enter a valid IP")
})