const players = [
    {
        name: "Virat Kohli",
        age: 35,
        gender: "Male",
        strikeRate: 130.41,
        centuries: 75,
        halfCenturies: 46,
        country: "India",
        image: "https://im.rediff.com/cricket/2023/jan/17kohli1.jpg"
    },
    {
        name: "Babar Azam",
        age: 29,
        gender: "Male",
        strikeRate: 90.53,
        centuries: 27,
        halfCenturies: 52,
        country: "Pakistan",
        image: "https://www.cricdiction.com/wp-content/uploads/2022/08/Babar-Azam.jpg"
    },
    {
        name: "Kane Williamson",
        age: 34,
        gender: "Male",
        strikeRate: 74.96,
        centuries: 26,
        halfCenturies: 53,
        country: "New Zealand",
        image: "https://im.rediff.com/cricket/2021/jun/24kane1.jpg?w=670&h=900"
    },
    {
        name: "Joe Root",
        age: 33,
        gender: "Male",
        strikeRate: 89.22,
        centuries: 29,
        halfCenturies: 55,
        country: "England",
        image: "https://th.bing.com/th/id/R.9ad2f304f565e57ca2f2b2914e2ac9a3?rik=VJuQLVRK01hI6Q&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f07%2f13%2fwonderful-Joe-Root-image.jpg&ehk=WeleX2wULNMHt7Yqp9SrwiY4S%2brg9e6%2bA9jGaNwELhU%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "David Warner",
        age: 37,
        gender: "Male",
        strikeRate: 86.93,
        centuries: 45,
        halfCenturies: 53,
        country: "Australia",
        image: "https://starsunfolded.com/wp-content/uploads/2015/02/David-Warner-6.jpg"
    },
    {
        name: "Steve Smith",
        age: 34,
        gender: "Male",
        strikeRate: 86.38,
        centuries: 30,
        halfCenturies: 42,
        country: "Australia",
        image: "https://i.pinimg.com/originals/51/19/5f/51195f0acf6d7bf8d9c3272f96434fc7.jpg"
    },
    {
        name: "Rohit Sharma",
        age: 36,
        gender: "Male",
        strikeRate: 130.56,
        centuries: 30,
        halfCenturies: 51,
        country: "India",
        image: "https://th.bing.com/th/id/OIP.7FrKwjfirC933Li08mghyQAAAA?rs=1&pid=ImgDetMain"
    },
    {
        name: "AB de Villiers",
        age: 39,
        gender: "Male",
        strikeRate: 101.09,
        centuries: 25,
        halfCenturies: 46,
        country: "South Africa",
        image: "https://wallpaperaccess.com/full/1868999.jpg"
    },
    {
        name: "MS Dhoni",
        age: 42,
        gender: "Male",
        strikeRate: 87.56,
        centuries: 10,
        halfCenturies: 73,
        country: "India",
        image: "https://im.rediff.com/getahead/2013/oct/01m-s-dhoni-1.jpg?w=670&h=900"
    },
    {
        name: "Jasprit Bumrah",
        age: 30,
        gender: "Male",
        strikeRate: null,
        centuries: 0,
        halfCenturies: 0,
        country: "India",
        image: "https://w0.peakpx.com/wallpaper/542/875/HD-wallpaper-jasprit-bumrah-india-jasprit-bumrah.jpg"
    },
    {
        name: "Ben Stokes",
        age: 33,
        gender: "Male",
        strikeRate: 93.49,
        centuries: 12,
        halfCenturies: 32,
        country: "England",
        image: "https://savedaughters.com/public/ckimages/ck_1672044501.jpg"
    },
    {
        name: "Rassie van der Dussen",
        age: 35,
        gender: "Male",
        strikeRate: 89.05,
        centuries: 10,
        halfCenturies: 17,
        country: "South Africa",
        image: "https://wallpapercave.com/wp/wp11157035.jpg"
    },
    {
        name: "Shikhar Dhawan",
        age: 38,
        gender: "Male",
        strikeRate: 93.52,
        centuries: 17,
        halfCenturies: 39,
        country: "India",
        image: "https://starsunfolded.com/wp-content/uploads/2015/01/Shikhar-Dhawan-7.jpg"
    },
    {
        name: "Shreyas Iyer",
        age: 29,
        gender: "Male",
        strikeRate: 86.90,
        centuries: 6,
        halfCenturies: 22,
        country: "India",
        image: "https://indianewengland.com/wp-content/uploads/2020/04/Shreyas-Iyer.jpg"
    },
    {
        name: "Martin Guptill",
        age: 37,
        gender: "Male",
        strikeRate: 130.39,
        centuries: 18,
        halfCenturies: 35,
        country: "New Zealand",
        image: "https://i0.wp.com/battingwithbimal.com/wp-content/uploads/2018/01/MartinGuptillNewZealandvPakistan5thmbtEUIOkU6Qx.jpg?ssl=1"
    },
    {
        name: "Quinton de Kock",
        age: 31,
        gender: "Male",
        strikeRate: 96.02,
        centuries: 17,
        halfCenturies: 28,
        country: "South Africa",
        image: "https://i0.wp.com/battingwithbimal.com/wp-content/uploads/2018/08/278890.jpg?ssl=1"
    },
    {
        name: "Glenn Maxwell",
        age: 35,
        gender: "Male",
        strikeRate: 123.10,
        centuries: 3,
        halfCenturies: 29,
        country: "Australia",
        image: "https://wallpaperbat.com/img/1783983-glenn-maxwell-breaks-fastest-hundred-record-in-world-cup.jpg"
    },
    {
        name: "Chris Gayle",
        age: 44,
        gender: "Male",
        strikeRate: 87.29,
        centuries: 25,
        halfCenturies: 50,
        country: "West Indies",
        image: "https://api.time.com/wp-content/uploads/2015/02/464293422.jpg"
    },
    {
        name: "Eoin Morgan",
        age: 37,
        gender: "Male",
        strikeRate: 90.10,
        centuries: 14,
        halfCenturies: 30,
        country: "England",
        image: "https://superstarsbio.com/wp-content/uploads/2020/02/Eoin-Morgan-weight-1024x914.jpg"
    }
];
