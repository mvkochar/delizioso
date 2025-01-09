type TProduct = {
    id: number
    image: string
    title: string
    rating: number
    description: string
    price: string
}

const ProductsList:TProduct[] = [
    {
        id: 0,
        image: '/images/catalog/1.png',
        title: 'Spaghetti',
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        price: '12.05'
    },

    {
        id: 1,
        image: '/images/catalog/2.png',
        title: 'Gnocchi',
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        price: '12.05'
    },

    {
        id: 2,
        image: '/images/catalog/3.png',
        title: 'Rovioli',
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        price: '12.05'
    },

    {
        id: 3,
        image: '/images/catalog/4.png',
        title: 'Penne Alla Vodak',
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        price: '12.05'
    },

    {
        id: 4,
        image: '/images/catalog/5.png',
        title: 'Risoto',
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        price: '12.05'
    },

    {
        id: 5,
        image: '/images/catalog/6.png',
        title: 'Splitza Signature',
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        price: '12.05'
    },
]

export default ProductsList