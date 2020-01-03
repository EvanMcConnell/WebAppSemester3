import _ from "lodash";

class stubAPI {
    state = {};
    
    constructor() {
        this.items = [
            {
                id: 1,
                title: 'Apples',
                type: 'Fruit',
                bought: false
            },
            {
                id: 2,
                title: 'Fish',
                type: 'meat',
                bought: false
            },
            {
                id: 3,
                title: 'Carrots',
                type: 'Vegetables',
                bought: false
            },
            {
                id: 4,
                title: 'Ice-Cream',
                type: 'Snacks',
                bought: false
            }
        ];
    }

    getAll() {
        return this.items;
    }

    isBought(id) {
        this.state = { items: [] }
        
        this.setState( {items: this.items.map((item) => {
          
          if(item.id === id){
            item.bought = !item.bought
          }
          return item;
        }) });
        console.log(this.state);
        this.items = this.state.items;
    }

    add(title, type, bought) {
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
        bought
        });
        return newLen > len;
    }

    delete(id){
        console.log("Deleting item : " + id);
        let elements = _.remove(this.items, item => item.id === id);
        console.log(this.items);
        return elements;
    }


}

export default new stubAPI();