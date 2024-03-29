export class Player {
	constructor() {
		this.cookies = 0
		this.stats = {
			total: 0,
			clicked: 0
		}
	}

	collect(amount) {
		this.cookies += amount
		this.stats.total += amount
	}

	spend(amount) {
		if (this.cookies >= amount) {
			this.cookies -= amount
			return true
		}
		return false
	}
}
