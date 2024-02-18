import { Player } from './player.js'

const player = new Player()

// Setting up DOM elements
const cookieButton = document.getElementById('cookieButton')
const currentCookies = document.querySelector('#currentCookies')
const totalCookies = document.querySelector('#totalCookies')

cookieButton.addEventListener('click', function() {
	player.collect(1)

	currentCookies.textContent = player.cookies
	totalCookies.textContent = player.stats.total
})
