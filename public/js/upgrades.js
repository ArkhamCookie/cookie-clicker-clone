export class Clicker {
	buy(cookies) {
		if (cookies < 5) {
			return false
		}
		return cookies - 5
	}
}
