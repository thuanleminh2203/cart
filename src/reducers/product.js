const nameInitialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image : '',
        description: 'Sản phẩm do Apple phát hành',
        price : 500,
        inventory : 10
    },
    {
        id: 2,
        name: 'Samsung galaxy 7',
        image : '',
        description: 'Sản phẩm do Samsung phát hành',
        price : 600,
        inventory : 16
    },
    {
        id: 1,
        name: 'Oppo 2 Plus',
        image : '',
        description: 'Sản phẩm do Oppo phát hành',
        price : 350,
        inventory : 8
    }
];
const product = (state = nameInitialState, action) => {
    switch (action.type) {
        
      
        default:
            return [...state];
    }
}

export default product;