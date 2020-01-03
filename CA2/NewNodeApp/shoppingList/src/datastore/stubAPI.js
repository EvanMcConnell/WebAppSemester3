import _ from "lodash";

class StubAPI {
    constructor() {
        this.items = [
        {
            id: 1,
            title: "Apples",
            type: "Fruit",
            comments: [],
            quantity: 10
        },
        {
            id: 2,
            title: "Ham",
            type: "Meat",
            comments: [],
            quantity: 1
        },
        {
            id: 3,
            title:
            "Sweetcorn",
            type: "Veg",
            comments: [],
            quantity: 3
        },
        {
            id: 4,
            title:
            "Skittles",
            type: "Snacks",
            comments: [],
            quantity: 2
        },
        {
            id: 5,
            title: "Bread",
            type:
            "Carb",
            comments: [],
            quantity: 1
        },
        {
            id: 6,
            title: "Bottled Water",
            type: "Drink",
            comments: [],
            quantity: 5
        },
        {
            id: 7,
            title: "Coffee Beans",
            type: "Drink",
            comments: [],
            quantity: 1
        }
        ];
    }

    getAll() {
        return this.items;
    }

    add(title, type, quantity) {
        let id = 1;
        let last = _.last(this.items);
        if (last) {
        id = last.id + 1;
        }
        let len = this.items.length;
        let newLen = this.items.push({
        id,
        title,
        type,
        comments: [],
        quantity
        });
        return newLen > len;
    }

    increaseQuantity(id) {
        let index = _.findIndex(this.items, item => item.id === id);
        if (index !== -1) {
        this.items[index].quantity += 1;
        return true;
        }
        return false;
    }

    decreaseQuantity(id) {
        let index = _.findIndex(this.items, item => item.id === id);
        if (index !== -1 && this.items[index].quantity > 0) {
        this.items[index].quantity -= 1;
        return true;
        }
        return false;
    }

    getItem(id) {
        let index = _.findIndex(this.items, item => item.id === id);
        let result = index !== -1 ? this.items[index] : null;
        return result;
    }

    addComment(itemId, c, n) {
        let item = this.getItem(itemId);
        let id = 1;
        let last = _.last(item.comments);
        if (last) {
        id = last.id + 1;
        }
        item.comments.push({ id: id, comment: c, quantity: 0 });
    }

    upvoteComment(itemId, commentId) {
        let item = this.getItem(itemId);
        let index = _.findIndex(item.comments, c => c.id === commentId);
        if (index !== -1) {
        item.comments[index].quantity += 1;
        }
    }
}

export default new StubAPI();