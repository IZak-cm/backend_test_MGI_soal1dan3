// Soal 3

const arrayOfObject = [
    {
        nama: 'Smith',
        hobi: 'Self Service'
    },
    {
        nama: 'Dio',
        hobi: 'Design Grafis'
    },
    {
        nama: 'Agung',
        hobi: 'Bermain Game'
    }
];

// Answer

const result = [
    {
        nama: arrayOfObject[2].nama,
        hobi: arrayOfObject[0].hobi
    }
];

console.log(result)