export class Util {
  public static years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021
  ,2022,2023,2024,2025,2026,2027,2028,2029,2030]

  public static months = [
    {name:'January', last:'31', id: 1, month:'01' },
    {name:'Febuary', last:'28', id: 2, month:'02'},
    {name:'March', last:'31', id: 3, month:'03'},
    {name:'April', last:'30', id: 4, month:'04'},
    {name:'May', last:'31', id: 5, month:'05'},
    {name:'June', last:'30', id: 6, month:'06'},
    {name:'July', last:'31', id: 7, month:'07'},
    {name:'August', last:'31', id: 8, month:'08'},
    {name:'September', last:'30', id: 9, month:'09'},
    {name:'October', last:'31', id: 10, month:'10'},
    {name:'November', last:'30', id: 11, month:'11'},
    {name:'December', last:'31', id: 12, month:'12'}
  ]

  public static banks = [
    { "id": "1", "name": "Access Bank" ,"code":"044" },
    { "id": "2", "name": "Citibank","code":"023" },
    { "id": "3", "name": "Diamond Bank","code":"063" },
    { "id": "4", "name": "Dynamic Standard Bank","code":"000" },
    { "id": "5", "name": "Ecobank Nigeria","code":"050" },
    { "id": "6", "name": "Fidelity Bank Nigeria","code":"070" },
    { "id": "7", "name": "First Bank of Nigeria","code":"011" },
    { "id": "8", "name": "First City Monument Bank","code":"214" },
    { "id": "9", "name": "Guaranty Trust Bank","code":"058" },
    { "id": "10", "name": "Heritage Bank Plc","code":"030" },
    { "id": "11", "name": "Jaiz Bank","code":"301" },
    { "id": "12", "name": "Keystone Bank Limited","code":"082" },
    { "id": "13", "name": "Providus Bank Plc","code":"101" },
    { "id": "14", "name": "Polaris Bank","code":"076" },
    { "id": "15", "name": "Stanbic IBTC Bank Nigeria Limited","code":"221" },
    { "id": "16", "name": "Standard Chartered Bank","code":"068" },
    { "id": "17", "name": "Sterling Bank","code":"232" },
    { "id": "18", "name": "Suntrust Bank Nigeria Limited","code":"100" },
    { "id": "19", "name": "Union Bank of Nigeria","code":"032" },
    { "id": "20", "name": "United Bank for Africa","code":"033" },
    { "id": "21", "name": "Unity Bank Plc","code":"215" },
    { "id": "22", "name": "Wema Bank","code":"035" },
    { "id": "23", "name": "Zenith Bank","code":"057" }
  ]
  
  public static period = [
    {name: 'Jan', id: 1},
    {name: 'Feb', id: 2},
    {name: 'Mar', id: 3},
    {name: 'Apr', id: 4},
    {name: 'May', id: 5},
    {name: 'Jun', id: 6},
    {name: 'Jul', id: 7},
    {name: 'Aug', id: 8},
    {name: 'Sep', id: 9},
    {name: 'Oct', id: 10},
    {name: 'Nov', id: 11},
    {name: 'Dec', id: 12}
  ]

  public static sidebarMenu = [
    // { 
    //   name: 'Dashboard', icon: 'speed', route: '/app', 
    // },

    {
      name: 'User Mgt', icon: 'manage_accounts', route: '/app/users', 
    },
    
    {
      name: 'Self Service', icon: 'self_improvement', route: '/app/users', 
    },
    
    { 
      name: 'Settings', icon: 'settings', route: '/app/settings', 
    },
  ]

  public static states = [
    { "state": { "name": "Abia", "id": 1, "locals": [{ "name": "Aba North", "id": 1 }, { "name": "Aba South", "id": 2 }, { "name": "Arochukwu", "id": 3 }, { "name": "Bende", "id": 4 }, { "name": "Ikwuano", "id": 5 }, { "name": "Isiala Ngwa North", "id": 6 }, { "name": "Isiala Ngwa South", "id": 7 }, { "name": "Isuikwuato", "id": 8 }, { "name": "Obi Ngwa", "id": 9 }, { "name": "Ohafia", "id": 10 }, { "name": "Osisioma", "id": 11 }, { "name": "Ugwunagbo", "id": 12 }, { "name": "Ukwa East", "id": 13 }, { "name": "Ukwa West", "id": 14 }, { "name": "Umuahia North", "id": 15 }, { "name": "Umuahia South", "id": 16 }, { "name": "Umu Nneochi", "id": 17 }] } },
    { "state": { "name": "Adamawa", "id": 2, "locals": [{ "name": "Demsa", "id": 1 }, { "name": "Fufore", "id": 2 }, { "name": "Ganye", "id": 3 }, { "name": "Girei", "id": 4 }, { "name": "Gayuk", "id": 5 }, { "name": "Gombi", "id": 6 }, { "name": "Hong", "id": 7 }, { "name": "Jada", "id": 8 }, { "name": "Lamurde", "id": 9 },{ "name": "Madagali", "id": 10 }, { "name": "Maiha", "id": 11 }, { "name": "Mayo Belwa", "id": 12 }, { "name": "Michika", "id": 13 }, { "name": "Mubi North", "id": 14 }, { "name": "Mubi South", "id": 15 }, { "name": "Numan", "id": 16 }, { "name": "Shelleng", "id": 17 }, { "name": "Song", "id": 18 }, { "name": "Toungo", "id": 19 }, { "name": "Yola North", "id": 20 }, { "name": "Yola South", "id": 21 }] } }, { "state": { "name": "Akwa Ibom", "id": 3, "locals": [{ "name": "Abak", "id": 1 }, { "name": "Eastern Obolo", "id": 2 }, { "name": "Eket", "id": 3 }, { "name": "Esit-Eket", "id": 4}, { "name": "Essien Udim", "id": 5 }, { "name": "Etim Ekpo", "id": 6 }, { "name": "Etinan", "id": 7 }, { "name": "Ibeno", "id": 8 }, { "name": "Ibesikpo Asutan", "id": 9 }, { "name": "Ibiono-Ibom", "id": 10 }, { "name": "Ika", "id": 11 }, { "name": "Ikono", "id": 12 }, { "name": "Ikot Abasi", "id": 13 }, { "name": "Ikot Ekpene", "id": 14 }, { "name": "Ini", "id": 15 }, { "name": "Itu", "id": 16 }, { "name": "Mbo", "id": 17 }, { "name": "Mkpat-Enin", "id": 18 }, { "name": "Nsit-Atai", "id": 19 }, { "name": "Nsit-Ibom", "id": 20 }, { "name": "Nsit-Ubium", "id": 21 }, { "name": "Obot Akara", "id": 22 }, { "name": "Okobo", "id": 23 }, { "name": "Onna", "id": 24 }, { "name": "Oron", "id": 25 }, { "name": "Oruk Anam", "id": 26 }, { "name": "Udung-Uko", "id": 27 }, { "name": "Ukanafun", "id": 28 }, { "name": "Uruan", "id": 29 }, { "name": "Urue-Offong\/Oruko", "id": 30 }, { "name": "Uyo", "id": 31 }] } }, { "state": { "name": "Anambra", "id": 4, "locals": [{ "name": "Aguata", "id": 1 }, { "name": "Anambra East", "id": 2 }, { "name": "Anambra West", "id": 3 }, { "name": "Anaocha", "id": 4 }, { "name": "Awka North", "id": 5 }, { "name": "Awka South", "id": 6 }, { "name": "Ayamelum", "id": 7 }, { "name": "Dunukofia", "id": 8 }, { "name": "Ekwusigo", "id": 9 }, { "name": "Idemili North", "id": 10 }, { "name": "Idemili South", "id": 11 }, { "name": "Ihiala", "id": 12 }, { "name": "Njikoka", "id": 13 }, { "name": "Nnewi North", "id": 14 }, { "name": "Nnewi South", "id": 15 }, { "name": "Ogbaru", "id": 16 }, { "name": "Onitsha North", "id": 17 }, { "name": "Onitsha South", "id": 18 }, { "name": "Orumba North", "id": 19 }, { "name": "Orumba South", "id": 20 }, { "name": "Oyi", "id": 21 }] } }, { "state": { "name": "Bauchi", "id": 5, "locals": [{ "name": "Alkaleri", "id": 1 }, { "name": "Bauchi", "id": 2 }, { "name": "Bogoro", "id": 3 }, { "name": "Damban", "id": 4 }, { "name": "Darazo", "id": 5 }, { "name": "Dass", "id": 6 }, { "name": "Gamawa", "id": 7 }, { "name": "Ganjuwa", "id": 8 }, { "name": "Giade", "id": 9 }, { "name": "Itas\/Gadau", "id": 10 }, { "name": "Jama'are", "id": 11 }, { "name": "Katagum", "id": 12 }, { "name": "Kirfi", "id": 13 }, { "name": "Misau", "id": 14 }, { "name": "Ningi", "id": 15 }, { "name": "Shira", "id": 16 }, { "name": "Tafawa Balewa", "id": 17 }, { "name": "Toro", "id": 18 }, { "name": "Warji", "id": 19 }, { "name": "Zaki", "id": 20 }] } }, { "state": { "name": "Bayelsa", "id": 6, "locals": [{ "name": "Brass", "id": 1 }, { "name": "Ekeremor", "id": 2 }, { "name": "Kolokuma\/Opokuma", "id": 3 }, { "name": "Nembe", "id": 4 }, { "name": "Ogbia", "id": 5 }, { "name": "Sagbama", "id": 6 }, { "name": "Southern Ijaw", "id": 7 }, { "name": "Yenagoa", "id": 8 }] } },
    { "state": { "name": "Benue", "id": 7, "locals": [ { "name": "Apa", "id": 1 }, { "name": "Ado", "id": 2 }, { "name": "Agatu", "id": 3 }, { "name": "Buruku", "id": 4 }, { "name": "Gboko", "id": 5 }, { "name": "Guma", "id": 6 }, { "name": "Gwer", "id": 7 }, { "name": "Gwer-West", "id": 8 }, { "name": "Katsina-Ala", "id": 9 }, { "name": "Konshisha", "id": 10 }, { "name": "Kwande", "id": 11 }, { "name": "Logo", "id": 12 }, { "name": "Makurdi", "id": 13 }, { "name": "Obi", "id": 14 }, { "name": "Ogbadibo", "id": 15 }, { "name": "Ohimini", "id": 16 }, { "name": "Oju", "id": 17 }, { "name": "Okpokwu", "id": 18 }, { "name": "Otukpo", "id": 19 }, { "name": "Tarka", "id": 20 }, { "name": "Ukum", "id": 21 }, { "name": "Ushongo", "id": 22 }, { "name": "Vandeikya", "id": 23 }] } }, { "state": { "name": "Borno", "id": 8, "locals": [ { "name": "Abadam", "id": 1 },{ "name": "Askira\/Uba", "id": 2 }, { "name": "Bama", "id": 3 }, { "name": "Bayo", "id": 4 }, { "name": "Biu", "id": 5 }, { "name": "Chibok", "id": 6 }, { "name": "Damboa", "id": 7 }, { "name": "Dikwa", "id": 8 }, { "name": "Gubio", "id": 9 }, { "name": "Guzamala", "id": 10 }, { "name": "Gwoza", "id": 11 }, { "name": "Hawul", "id": 12 }, { "name": "Jere", "id": 13 }, { "name": "Kaga", "id": 14 }, { "name": "Kala\/Balge", "id": 15 }, { "name": "Konduga", "id": 16 }, { "name": "Kukawa", "id": 17 }, { "name": "Kwaya", "id": 18 }, { "name": "Mafa", "id": 19 }, { "name": "Magumeri", "id": 20 }, { "name": "Maiduguri", "id": 21 }, { "name": "Marte", "id": 22 }, { "name": "Mobbar", "id": 23 }, { "name": "Monguno", "id": 24 }, { "name": "Ngala", "id": 25 }, { "name": "Nganzai", "id": 26 }, { "name": "Shani", "id": 27 }] } }, { "state": { "name": "Cross River", "id": 9, "locals": [{ "name": "Abi", "id": 1 },{ "name": "Akamkpa", "id": 2 }, { "name": "Akpabuyo", "id": 3 }, { "name": "Bakassi", "id": 4 }, { "name": "Bekwarra", "id": 5 }, { "name": "Biase", "id": 6 }, { "name": "Boki", "id": 7 }, { "name": "Calabar Municipal", "id": 8 }, { "name": "Calabar South", "id": 9 }, { "name": "Etung", "id": 10 }, { "name": "Ikom", "id": 11 }, { "name": "Obanliku", "id": 12 }, { "name": "Obubra", "id": 13 }, { "name": "Obudu", "id": 14 }, { "name": "Odukpani", "id": 15 }, { "name": "Ogoja", "id": 16 }, { "name": "Yakuur", "id": 17 }, { "name": "Yala", "id": 18 }] } }, { "state": { "name": "Delta", "id": 10, "locals": [{ "name": "Aniocha North", "id": 1 }, { "name": "Aniocha South", "id": 2 }, { "name": "Bomadi", "id": 3 }, { "name": "Burutu", "id": 4 }, { "name": "Ethiope East", "id": 5 }, { "name": "Ethiope West", "id": 6 }, { "name": "Ika North", "id": 7 }, { "name": "Ika South", "id": 8 }, { "name": "Isoko North", "id": 9 }, { "name": "Isoko South", "id": 10 }, { "name": "Ndokwa East", "id": 11 }, { "name": "Ndokwa West", "id": 12 }, { "name": "Okpe", "id": 13 }, { "name": "Oshimili North", "id": 14 }, { "name": "Oshimili South", "id": 15 }, { "name": "Patani", "id": 16 }, { "name": "Sapele", "id": 17 }, { "name": "Udu", "id": 18 }, { "name": "Ughelli North", "id": 19 }, { "name": "Ughelli South", "id": 20 }, { "name": "Ukwuani", "id": 21 }, { "name": "Uvwie", "id": 22 }, { "name": "Warri North", "id": 23 }, { "name": "Warri South", "id": 24 }, { "name": "Warri South West", "id": 25 }] } }, { "state": { "name": "Ebonyi", "id": 11, "locals": [{ "name": "Abakaliki", "id": 13 }, {"name": "Afikpo North", "id": 1 }, { "name": "Afikpo South (Edda)", "id": 2 }, { "name": "Ebonyi", "id": 3 }, { "name": "Ezza North", "id": 4 }, { "name": "Ezza South", "id": 5 }, { "name": "Ikwo", "id": 6 }, { "name": "Ishielu", "id": 7 }, { "name": "Ivo", "id": 8 }, { "name": "Izzi", "id": 9 }, { "name": "Ohaozara", "id": 10 }, { "name": "Ohaukwu", "id": 11 }, { "name": "Onicha", "id": 12 }] } },
    { "state": { "name": "Edo", "id": 12, "locals": [{ "name": "Akoko-Edo", "id": 18 }, { "name": "Egor", "id": 1 }, { "name": "Esan Central", "id": 2 }, { "name": "Esan North-East", "id": 3 }, { "name": "Esan South-East", "id": 4 }, { "name": "Esan West", "id": 5 }, { "name": "Etsako Central", "id": 6 }, { "name": "Etsako East", "id": 7 }, { "name": "Etsako West", "id": 8 }, { "name": "Igueben", "id": 9 }, { "name": "Ikpoba-Okha", "id": 10 }, { "name": "Orhionmwon", "id": 11 }, { "name": "Oredo", "id": 12 }, { "name": "Ovia North-East", "id": 13 }, { "name": "Ovia South-West", "id": 14 }, { "name": "Owan East", "id": 15 }, { "name": "Owan West", "id": 16 }, { "name": "Uhunmwonde", "id": 17 }] } }, { "state": { "name": "Ekiti", "id": 13, "locals": [{ "name": "Ado-Ekiti", "id": 16 }, { "name": "Efon", "id": 1 }, { "name": "Ekiti East", "id": 2 }, { "name": "Ekiti South-West", "id": 3 }, { "name": "Ekiti-West", "id": 4 }, { "name": "Emure", "id": 5 }, { "name": "Gbonyin", "id": 6 }, { "name": "Ido-Osi", "id": 7 }, { "name": "Ijero", "id": 8 }, { "name": "Ikere", "id": 9 }, { "name": "Ikole", "id": 10 }, { "name": "Ilejemeje", "id": 11 }, { "name": "Irepodun\/Ifelodun", "id": 12 }, { "name": "Ise\/Orun", "id": 13 }, { "name": "Moba", "id": 14 }, { "name": "Oye", "id": 15 }] } },
    { "state": { "name": "Enugu", "id": 14, "locals": [{ "name": "Aninri", "id": 17 }, { "name": "Awgu", "id": 1 }, { "name": "Enugu East", "id": 2 }, { "name": "Enugu North", "id": 3 }, { "name": "Enugu South", "id": 4 }, { "name": "Ezeagu", "id": 5 }, { "name": "Igbo Etiti", "id": 6 }, { "name": "Igbo Eze North", "id": 7 }, { "name": "Igbo Eze South", "id": 8 }, { "name": "Isi Uzo", "id": 9 }, { "name": "Nkanu East", "id": 10 }, { "name": "Nkanu West", "id": 11 }, { "name": "Nsukka", "id": 12 }, { "name": "Oji River", "id": 13 }, { "name": "Udenu", "id": 14 }, { "name": "Udi", "id": 15 }, { "name": "Uzo-Uwani", "id": 16 }] } }, { "state": { "name": "Abuja", "id": 15, "locals": [{ "name": "Abaji", "id": 6 }, { "name": "Bwari", "id": 1 }, { "name": "Gwagwalada", "id": 2 }, { "name": "Kuje", "id": 3 }, { "name": "Kwali", "id": 4 }, { "name": "Municipal Area Council", "id": 5 }] } },
    { "state": { "name": "Gombe", "id": 16, "locals": [{ "name": "Akko", "id": 11 }, { "name": "Balanga", "id": 1 }, { "name": "Billiri", "id": 2 }, { "name": "Dukku", "id": 3 }, { "name": "Funakaye", "id": 4 }, { "name": "Gombe", "id": 5 }, { "name": "Kaltungo", "id": 6 }, { "name": "Kwami", "id": 7 }, { "name": "Nafada", "id": 8 }, { "name": "Shongom", "id": 9 }, { "name": "Yamaltu\/Deba", "id": 10 }] } },
    { "state": { "name": "Imo", "id": 17, "locals": [{ "name": "Aboh Mbaise", "id": 27 }, { "name": "Awo-Omamma", "id": 28 }, { "name": "Izombe", "id": 29 }, { "name": "Ahiazu Mbaise", "id": 1 }, { "name": "Ehime Mbano", "id": 2 }, { "name": "Ezinihitte Mbaise", "id": 3 }, { "name": "Ideato North", "id": 4 }, { "name": "Ideato South", "id": 5 }, { "name": "Ihitte\/Uboma", "id": 6 }, { "name": "Ikeduru", "id": 7 }, { "name": "Isiala Mbano", "id": 8 }, { "name": "Isu", "id": 9 }, { "name": "Mbaitoli", "id": 10 }, { "name": "Mgbidi", "id": 30 }, { "name": "Ngor Okpala", "id": 11 }, { "name": "Njaba", "id": 12 }, { "name": "Nkwerre", "id": 13 }, { "name": "Nwangele", "id": 14 }, { "name": "Obowo", "id": 15 }, { "name": "Oguta", "id": 16 }, { "name": "Ohaji\/Egbema", "id": 17 }, { "name": "Okigwe", "id": 18 }, { "name": "Onuimo", "id": 31 }, { "name": "Orlu", "id": 19 }, { "name": "Orsu", "id": 20 }, { "name": "Oru East", "id": 21 }, { "name": "Oru West", "id": 22 }, { "name": "Owerri Municipal", "id": 23 }, { "name": "Owerri North", "id": 24 }, { "name": "Owerri West", "id": 25 }, { "name": "Umuaka", "id": 26 }] } },
    { "state": { "name": "Jigawa", "id": 18, "locals": [{ "name": "Auyo", "id": 27 }, { "name": "Babura", "id": 1 }, { "name": "Biriniwa", "id": 2 }, { "name": "Birnin Kudu", "id": 3 }, { "name": "Buji", "id": 4 }, { "name": "Dutse", "id": 5 }, { "name": "Gagarawa", "id": 6 }, { "name": "Garki", "id": 7 }, { "name": "Gumel", "id": 8 }, { "name": "Guri", "id": 9 }, { "name": "Gwaram", "id": 10 }, { "name": "Gwiwa", "id": 11 }, { "name": "Hadejia", "id": 12 }, { "name": "Jahun", "id": 13 }, { "name": "Kafin Hausa", "id": 14 }, { "name": "Kazaure", "id": 15 }, { "name": "Kiri Kasama", "id": 16 }, { "name": "Kiyawa", "id": 17 }, { "name": "Kaugama", "id": 18 }, { "name": "Maigatari", "id": 19 }, { "name": "Malam Madori", "id": 20 }, { "name": "Miga", "id": 21 }, { "name": "Ringim", "id": 22 }, { "name": "Roni", "id": 23 }, { "name": "Sule Tankarkar", "id": 24 }, { "name": "Taura", "id": 25 }, { "name": "Yankwashi", "id": 26 }] } },
    { "state": { "name": "Kaduna", "id": 19, "locals": [{ "name": "Birnin Gwari", "id": 23 }, { "name": "Chikun", "id": 1 }, { "name": "Giwa", "id": 2 }, { "name": "Igabi", "id": 3 }, { "name": "Ikara", "id": 4 }, { "name": "Jaba", "id": 5 }, { "name": "Jema'a", "id": 6 }, { "name": "Kachia", "id": 7 }, { "name": "Kaduna North", "id": 8 }, { "name": "Kaduna South", "id": 9 }, { "name": "Kagarko", "id": 10 }, { "name": "Kajuru", "id": 11 }, { "name": "Kaura", "id": 12 }, { "name": "Kauru", "id": 13 }, { "name": "Kubau", "id": 14 }, { "name": "Kudan", "id": 15 }, { "name": "Lere", "id": 16 }, { "name": "Makarfi", "id": 17 }, { "name": "Sabon Gari", "id": 18 }, { "name": "Sanga", "id": 19 }, { "name": "Soba", "id": 20 }, { "name": "Zangon Kataf", "id": 21 }, { "name": "Zaria", "id": 22 }] } },
    { "state": { "name": "Kano", "id": 20, "locals": [{ "name": "Ajingi" , "id": 44 }, { "name": "Albasu", "id": 1 }, { "name": "Bagwai", "id": 2 }, { "name": "Bebeji", "id": 3 }, { "name": "Bichi", "id": 4 }, { "name": "Bunkure", "id": 5 }, { "name": "Dala", "id": 6 }, { "name": "Dambatta", "id": 7 }, { "name": "Dawakin Kudu", "id": 8 }, { "name": "Dawakin Tofa", "id": 9 }, { "name": "Doguwa", "id": 10 }, { "name": "Fagge", "id": 11 }, { "name": "Gabasawa", "id": 12 }, { "name": "Garko", "id": 13 }, { "name": "Garum Mallam", "id": 14 }, { "name": "Gaya", "id": 15 }, { "name": "Gezawa", "id": 16 }, { "name": "Gwale", "id": 17 }, { "name": "Gwarzo", "id": 18 }, { "name": "Kabo", "id": 19 }, { "name": "Kano Municipal", "id": 20 }, { "name": "Karaye", "id": 21 }, { "name": "Kibiya", "id": 22 }, { "name": "Kiru", "id": 23 }, { "name": "Kumbotso", "id": 24 }, { "name": "Kunchi", "id": 25 }, { "name": "Kura", "id": 26 }, { "name": "Madobi", "id": 27 }, { "name": "Makoda", "id": 28 }, { "name": "Minjibir", "id": 29 }, { "name": "Nasarawa", "id": 30 }, { "name": "Rano", "id": 31 }, { "name": "Rimin Gado", "id": 32 }, { "name": "Rogo", "id": 33 }, { "name": "Shanono", "id": 34 }, { "name": "Sumaila", "id": 35 }, { "name": "Takai", "id": 36 }, { "name": "Tarauni", "id": 37 }, { "name": "Tofa", "id": 38 }, { "name": "Tsanyawa", "id": 39 }, { "name": "Tudun Wada", "id": 40 }, { "name": "Ungogo", "id": 41 }, { "name": "Warawa", "id": 42 }, { "name": "Wudil", "id": 43 }] } }, { "state": { "name": "Katsina", "id": 21, "locals": [{ "name": "Bakori", "id": 34 }, { "name": "Batagarawa", "id": 1 }, { "name": "Batsari", "id": 2 }, { "name": "Baure", "id": 3 }, { "name": "Bindawa", "id": 4 }, { "name": "Charanchi", "id": 5 }, { "name": "Dandume", "id": 6 }, { "name": "Danja", "id": 7 }, { "name": "Dan Musa", "id": 8 }, { "name": "Daura", "id": 9 }, { "name": "Dutsi", "id": 10 }, { "name": "Dutsin-Ma", "id": 11 }, { "name": "Faskari", "id": 12 }, { "name": "Funtua", "id": 13 }, { "name": "Ingawa", "id": 14 }, { "name": "Jibia", "id": 15 }, { "name": "Kafur", "id": 16 }, { "name": "Kaita", "id": 17 }, { "name": "Kankara", "id": 18 }, { "name": "Kankia", "id": 19 }, { "name": "Katsina", "id": 20 }, { "name": "Kurfi", "id": 21 }, { "name": "Kusada", "id": 22 }, { "name": "Mai'Adua", "id": 23 }, { "name": "Malumfashi", "id": 24 }, { "name": "Mani", "id": 25 }, { "name": "Mashi", "id": 26 }, { "name": "Matazu", "id": 27 }, { "name": "Musawa", "id": 28 }, { "name": "Rimi", "id": 29 }, { "name": "Sabuwa", "id": 30 }, { "name": "Safana", "id": 31 }, { "name": "Sandamu", "id": 32 }, { "name": "Zango", "id": 33 }] } }, { "state": { "name": "Kebbi", "id": 22, "locals": [{ "name": "Aleiro", "id": 21 }, { "name": "Arewa Dandi", "id": 1 }, { "name": "Argungu", "id": 2 }, { "name": "Augie", "id": 3 }, { "name": "Bagudo", "id": 4 }, { "name": "Birnin Kebbi", "id": 5 }, { "name": "Bunza", "id": 6 }, { "name": "Dandi", "id": 7 }, { "name": "Fakai", "id": 8 }, { "name": "Gwandu", "id": 9 }, { "name": "Jega", "id": 10 }, { "name": "Kalgo", "id": 11 }, { "name": "Koko\/Besse", "id": 12 }, { "name": "Maiyama", "id": 13 }, { "name": "Ngaski", "id": 14 }, { "name": "Sakaba", "id": 15 }, { "name": "Shanga", "id": 16 }, { "name": "Suru", "id": 17 }, { "name": "Wasagu\/Danko", "id": 18 }, { "name": "Yauri", "id": 19 }, { "name": "Zuru", "id": 20 }] } },
    { "state": { "name": "Kogi", "id": 23, "locals": [{ "name": "Adavi", "id": 21 }, { "name": "Ajaokuta", "id": 1 }, { "name": "Ankpa", "id": 2 }, { "name": "Bassa", "id": 3 }, { "name": "Dekina", "id": 4 }, { "name": "Ibaji", "id": 5 }, { "name": "Idah", "id": 6 }, { "name": "Igalamela-Odolu", "id": 7 }, { "name": "Ijumu", "id": 8 }, { "name": "Kabba\/Bunu", "id": 9 }, { "name": "Koton Karfe", "id": 10 }, { "name": "Lokoja", "id": 11 }, { "name": "Mopa-Muro", "id": 12 }, { "name": "Ofu", "id": 13 }, { "name": "Ogori\/Magongo", "id": 14 }, { "name": "Okehi", "id": 15 }, { "name": "Okene", "id": 16 }, { "name": "Olamaboro", "id": 17 }, { "name": "Omala", "id": 18 }, { "name": "Yagba East", "id": 19 }, { "name": "Yagba West", "id": 20 }] } },
    { "state": { "name": "Kwara", "id": 24, "locals": [{ "name": "Asa", "id": 16 }, { "name": "Baruten", "id": 1 }, { "name": "Edu", "id": 2 }, { "name": "Ekiti", "id": 3 }, { "name": "Ifelodun", "id": 4 }, { "name": "Ilorin East", "id": 5 }, { "name": "Ilorin South", "id": 6 }, { "name": "Ilorin West", "id": 7 }, { "name": "Irepodun", "id": 8 }, { "name": "Isin", "id": 9 }, { "name": "Kaiama", "id": 10 }, { "name": "Moro", "id": 11 }, { "name": "Offa", "id": 12 }, { "name": "Oke Ero", "id": 13 }, { "name": "Oyun", "id": 14 }, { "name": "Pategi", "id": 15 }] } }, { "state": { "name": "Lagos", "id": 25, "locals": [{ "name": "Agege", "id": 20 }, { "name": "Ajeromi-Ifelodun", "id": 1 }, { "name": "Alimosho", "id": 2 }, { "name": "Amuwo-Odofin", "id": 3 }, { "name": "Apapa", "id": 4 }, { "name": "Badagry", "id": 5 }, { "name": "Epe", "id": 6 }, { "name": "Eti-Osa", "id": 7 }, { "name": "Ibeju-Lekki", "id": 8 }, { "name": "Ifako-Ijaiye", "id": 9 }, { "name": "Ikeja", "id": 10 }, { "name": "Ikorodu", "id": 11 }, { "name": "Kosofe", "id": 12 }, { "name": "Lagos Island", "id": 13 }, { "name": "Lagos Mainland", "id": 14 }, { "name": "Mushin", "id": 15 }, { "name": "Ojo", "id": 16 }, { "name": "Oshodi-Isolo", "id": 17 }, { "name": "Somolu", "id": 18 }, { "name": "Surulere", "id": 19 }] } }, { "state": { "name": "Nasarawa", "id": 26, "locals": [ { "name": "Akwanga", "id": 13 }, { "name": "Awe", "id": 1 }, { "name": "Doma", "id": 2 }, { "name": "Karu", "id": 3 }, { "name": "Keana", "id": 4 }, { "name": "Keffi", "id": 5 }, { "name": "Kokona", "id": 6 }, { "name": "Lafia", "id": 7 }, { "name": "Nasarawa", "id": 8 }, { "name": "Nasarawa Egon", "id": 9 }, { "name": "Obi", "id": 10 }, { "name": "Toto", "id": 11 }, { "name": "Wamba", "id": 12 }] } }, { "state": { "name": "Niger", "id": 27, "locals": [{ "name": "Agaie", "id": 25 }, { "name": "Agwara", "id": 1 }, { "name": "Bida", "id": 2 }, { "name": "Borgu", "id": 3 }, { "name": "Bosso", "id": 4 }, { "name": "Chanchaga", "id": 5 }, { "name": "Edati", "id": 6 }, { "name": "Gbako", "id": 7 }, { "name": "Gurara", "id": 8 }, { "name": "Katcha", "id": 9 }, { "name": "Kontagora", "id": 10 }, { "name": "Lapai", "id": 11 }, { "name": "Lavun", "id": 12 }, { "name": "Magama", "id": 13 }, { "name": "Mariga", "id": 14 }, { "name": "Mashegu", "id": 15 }, { "name": "Mokwa", "id": 16 }, { "name": "Muya", "id": 17 }, { "name": "Paikoro", "id": 18 }, { "name": "Rafi", "id": 19 }, { "name": "Rijau", "id": 20 }, { "name": "Shiroro", "id": 21 }, { "name": "Suleja", "id": 22 }, { "name": "Tafa", "id": 23 }, { "name": "Wushishi", "id": 24 }] } }, { "state": { "name": "Ogun", "id": 28, "locals": [{ "name": "Abeokuta North", "id": 1 }, { "name": "Abeokuta South", "id": 2 }, { "name": "Ado-Odo\/Ota", "id": 3 }, { "name": "Ewekoro", "id": 4 }, { "name": "Ifo", "id": 5 }, { "name": "Ijebu East", "id": 6 }, { "name": "Ijebu North", "id": 7 }, { "name": "Ijebu North East", "id": 8 }, { "name": "Ijebu Ode", "id": 9 }, { "name": "Ikenne", "id": 10 }, { "name": "Imeko Afon", "id": 11 }, { "name": "Ipokia", "id": 12 }, { "name": "Obafemi Owode", "id": 13 }, { "name": "Odeda", "id": 14 }, { "name": "Odogbolu", "id": 15 }, { "name": "Ogun Waterside", "id": 16 }, { "name": "Remo North", "id": 17 }, { "name": "Sagamu", "id": 18 }, { "name": "Yewa North", "id": 19 }, { "name": "Yewa South", "id": 20 }] } },
    { "state": { "name": "Ondo", "id": 29, "locals": [{ "name": "Akoko North-East", "id": 18 }, { "name": "Akoko North-West", "id": 1 }, { "name": "Akoko South-West", "id": 2 }, { "name": "Akoko South-East", "id": 3 }, { "name": "Akure North", "id": 4 }, { "name": "Akure South", "id": 5 }, { "name": "Ese Odo", "id": 6 }, { "name": "Idanre", "id": 7 }, { "name": "Ifedore", "id": 8 }, { "name": "Ilaje", "id": 9 }, { "name": "Ile Oluji\/Okeigbo", "id": 10 }, { "name": "Irele", "id": 11 }, { "name": "Odigbo", "id": 12 }, { "name": "Okitipupa", "id": 13 }, { "name": "Ondo East", "id": 14 }, { "name": "Ondo West", "id": 15 }, { "name": "Ose", "id": 16 }, { "name": "Owo", "id": 17 }] } }, { "state": { "name": "Osun", "id": 30, "locals": [{ "name": "Atakunmosa East", "id": 30 }, { "name": "Atakunmosa West", "id": 1 }, { "name": "Aiyedaade", "id": 2 }, { "name": "Aiyedire", "id": 3 }, { "name": "Boluwaduro", "id": 4 }, { "name": "Boripe", "id": 5 }, { "name": "Ede North", "id": 6 }, { "name": "Ede South", "id": 7 }, { "name": "Ife Central", "id": 8 }, { "name": "Ife East", "id": 9 }, { "name": "Ife North", "id": 10 }, { "name": "Ife South", "id": 11 }, { "name": "Egbedore", "id": 12 }, { "name": "Ejigbo", "id": 13 }, { "name": "Ifedayo", "id": 14 }, { "name": "Ifelodun", "id": 15 }, { "name": "Ila", "id": 16 }, { "name": "Ilesa East", "id": 17 }, { "name": "Ilesa West", "id": 18 }, { "name": "Irepodun", "id": 19 }, { "name": "Irewole", "id": 20 }, { "name": "Isokan", "id": 21 }, { "name": "Iwo", "id": 22 }, { "name": "Obokun", "id": 23 }, { "name": "Odo Otin", "id": 24 }, { "name": "Ola Oluwa", "id": 25 }, { "name": "Olorunda", "id": 26 }, { "name": "Oriade", "id": 27 }, { "name": "Orolu", "id": 28 }, { "name": "Osogbo", "id": 29 }] } }, { "state": { "name": "Oyo", "id": 31, "locals": [{ "name": "Afijio", "id":33 }, { "name": "Akinyele", "id": 1 }, { "name": "Atiba", "id": 2 }, { "name": "Atisbo", "id": 3 }, { "name": "Egbeda", "id": 4 }, { "name": "Ibadan North", "id": 5 }, { "name": "Ibadan North-East", "id": 6 }, { "name": "Ibadan North-West", "id": 7 }, { "name": "Ibadan South-East", "id": 8 }, { "name": "Ibadan South-West", "id": 9 }, { "name": "Ibarapa Central", "id": 10 }, { "name": "Ibarapa East", "id": 11 }, { "name": "Ibarapa North", "id": 12 }, { "name": "Ido", "id": 13 }, { "name": "Irepo", "id": 14 }, { "name": "Iseyin", "id": 15 }, { "name": "Itesiwaju", "id": 16 }, { "name": "Iwajowa", "id": 17 }, { "name": "Kajola", "id": 18 }, { "name": "Lagelu", "id": 19 }, { "name": "Ogbomosho North", "id": 20 }, { "name": "Ogbomosho South", "id": 21 }, { "name": "Ogo Oluwa", "id": 22 }, { "name": "Olorunsogo", "id": 23 }, { "name": "Oluyole", "id": 24 }, { "name": "Ona Ara", "id": 25 }, { "name": "Orelope", "id": 26 }, { "name": "Ori Ire", "id": 27 }, { "name": "Oyo West", "id": 28 }, { "name": "Oyo East", "id": 29 }, { "name": "Saki East", "id": 30 }, { "name": "Saki West", "id": 31 }, { "name": "Surulere", "id": 32 }] } },
    { "state": { "name": "Plateau", "id": 32, "locals": [{ "name": "Barkin Ladi", "id": 1 }, { "name": "Bassa", "id": 2 }, { "name": "Bokkos", "id": 17 }, { "name": "Jos East", "id": 3 }, { "name": "Jos North", "id": 4 }, { "name": "Jos South", "id": 5 }, { "name": "Kanam", "id": 6 }, { "name": "Kanke", "id": 7 }, { "name": "Langtang South", "id": 8 }, { "name": "Langtang North", "id": 9 }, { "name": "Mangu", "id": 10 }, { "name": "Mikang", "id": 11 }, { "name": "Pankshin", "id": 12 }, { "name": "Qua'an Pan", "id": 13 }, { "name": "Riyom", "id": 14 }, { "name": "Shendam", "id": 15 }, { "name": "Wase", "id": 16 }] } },
    { "state": { "name": "Rivers", "id": 33, "locals": [{ "name": "Abua-Oduai", "id": 23 }, { "name": "Ahoada East", "id": 1 }, { "name": "Ahoada West", "id": 2 }, { "name": "Akuku-Toru", "id": 3 }, { "name": "Andoni", "id": 4 }, { "name": "Asari-Toru", "id": 5 }, { "name": "Bonny", "id": 6 }, { "name": "Degema", "id": 7 }, { "name": "Eleme", "id": 8 }, { "name": "Emuoha", "id": 9 }, { "name": "Etche", "id": 10 }, { "name": "Gokana", "id": 11 }, { "name": "Ikwerre", "id": 12 }, { "name": "Khana", "id": 13 }, { "name": "Obio\/Akpor", "id": 14 }, { "name": "Ogba\/Egbema\/Ndoni", "id": 15 }, { "name": "Ogu\/Bolo", "id": 16 }, { "name": "Okrika", "id": 17 }, { "name": "Omuma", "id": 18 }, { "name": "Opobo\/Nkoro", "id": 19 }, { "name": "Oyigbo", "id": 20 }, { "name": "Port Harcourt", "id": 21 }, { "name": "Tai", "id": 22 }] } }, { "state": { "name": "Sokoto", "id": 34, "locals": [{ "name": "Binji", "id": 23 }, { "name": "Bodinga", "id": 1 }, { "name": "Dange Shuni", "id": 2 }, { "name": "Gada", "id": 3 }, { "name": "Goronyo", "id": 4 }, { "name": "Gudu", "id": 5 }, { "name": "Gwadabawa", "id": 6 }, { "name": "Illela", "id": 7 }, { "name": "Isa", "id": 8 }, { "name": "Kebbe", "id": 9 }, { "name": "Kware", "id": 10 }, { "name": "Rabah", "id": 11 }, { "name": "Sabon Birni", "id": 12 }, { "name": "Shagari", "id": 13 }, { "name": "Silame", "id": 14 }, { "name": "Sokoto North", "id": 15 }, { "name": "Sokoto South", "id": 16 }, { "name": "Tambuwal", "id": 17 }, { "name": "Tangaza", "id": 18 }, { "name": "Tureta", "id": 19 }, { "name": "Wamako", "id": 20 }, { "name": "Wurno", "id": 21 }, { "name": "Yabo", "id": 22 }] } }, { "state": { "name": "Taraba", "id": 35, "locals": [{ "name": "Ardo Kola", "id": 16 }, { "name": "Bali", "id": 1 }, { "name": "Donga", "id": 2 }, { "name": "Gashaka", "id": 3 }, { "name": "Gassol", "id": 4 }, { "name": "Ibi", "id": 5 }, { "name": "Jalingo", "id": 6 }, { "name": "Karim Lamido", "id": 7 }, { "name": "Kurmi", "id": 8 }, { "name": "Lau", "id": 9 }, { "name": "Sardauna", "id": 10 }, { "name": "Takum", "id": 11 }, { "name": "Ussa", "id": 12 }, { "name": "Wukari", "id": 13 }, { "name": "Yorro", "id": 14 }, { "name": "Zing", "id": 15 }] } }, { "state": { "name": "Yobe", "id": 36, "locals": [{ "name": "Bade", "id": 17 }, { "name": "Bursari", "id": 1 }, { "name": "Damaturu", "id": 2 }, { "name": "Fika", "id": 3 }, { "name": "Fune", "id": 4 }, { "name": "Geidam", "id": 5 }, { "name": "Gujba", "id": 6 }, { "name": "Gulani", "id": 7 }, { "name": "Jakusko", "id": 8 }, { "name": "Karasuwa", "id": 9 }, { "name": "Machina", "id": 10 }, { "name": "Nangere", "id": 11 }, { "name": "Nguru", "id": 12 }, { "name": "Potiskum", "id": 13 }, { "name": "Tarmuwa", "id": 14 }, { "name": "Yunusari", "id": 15 }, { "name": "Yusufari", "id": 16 }] } }, { "state": { "name": "Zamfara", "id": 37, "locals": [{ "name": "Anka", "id": 14 },{ "name": "Bakura", "id": 1 }, { "name": "Birnin Magaji\/Kiyaw", "id": 2 }, { "name": "Bukkuyum", "id": 3 }, { "name": "Bungudu", "id": 4 }, { "name": "Gummi", "id": 5 }, { "name": "Gusau", "id": 6 }, { "name": "Kaura Namoda", "id": 7 }, { "name": "Maradun", "id": 8 }, { "name": "Maru", "id": 9 }, { "name": "Shinkafi", "id": 10 }, { "name": "Talata Mafara", "id": 11 }, { "name": "Chafe\/Tsafe", "id": 12 }, { "name": "Zurmi", "id": 13 }] } }
  ];

  public static currency= [
    {"abb": "XAF", "name": "CFA Franc", "id" : 1},
    {"abb": "CNY", "name": "Chinese Yuan Renminbi", "id" : 2},
    {"abb": "DKK", "name": "Danish Krone", "id" : 3}, 
    {"abb": "EGP", "name": "Egyptian Pound", "id" : 4},
    {"abb": "EUR", "name": "European Euro", "id" : 5},
    {"abb": "JPY", "name": "Japanese Yen", "id" : 6},
    {"abb": "NGN", "name": "Nigerian Naira", "id" : 7},
    {"abb": "GBP", "name": "Pound sterling", "id" : 8},
    {"abb": "CHF", "name": "Swiss Franc", "id" : 9},
    {"abb": "RIY", "name": "Riyal", "id" : 10},
    {"abb": "ZAR", "name": "South African Rand", "id" : 11},
    {"abb": "USD", "name": "United States Dollar", "id" : 12},
  ]

  public static unitOfMeasurement= [
    {"symbol": "m", "unit": "meter", "name": "Length", "id": 1},
    {"symbol": "s", "unit": "second", "name": "Time", "id": 2},
    {"symbol": "mole", "unit": "mole", "name": "Amount of substance", "id": 3},
    {"symbol": "A", "unit": "ampere", "name": "Electric current", "id": 4},
    {"symbol": "K", "unit": "kelvin", "name": "Temperature", "id": 5},
    {"symbol": "cd", "unit": "candela", "name": "Luminous intensity", "id": 6},
    {"symbol": "kg", "unit": "kilogram", "name": "Mass", "id": 7},
  ]



  public static ownerList = ["Self", "Spouse", "Children below <18"]
  public static assetClassification = [
    { name:"Fixed/Tangible Assets", value:['Land',"Building", 'Machinery', "Equipment", 'Cash', "Furniture and Fittings",'Motor Vehicle']},
    { name:"Intangible Assets", value:['Patents',"Copyright", 'Stocks', "Bonds", 'Cryptocurrency']}
  ]


  public static countries = [
    {
        "name": "Afghanistan",
        "dial_code": "+93",
        "code": "AF"
    },
    {
        "name": "Aland Islands",
        "dial_code": "+358",
        "code": "AX"
    },
    {
        "name": "Albania",
        "dial_code": "+355",
        "code": "AL"
    },
    {
        "name": "Algeria",
        "dial_code": "+213",
        "code": "DZ"
    },
        {
        "name": "AmericanSamoa",
        "dial_code": "+1684",
        "code": "AS"
        },
        {
        "name": "Andorra",
        "dial_code": "+376",
        "code": "AD"
        },
        {
        "name": "Angola",
        "dial_code": "+244",
        "code": "AO"
        },
        {
        "name": "Anguilla",
        "dial_code": "+1264",
        "code": "AI"
        },
        {
        "name": "Antarctica",
        "dial_code": "+672",
        "code": "AQ"
        },
        {
        "name": "Antigua and Barbuda",
        "dial_code": "+1268",
        "code": "AG"
        },
        {
        "name": "Argentina",
        "dial_code": "+54",
        "code": "AR"
        },
        {
        "name": "Armenia",
        "dial_code": "+374",
        "code": "AM"
        },
        {
        "name": "Aruba",
        "dial_code": "+297",
        "code": "AW"
        },
        {
        "name": "Australia",
        "dial_code": "+61",
        "code": "AU"
        },
        {
        "name": "Austria",
        "dial_code": "+43",
        "code": "AT"
        },
        {
        "name": "Azerbaijan",
        "dial_code": "+994",
        "code": "AZ"
        },
        {
        "name": "Bahamas",
        "dial_code": "+1242",
        "code": "BS"
        },
        {
        "name": "Bahrain",
        "dial_code": "+973",
        "code": "BH"
        },
        {
        "name": "Bangladesh",
        "dial_code": "+880",
        "code": "BD"
        },
        {
        "name": "Barbados",
        "dial_code": "+1246",
        "code": "BB"
        },
        {
        "name": "Belarus",
        "dial_code": "+375",
        "code": "BY"
        },
        {
        "name": "Belgium",
        "dial_code": "+32",
        "code": "BE"
        },
        {
        "name": "Belize",
        "dial_code": "+501",
        "code": "BZ"
        },
        {
        "name": "Benin",
        "dial_code": "+229",
        "code": "BJ"
        },
        {
        "name": "Bermuda",
        "dial_code": "+1441",
        "code": "BM"
        },
        {
        "name": "Bhutan",
        "dial_code": "+975",
        "code": "BT"
        },
        {
        "name": "Bolivia, Plurinational State of",
        "dial_code": "+591",
        "code": "BO"
        },
        {
        "name": "Bosnia and Herzegovina",
        "dial_code": "+387",
        "code": "BA"
        },
        {
        "name": "Botswana",
        "dial_code": "+267",
        "code": "BW"
        },
        {
        "name": "Brazil",
        "dial_code": "+55",
        "code": "BR"
        },
        {
        "name": "British Indian Ocean Territory",
        "dial_code": "+246",
        "code": "IO"
        },
        {
        "name": "Brunei Darussalam",
        "dial_code": "+673",
        "code": "BN"
        },
        {
        "name": "Bulgaria",
        "dial_code": "+359",
        "code": "BG"
        },
        {
        "name": "Burkina Faso",
        "dial_code": "+226",
        "code": "BF"
        },
        {
        "name": "Burundi",
        "dial_code": "+257",
        "code": "BI"
        },
        {
        "name": "Cambodia",
        "dial_code": "+855",
        "code": "KH"
        },
        {
        "name": "Cameroon",
        "dial_code": "+237",
        "code": "CM"
        },
        {
        "name": "Canada",
        "dial_code": "+1",
        "code": "CA"
        },
        {
        "name": "Cape Verde",
        "dial_code": "+238",
        "code": "CV"
        },
        {
        "name": "Cayman Islands",
        "dial_code": "+ 345",
        "code": "KY"
        },
        {
        "name": "Central African Republic",
        "dial_code": "+236",
        "code": "CF"
        },
        {
        "name": "Chad",
        "dial_code": "+235",
        "code": "TD"
        },
        {
        "name": "Chile",
        "dial_code": "+56",
        "code": "CL"
        },
        {
        "name": "China",
        "dial_code": "+86",
        "code": "CN"
        },
        {
        "name": "Christmas Island",
        "dial_code": "+61",
        "code": "CX"
        },
        {
        "name": "Cocos (Keeling) Islands",
        "dial_code": "+61",
        "code": "CC"
        },
        {
        "name": "Colombia",
        "dial_code": "+57",
        "code": "CO"
        },
        {
        "name": "Comoros",
        "dial_code": "+269",
        "code": "KM"
        },
        {
        "name": "Congo",
        "dial_code": "+242",
        "code": "CG"
        },
        {
        "name": "Congo, The Democratic Republic of the Congo",
        "dial_code": "+243",
        "code": "CD"
        },
        {
        "name": "Cook Islands",
        "dial_code": "+682",
        "code": "CK"
        },
        {
        "name": "Costa Rica",
        "dial_code": "+506",
        "code": "CR"
        },
        {
        "name": "Cote d'Ivoire",
        "dial_code": "+225",
        "code": "CI"
        },
        {
        "name": "Croatia",
        "dial_code": "+385",
        "code": "HR"
        },
        {
        "name": "Cuba",
        "dial_code": "+53",
        "code": "CU"
        },
        {
        "name": "Cyprus",
        "dial_code": "+357",
        "code": "CY"
        },
        {
        "name": "Czech Republic",
        "dial_code": "+420",
        "code": "CZ"
        },
        {
        "name": "Denmark",
        "dial_code": "+45",
        "code": "DK"
        },
        {
        "name": "Djibouti",
        "dial_code": "+253",
        "code": "DJ"
        },
        {
        "name": "Dominica",
        "dial_code": "+1767",
        "code": "DM"
        },
        {
        "name": "Dominican Republic",
        "dial_code": "+1849",
        "code": "DO"
        },
        {
        "name": "Ecuador",
        "dial_code": "+593",
        "code": "EC"
        },
        {
        "name": "Egypt",
        "dial_code": "+20",
        "code": "EG"
        },
        {
        "name": "El Salvador",
        "dial_code": "+503",
        "code": "SV"
        },
        {
        "name": "Equatorial Guinea",
        "dial_code": "+240",
        "code": "GQ"
        },
        {
        "name": "Eritrea",
        "dial_code": "+291",
        "code": "ER"
        },
        {
        "name": "Estonia",
        "dial_code": "+372",
        "code": "EE"
        },
        {
        "name": "Ethiopia",
        "dial_code": "+251",
        "code": "ET"
        },
        {
        "name": "Falkland Islands (Malvinas)",
        "dial_code": "+500",
        "code": "FK"
        },
        {
        "name": "Faroe Islands",
        "dial_code": "+298",
        "code": "FO"
        },
        {
        "name": "Fiji",
        "dial_code": "+679",
        "code": "FJ"
        },
        {
        "name": "Finland",
        "dial_code": "+358",
        "code": "FI"
        },
        {
        "name": "France",
        "dial_code": "+33",
        "code": "FR"
        },
        {
        "name": "French Guiana",
        "dial_code": "+594",
        "code": "GF"
        },
        {
        "name": "French Polynesia",
        "dial_code": "+689",
        "code": "PF"
        },
        {
        "name": "Gabon",
        "dial_code": "+241",
        "code": "GA"
        },
        {
        "name": "Gambia",
        "dial_code": "+220",
        "code": "GM"
        },
        {
        "name": "Georgia",
        "dial_code": "+995",
        "code": "GE"
        },
        {
        "name": "Germany",
        "dial_code": "+49",
        "code": "DE"
        },
        {
        "name": "Ghana",
        "dial_code": "+233",
        "code": "GH"
        },
        {
        "name": "Gibraltar",
        "dial_code": "+350",
        "code": "GI"
        },
        {
        "name": "Greece",
        "dial_code": "+30",
        "code": "GR"
        },
        {
        "name": "Greenland",
        "dial_code": "+299",
        "code": "GL"
        },
        {
        "name": "Grenada",
        "dial_code": "+1473",
        "code": "GD"
        },
        {
        "name": "Guadeloupe",
        "dial_code": "+590",
        "code": "GP"
        },
        {
        "name": "Guam",
        "dial_code": "+1671",
        "code": "GU"
        },
        {
        "name": "Guatemala",
        "dial_code": "+502",
        "code": "GT"
        },
        {
        "name": "Guernsey",
        "dial_code": "+44",
        "code": "GG"
        },
        {
        "name": "Guinea",
        "dial_code": "+224",
        "code": "GN"
        },
        {
        "name": "Guinea-Bissau",
        "dial_code": "+245",
        "code": "GW"
        },
        {
        "name": "Guyana",
        "dial_code": "+595",
        "code": "GY"
        },
        {
        "name": "Haiti",
        "dial_code": "+509",
        "code": "HT"
        },
        {
        "name": "Holy See (Vatican City State)",
        "dial_code": "+379",
        "code": "VA"
        },
        {
        "name": "Honduras",
        "dial_code": "+504",
        "code": "HN"
        },
        {
        "name": "Hong Kong",
        "dial_code": "+852",
        "code": "HK"
        },
        {
        "name": "Hungary",
        "dial_code": "+36",
        "code": "HU"
        },
        {
        "name": "Iceland",
        "dial_code": "+354",
        "code": "IS"
        },
        {
        "name": "India",
        "dial_code": "+91",
        "code": "IN"
        },
        {
        "name": "Indonesia",
        "dial_code": "+62",
        "code": "ID"
        },
        {
        "name": "Iran, Islamic Republic of Persian Gulf",
        "dial_code": "+98",
        "code": "IR"
        },
        {
        "name": "Iraq",
        "dial_code": "+964",
        "code": "IQ"
        },
        {
        "name": "Ireland",
        "dial_code": "+353",
        "code": "IE"
        },
        {
        "name": "Isle of Man",
        "dial_code": "+44",
        "code": "IM"
        },
        {
        "name": "Israel",
        "dial_code": "+972",
        "code": "IL"
        },
        {
        "name": "Italy",
        "dial_code": "+39",
        "code": "IT"
        },
        {
        "name": "Jamaica",
        "dial_code": "+1876",
        "code": "JM"
        },
        {
        "name": "Japan",
        "dial_code": "+81",
        "code": "JP"
        },
        {
        "name": "Jersey",
        "dial_code": "+44",
        "code": "JE"
        },
        {
        "name": "Jordan",
        "dial_code": "+962",
        "code": "JO"
        },
        {
        "name": "Kazakhstan",
        "dial_code": "+77",
        "code": "KZ"
        },
        {
        "name": "Kenya",
        "dial_code": "+254",
        "code": "KE"
        },
        {
        "name": "Kiribati",
        "dial_code": "+686",
        "code": "KI"
        },
        {
        "name": "Korea, Democratic People's Republic of Korea",
        "dial_code": "+850",
        "code": "KP"
        },
        {
        "name": "Korea, Republic of South Korea",
        "dial_code": "+82",
        "code": "KR"
        },
        {
        "name": "Kuwait",
        "dial_code": "+965",
        "code": "KW"
        },
        {
        "name": "Kyrgyzstan",
        "dial_code": "+996",
        "code": "KG"
        },
        {
        "name": "Laos",
        "dial_code": "+856",
        "code": "LA"
        },
        {
        "name": "Latvia",
        "dial_code": "+371",
        "code": "LV"
        },
        {
        "name": "Lebanon",
        "dial_code": "+961",
        "code": "LB"
        },
        {
        "name": "Lesotho",
        "dial_code": "+266",
        "code": "LS"
        },
        {
        "name": "Liberia",
        "dial_code": "+231",
        "code": "LR"
        },
        {
        "name": "Libyan Arab Jamahiriya",
        "dial_code": "+218",
        "code": "LY"
        },
        {
        "name": "Liechtenstein",
        "dial_code": "+423",
        "code": "LI"
        },
        {
        "name": "Lithuania",
        "dial_code": "+370",
        "code": "LT"
        },
        {
        "name": "Luxembourg",
        "dial_code": "+352",
        "code": "LU"
        },
        {
        "name": "Macao",
        "dial_code": "+853",
        "code": "MO"
        },
        {
        "name": "Macedonia",
        "dial_code": "+389",
        "code": "MK"
        },
        {
        "name": "Madagascar",
        "dial_code": "+261",
        "code": "MG"
        },
        {
        "name": "Malawi",
        "dial_code": "+265",
        "code": "MW"
        },
        {
        "name": "Malaysia",
        "dial_code": "+60",
        "code": "MY"
        },
        {
        "name": "Maldives",
        "dial_code": "+960",
        "code": "MV"
        },
        {
        "name": "Mali",
        "dial_code": "+223",
        "code": "ML"
        },
        {
        "name": "Malta",
        "dial_code": "+356",
        "code": "MT"
        },
        {
        "name": "Marshall Islands",
        "dial_code": "+692",
        "code": "MH"
        },
        {
        "name": "Martinique",
        "dial_code": "+596",
        "code": "MQ"
        },
        {
        "name": "Mauritania",
        "dial_code": "+222",
        "code": "MR"
        },
        {
        "name": "Mauritius",
        "dial_code": "+230",
        "code": "MU"
        },
        {
        "name": "Mayotte",
        "dial_code": "+262",
        "code": "YT"
        },
        {
        "name": "Mexico",
        "dial_code": "+52",
        "code": "MX"
        },
        {
        "name": "Micronesia, Federated States of Micronesia",
        "dial_code": "+691",
        "code": "FM"
        },
        {
        "name": "Moldova",
        "dial_code": "+373",
        "code": "MD"
        },
        {
        "name": "Monaco",
        "dial_code": "+377",
        "code": "MC"
        },
        {
        "name": "Mongolia",
        "dial_code": "+976",
        "code": "MN"
        },
        {
        "name": "Montenegro",
        "dial_code": "+382",
        "code": "ME"
        },
        {
        "name": "Montserrat",
        "dial_code": "+1664",
        "code": "MS"
        },
        {
        "name": "Morocco",
        "dial_code": "+212",
        "code": "MA"
        },
        {
        "name": "Mozambique",
        "dial_code": "+258",
        "code": "MZ"
        },
        {
        "name": "Myanmar",
        "dial_code": "+95",
        "code": "MM"
        },
        {
        "name": "Namibia",
        "dial_code": "+264",
        "code": "NA"
        },
        {
        "name": "Nauru",
        "dial_code": "+674",
        "code": "NR"
        },
        {
        "name": "Nepal",
        "dial_code": "+977",
        "code": "NP"
        },
        {
        "name": "Netherlands",
        "dial_code": "+31",
        "code": "NL"
        },
        {
        "name": "Netherlands Antilles",
        "dial_code": "+599",
        "code": "AN"
        },
        {
        "name": "New Caledonia",
        "dial_code": "+687",
        "code": "NC"
        },
        {
        "name": "New Zealand",
        "dial_code": "+64",
        "code": "NZ"
        },
        {
        "name": "Nicaragua",
        "dial_code": "+505",
        "code": "NI"
        },
        {
        "name": "Niger",
        "dial_code": "+227",
        "code": "NE"
        },
        {
        "name": "Nigeria",
        "dial_code": "+234",
        "code": "NG"
        },
        {
        "name": "Niue",
        "dial_code": "+683",
        "code": "NU"
        },
        {
        "name": "Norfolk Island",
        "dial_code": "+672",
        "code": "NF"
        },
        {
        "name": "Northern Mariana Islands",
        "dial_code": "+1670",
        "code": "MP"
        },
        {
        "name": "Norway",
        "dial_code": "+47",
        "code": "NO"
        },
        {
        "name": "Oman",
        "dial_code": "+968",
        "code": "OM"
        },
        {
        "name": "Pakistan",
        "dial_code": "+92",
        "code": "PK"
        },
        {
        "name": "Palau",
        "dial_code": "+680",
        "code": "PW"
        },
        {
        "name": "Palestinian Territory, Occupied",
        "dial_code": "+970",
        "code": "PS"
        },
        {
        "name": "Panama",
        "dial_code": "+507",
        "code": "PA"
        },
        {
        "name": "Papua New Guinea",
        "dial_code": "+675",
        "code": "PG"
        },
        {
        "name": "Paraguay",
        "dial_code": "+595",
        "code": "PY"
        },
        {
        "name": "Peru",
        "dial_code": "+51",
        "code": "PE"
        },
        {
        "name": "Philippines",
        "dial_code": "+63",
        "code": "PH"
        },
        {
        "name": "Pitcairn",
        "dial_code": "+872",
        "code": "PN"
        },
        {
        "name": "Poland",
        "dial_code": "+48",
        "code": "PL"
        },
        {
        "name": "Portugal",
        "dial_code": "+351",
        "code": "PT"
        },
        {
        "name": "Puerto Rico",
        "dial_code": "+1939",
        "code": "PR"
        },
        {
        "name": "Qatar",
        "dial_code": "+974",
        "code": "QA"
        },
        {
        "name": "Romania",
        "dial_code": "+40",
        "code": "RO"
        },
        {
        "name": "Russia",
        "dial_code": "+7",
        "code": "RU"
        },
        {
        "name": "Rwanda",
        "dial_code": "+250",
        "code": "RW"
        },
        {
        "name": "Reunion",
        "dial_code": "+262",
        "code": "RE"
        },
        {
        "name": "Saint Barthelemy",
        "dial_code": "+590",
        "code": "BL"
        },
        {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "dial_code": "+290",
        "code": "SH"
        },
        {
        "name": "Saint Kitts and Nevis",
        "dial_code": "+1869",
        "code": "KN"
        },
        {
        "name": "Saint Lucia",
        "dial_code": "+1758",
        "code": "LC"
        },
        {
        "name": "Saint Martin",
        "dial_code": "+590",
        "code": "MF"
        },
        {
        "name": "Saint Pierre and Miquelon",
        "dial_code": "+508",
        "code": "PM"
        },
        {
        "name": "Saint Vincent and the Grenadines",
        "dial_code": "+1784",
        "code": "VC"
        },
        {
        "name": "Samoa",
        "dial_code": "+685",
        "code": "WS"
        },
        {
        "name": "San Marino",
        "dial_code": "+378",
        "code": "SM"
        },
        {
        "name": "Sao Tome and Principe",
        "dial_code": "+239",
        "code": "ST"
        },
        {
        "name": "Saudi Arabia",
        "dial_code": "+966",
        "code": "SA"
        },
        {
        "name": "Senegal",
        "dial_code": "+221",
        "code": "SN"
        },
        {
        "name": "Serbia",
        "dial_code": "+381",
        "code": "RS"
        },
        {
        "name": "Seychelles",
        "dial_code": "+248",
        "code": "SC"
        },
        {
        "name": "Sierra",
        "dial_code": "+232",
        "code": "SL"
        },
        {
        "name": "Singapore",
        "dial_code": "+65",
        "code": "SG"
        },
        {
        "name": "Slovakia",
        "dial_code": "+421",
        "code": "SK"
        },
        {
        "name": "Slovenia",
        "dial_code": "+386",
        "code": "SI"
        },
        {
        "name": "Solomon Islands",
        "dial_code": "+677",
        "code": "SB"
        },
        {
        "name": "Somalia",
        "dial_code": "+252",
        "code": "SO"
        },
        {
        "name": "South Africa",
        "dial_code": "+27",
        "code": "ZA"
        },
        {
        "name": "South Sudan",
        "dial_code": "+211",
        "code": "SS"
        },
        {
        "name": "South Georgia and the South Sandwich Islands",
        "dial_code": "+500",
        "code": "GS"
        },
        {
        "name": "Spain",
        "dial_code": "+34",
        "code": "ES"
        },
        {
        "name": "Sri Lanka",
        "dial_code": "+94",
        "code": "LK"
        },
        {
        "name": "Sudan",
        "dial_code": "+249",
        "code": "SD"
        },
        {
        "name": "Suriname",
        "dial_code": "+597",
        "code": "SR"
        },
        {
        "name": "Svalbard and Jan Mayen",
        "dial_code": "+47",
        "code": "SJ"
        },
        {
        "name": "Swaziland",
        "dial_code": "+268",
        "code": "SZ"
        },
        {
        "name": "Sweden",
        "dial_code": "+46",
        "code": "SE"
        },
        {
        "name": "Switzerland",
        "dial_code": "+41",
        "code": "CH"
        },
        {
        "name": "Syrian Arab Republic",
        "dial_code": "+963",
        "code": "SY"
        },
        {
        "name": "Taiwan",
        "dial_code": "+886",
        "code": "TW"
        },
        {
        "name": "Tajikistan",
        "dial_code": "+992",
        "code": "TJ"
        },
        {
        "name": "Tanzania, United Republic of Tanzania",
        "dial_code": "+255",
        "code": "TZ"
        },
        {
        "name": "Thailand",
        "dial_code": "+66",
        "code": "TH"
        },
        {
        "name": "Timor-Leste",
        "dial_code": "+670",
        "code": "TL"
        },
        {
        "name": "Togo",
        "dial_code": "+228",
        "code": "TG"
        },
        {
        "name": "Tokelau",
        "dial_code": "+690",
        "code": "TK"
        },
        {
        "name": "Tonga",
        "dial_code": "+676",
        "code": "TO"
        },
        {
        "name": "Trinidad and",
        "dial_code": "+1868",
        "code": "TT"
        },
        {
        "name": "Tunisia",
        "dial_code": "+216",
        "code": "TN"
        },
        {
        "name": "Turkey",
        "dial_code": "+90",
        "code": "TR"
        },
        {
        "name": "Turkmenistan",
        "dial_code": "+993",
        "code": "TM"
        },
        {
        "name": "Turks and Caicos Islands",
        "dial_code": "+1649",
        "code": "TC"
        },
        {
        "name": "Tuvalu",
        "dial_code": "+688",
        "code": "TV"
        },
        {
        "name": "Uganda",
        "dial_code": "+256",
        "code": "UG"
        },
        {
        "name": "Ukraine",
        "dial_code": "+380",
        "code": "UA"
        },
        {
        "name": "United Arab Emirates",
        "dial_code": "+971",
        "code": "AE"
        },
        {
        "name": "United Kingdom",
        "dial_code": "+44",
        "code": "GB"
        },
        {
        "name": "United States",
        "dial_code": "+1",
        "code": "US"
        },
        {
        "name": "Uruguay",
        "dial_code": "+598",
        "code": "UY"
        },
        {
        "name": "Uzbekistan",
        "dial_code": "+998",
        "code": "UZ"
        },
        {
        "name": "Vanuatu",
        "dial_code": "+678",
        "code": "VU"
        },
        {
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "dial_code": "+58",
        "code": "VE"
        },
        {
        "name": "Vietnam",
        "dial_code": "+84",
        "code": "VN"
        },
        {
        "name": "Virgin Islands, British",
        "dial_code": "+1284",
        "code": "VG"
        },
        {
        "name": "Virgin Islands, U.S.",
        "dial_code": "+1340",
        "code": "VI"
        },
        {
        "name": "Wallis and Futuna",
        "dial_code": "+681",
        "code": "WF"
        },
        {
        "name": "Yemen",
        "dial_code": "+967",
        "code": "YE"
        },
        {
        "name": "Zambia",
        "dial_code": "+260",
        "code": "ZM"
        },
        {
        "name": "Zimbabwe",
        "dial_code": "+263",
        "code": "ZW"
        }
    ];
}