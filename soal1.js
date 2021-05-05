// Soal 1

const produk = [
    {
        id_produk: 1,
        nama_produk: 'Huawei P30 pro'
    },
    {
        id_produk: 2,
        nama_produk: 'Huawei Nova 5T'
    }
];

const stok_produk = [
    {
        id_produk: 1,
        qty: 15
    },
    {
        id_produk: 1,
        qty: 6
    },
    {
        id_produk: 2,
        qty: 4
    },
    {
        id_produk: 2,
        qty: 18
    }
];

// Answer

const hasil = [
    {
        nama_produk: produk[0].nama_produk,
        total_stok: stok_produk[0].qty + stok_produk[1].qty
    },
    {
        nama_produk: produk[1].nama_produk,
        total_stok: stok_produk[2].qty + stok_produk[3].qty
    }
]

console.log(hasil)