const secret_api = 'ENTER_YOUR_API'
const bypass_cors_url = 'https://cors-anywhere.herokuapp.com/' /* bypass cors cuz we are using localhost */
const api_uri = 'https://geo.pify.org/api/'
let current_version = 'v1'

let current_ip = document.getElementById('current-ip')
let current_town = document.getElementById('current-town')
let current_zone = document.getElementById('current-zone')
let current_isp = document.getElementById('current-isp')

const entered_ip = document.getElementById('ip-add')
const search_btn = document.getElementById('search-btn')

const headers_option = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
}

const map = L.map()