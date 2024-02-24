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
let clickerPrice = 5

clickerBuyButton.addEventListener('click', function() {
	if (player.cookies >= clickerPrice) {
		clickerAmount++
		clickerPrice++
		clickerAmountDisplay.textContent = clickerAmount

		player.spend(clickerPrice)
		currentCookies.textContent = player.cookies
	}
})

// Grandma Upgrade
const grandmaBuyButton = document.getElementById('buyGrandmasButton')
const grandmaAmountDisplay = document.querySelector('#currentGrandmas')
let grandmaAmount = 0
let grandmaPrice = 20

grandmaBuyButton.addEventListener('click', function() {
	if (player.cookies >= grandmaPrice) {
		grandmaAmount++
		grandmaPrice = Math.round(grandmaPrice * 1.1)
		grandmaAmountDisplay.textContent = grandmaAmount

		player.spend(grandmaPrice)
		currentCookies.textContent = player.cookies
	}
})
