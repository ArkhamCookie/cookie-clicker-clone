export class Player {
	constructor() {
		this.cookies = 0
		this.stats = {
			total: 0,
			clicked: 0
		}
	}

	collect(ammount) {
		this.cookies += ammount
		this.stats.total += ammount
	}

	spend(ammount) {
		if (this.cookies >= ammount) {
			this.cookies -= ammount
			return true
		}
		return false
	}
}
