import { Player } from './player.js'

const player = new Player()

// Setting up DOM elements
const cookieButton = document.getElementById('cookieButton')
const currentCookies = document.querySelector('#currentCookies')
const totalCookies = document.querySelector('#totalCookies')

// eslint-disable-next-line prefer-const
let clickModifier = 1

cookieButton.addEventListener('click', function() {
	player.collect(1 * clickModifier)

	currentCookies.textContent = player.cookies
	totalCookies.textContent = player.stats.total
})
