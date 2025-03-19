//задание №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
    }
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

// Задание №2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (const book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex((book) => book.name === bookName);
        if (bookIndex !== -1) {
            const book = this.books.splice(bookIndex, 1)[0];
            return book;
        }
        return null;
    }
}


//Задача №3

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }
        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }
    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        }
        const marksForSubject = this.marks[subject];
        const sum = marksForSubject.reduce((acc, mark) => acc + mark, 0);
        return sum / marksForSubject.length;
    }
    getAverage() {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        }
        let totalAverage = 0;
        for (const subject of subjects) {
            totalAverage += this.getAverageBySubject(subject);
        }
        return totalAverage / subjects.length;
    }
}