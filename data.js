let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
    },
];

// Average sales

let totalRate = 0 

for (const album of bestSellingAlbums) {
    totalRate += album.sale // rate = rate + variable   -   rate +- variable
}

const averageRate = totalRate / bestSellingAlbums.length
console.log(averageRate)

// Average Age 

let totalYear = 0 

for (const album of bestSellingAlbums) {
    totalYear += album.year 
}

const averageYear = totalYear / bestSellingAlbums.length

let thisYear = 2023

const averageAge = thisYear - averageYear

console.log(averageAge)

// oldest/newest album

let newestAlbum = bestSellingAlbums[0]

for (const album of bestSellingAlbums) {
    if (album.year > newestAlbum.year) {
        newestAlbum = album
    }
    }
console.log(newestAlbum.title)

let oldestAlbum = bestSellingAlbums[0]

for (const album of bestSellingAlbums) {
    if (album.year < oldestAlbum.year) {
        oldestAlbum = album
    }
    }
console.log(oldestAlbum.title)

let albumsOfEagles = 0;

for (const album of bestSellingAlbums) {
    if (album.artist === "Eagles") {
        albumsOfEagles += album.sale
    }
    }
    console.log(albumsOfEagles)

    let isBothRock = 0;

for (const album of bestSellingAlbums) {
    if (album.artist === "Eagles") {
        for (const type of album.genres) {
            if (type === "soft rock")
        isBothRock++
        }
    }
    }
    if (isBothRock === 2)
    console.log('True')


   // Add an extra album

   let newAlbum =
   {artist: "Gabriella Cilmi",
   title: "Lessons to be learned",
   year: 2008,
   genres: "pop",
   sale: 1000000,}

   // bestSellingAlbums.push(newAlbum) 

   bestSellingAlbums[8] = newAlbum

   console.log(bestSellingAlbums) 

   // add an extra key
   newAlbum["iLike"] = true
   bestSellingAlbums[0]["iLike"] = true 
   bestSellingAlbums[1]["iLike"] = true 
   bestSellingAlbums[2]["iLike"] = true 
   bestSellingAlbums[3]["iLike"] = true 
   bestSellingAlbums[4]["iLike"] = true 
   bestSellingAlbums[5]["iLike"] = true 
   bestSellingAlbums[6]["iLike"] = true 
   bestSellingAlbums[7]["iLike"] = true 
   
   console.log(bestSellingAlbums)
