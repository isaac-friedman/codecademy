class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
      return this._title;
  }

  get isCheckedOut() {
      return this._isCheckedOut;
  }

  get ratings() {
      return this._ratings;
  }

  toggleCheckoutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(rating) {
      this._ratings.push(rating);
  }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}
