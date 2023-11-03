const products = [
    {
        id: 1,
        name: "Proteína Gainer Pro 13Lb",
        category: "proteina",
        price: 200000,
        stock: 3,
        img: "https://http2.mlstatic.com/D_NQ_NP_964311-MCO49951989673_052022-O.jpg",
        description: "description"
    },
    {
        id: 2,
        name: "Titan Army 12lb",
        category: "proteina",
        price: 218000,
        stock: 2,
        img: "https://globalnutrition.com.co/wp-content/uploads/2022/12/18-titan-ARMY-X-12-LBS-Render-1.jpg",
        description: "description"
    },
    {
        id: 3,
        name: "Mega Gainer 5lb",
        category: "proteina",
        price: 105000,
        stock: 10,
        img: "https://http2.mlstatic.com/D_NQ_NP_799750-MCO45188707627_032021-O.jpg",
        description: "description"
    },
    {
        id: 4,
        name: "TNT Mega Mass Gainer 3lb",
        category: "proteina",
        price: 78000,
        stock: 0,
        img: "https://i.linio.com/p/dfd25c659cff4867da17a1f5ee9df0b4-product.jpg",
        description: "description"
    },
    {
        id: 5,
        name: "Creatina Monohidrato Raw 360gr",
        category: "creatina",
        price: 70000,
        stock: 4,
        img: "https://www.fitnesspeople.com.co/images/thumbs/0005784_creatina-raw-series-72-srv_600.png",
        description: "description"
    },
    {
        id: 7,
        name: "Creatina Cr7ine Dynamic 350gr",
        category: "creatina",
        price: 87000,
        stock: 10,
        img: "https://tiendaondafitness.com/wp-content/uploads/2022/12/img_5110.jpeg",
        description: "description"
    },
    {
        id: 8,
        name: "Creatina Optimum Nutrition 600 Gramos",
        category: "creatina",
        price: 365000,
        stock: 12,
        img: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/opn/opn02385/l/37.jpg",
        description: "description"
    },
    {
        id: 9,
        name: "Intenze Pre-workout 900gr",
        category: "preentreno",
        price: 145000,
        stock: 5,
        img: "https://fittpro.co/wp-content/uploads/2021/12/Intenze-Fruit-Punch-Proscience-.png",
        description: "description"
    },
    {
        id: 10,
        name: "C4 Ripped 180gr",
        category: "preentreno",
        price: 115000,
        stock: 6,
        img: "https://cdn.miproteina.com.co/storage/images/products/c4-ripped-1.jpg?width=800&height=800",
        description: "description"
    },
    {
        id: 11,
        name: "Preentreno Psychotic",
        category: "preentreno",
        price: 167000,
        stock: 7,
        img: "https://http2.mlstatic.com/D_NQ_NP_661794-MCO48238694498_112021-O.jpg",
        description: "description"
    },
    {
        id: 12,
        name: "Amino X 435gr",
        category: "aminoacidos",
        price: 92000,
        stock: 3,
        img: "https://www.fitnesspeople.com.co/images/thumbs/0004822_amino-x-70-srv_600.jpeg",
        description: "description"
    },
    {
        id: 13,
        name: "Amino Energy 585gr",
        category: "aminoacidos",
        price: 175000,
        stock: 4,
        img: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/opn/opn02665/l/25.jpg",
        description: "description"
    },
    {
        id: 14,
        name: "Eaas Mix Aminoacidos Esenciales 570gr",
        category: "aminoacidos",
        price: 116000,
        stock: 10,
        img: "https://http2.mlstatic.com/D_NQ_NP_839335-MCO52416652831_112022-O.jpg",
        description: "description"
    },
    {
        id: 15,
        name: "The One Multivitaminico 300gr",
        category: "multivitaminicos",
        price: 90000,
        stock: 9,
        img: "https://www.fitnesspeople.com.co/images/thumbs/0005157_the-one-proscience-multivitaminico_600.jpeg",
        description: "description"
    },
    {
        id: 16,
        name: "Multi-vitaminic Vitaliah 700gr",
        category: "multivitaminicos",
        price: 35000,
        stock: 4,
        img: "https://cdnx.jumpseller.com/mis-vitaminas/image/20027958/resize/610/610?1634604203",
        description: "description"
    },
    {
        id: 17,
        name: "Platinum Multivitaminico 90 Tabletas Muscletech",
        category: "multivitaminicos",
        price: 70000,
        stock: 7,
        img: "https://tienda306.com/2827-large_default/muscleteach-platinum-multivitamin-formula-diaria-avanzada-90-tabletas.jpg",
        description: "description"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
} 