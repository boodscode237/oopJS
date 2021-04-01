const userOne = {
    username: 'John',
    email: 'john@doe.com',
    login() {
        console.log("the user logged in");
    },
    logout() {
        console.log("The user logged out");
    }
}

const userTwo = {
    username: 'Johanna',
    email: 'johanna@doe.com',
    login() {
        console.log("the user logged in");
    },
    logout() {
        console.log("The user logged out");
    }
}

console.log(userOne.email, userOne.username);

// a better way when we want to create objects of the same kind is to use
// classes

class User {
    constructor(username, email) {
        // setting up properties
        this.username = username
        this.email = email
        this.score = 0
    }

    login() {
        console.log(`${this.username} just logged in`)
        return this
    }
    logout() {
        console.log(`${this.username} just logged out`)
        return this
    }
    incScore() {
        this.score += 1
        console.log(`${this.username} has a score of ${this.score}`);
        return this
    }
}

// Inheritance

class Admin extends User {
    // We use constructor here because we want admin to have his own variables diffrents from his parents own
    constructor(username, email, title) {
        // super allow us to assign some parents class to admin 
        super(username, email)
        this.title = title
    }
    deleteUser(user) {
        users = users.filter(u => {
            return u.username !== user.username
        })
    }
}

// a way to add methods in a Class
User.prototype.logo = function() {
    console.log(`${this.username} has logo`);
}



const user1 = new User('master', "master@tion.com")
const user2 = new User('Zem', 'zem@z.com')
const user3 = new User('cou', 'cou@cou.com')

const admin1 = new Admin('Boods', "code@c.com", "Sudo Admin")
let users = [user1, user2]
console.log(user1);
console.log(user2);
console.log(admin1);
admin1.deleteUser(user3)
console.log(users);