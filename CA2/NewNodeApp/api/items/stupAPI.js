import _ from 'lodash';

  const items = [
    {
        id: 1,
        title: "Apples",
        type: "Fruit",
        quantity: 10
    },
    {
        id: 2,
        title: "Ham",
        type: "Meat",
        quantity: 1
    },
    {
        id: 3,
        title:
        "Sweetcorn",
        type: "Veg",
        quantity: 3
    },
    {
        id: 4,
        title:
        "Skittles",
        type: "Snacks",
        quantity: 2
    },
    {
        id: 5,
        title: "Bread",
        type:
        "Carb",
        quantity: 1
    },
    {
        id: 6,
        title: "Bottled Water",
        type: "Drink",
        quantity: 5
    },
    {
        id: 7,
        title: "Coffee Beans",
        type: "Drink",
        quantity: 1
    }
      ];


     const stubAPI = {
         getAll: () => {
            return items;
          },
         add: (t, ty, q) => {
              if (!(t && ty && q)) return false;
              let id = 1;
              const last = _.last(items);
              if (last) {
                 id = last.id + 1;
              }
              let len = items.length;
              let newLen = items.push({
                  'id': id,
                 'title': t, 'type': ty,'quantity': q});
               return newLen > len?id:-1;
              },
         increaseQuantity: (id) => {
             const index = _.findIndex(items,
                   (item) => {
                    return item.id == id;
                  } );
             if (index !== -1) {
                  items[index].quantity += 1;
                  return true;
                }
              return false;
           },
           decreaseQuantity: (id) => {
            const index = _.findIndex(items,
                  (item) => {
                   return item.id == id;
                 } );
            if (index !== -1) {
                 items[index].quantity -= 1;
                 return true;
               }
             return false;
          },
         getItem: (id) => {
            let result = null;
            const index = _.findIndex(items,
                   (item) => {
                    return item.id == id;
                  } );
             if (index !== -1) {
                result = items[index];
                    }
            return result;
            }
      };
    export default stubAPI;