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

// Clicker Upgrade
const clickerBuyButton = document.getElementById('buyClickerButton')
const clickerAmountDisplay = document.querySelector('#currentClickers')
let clickerAmount = 0

clickerBuyButton.addEventListener('click', function() {
	if (player.cookies >= 5) {
		clickerAmount++
		clickerAmountDisplay.textContent = clickerAmount

		player.spend(5)
		currentCookies.textContent = player.cookies
	}
})
