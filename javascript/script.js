document.getElementById('judul').innerHTML = "<h1> Javascript</h1>";

let nama = "Michie";
let umur = 16;
document.getElementById('nama').innerHTML = " Nama Saya : " + nama;
document.getElementById('umur').innerHTML =  `Umur Saya :  ${umur} tahun` ;

let mahasiswa = ["Joshua", "Leonardo", "Savero"];
console.log(mahasiswa);
mahasiswa.forEach( (mhs) => {
    document.getElementById('mahasiswa').innerHTML += `<li>${mhs}</li>`;
} )

let nilai = [
    {nama: "Michie", nilai: "A"},
    {nama: "Leo", nilai: "A+"},
    {nama: "Savero", nilai: "A+"},
];
console.log(nilai);
nilai.forEach ( (nilai) => {
    document.getElementById('nilai').innerHTML 
    += `<tr> 
    <td> ${nilai.nama}</td> <td> ${nilai.nilai}</td> 
    </tr>`;
})

fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json').then( Response => Response.json()).then(data =>{
    console.log(data);
    console.log(data.Infogempa.gempa);

console.log(data.Infogempa.gempa);
data.Infogempa.gempa.forEach ( (data) => {
    document.getElementById('gempa').innerHTML 
    += `<li>${data.Wilayah} ${data.Tanggal} ${data.Jam} ${data.Potensi}
    </li>`
     })
})