books = [
  {
    id :1,
    name: "Die Geheimnisse des Ozeans",
    author: "Clara Meer",
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: "Fantasy",
    comments: [
      {
        name: "Leser123",
        text: "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "Bookworm84",
        text: "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
      },
      {
        name: "FantasyFanatic",
        text: "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
      },
      {
        name: "SciFiEnthusiast",
        text: "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
      },
      {
        name: "ReadingAddict",
        text: "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
  },
  {
    id : 2,
    name: "Der vergessene Pfad",
    author: "Maximilian Schwarz",
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: "Fantasy",
    comments: [],
  },
  {
    id : 3,
    name: "Die Farben des Himmels",
    author: "Laura Blau",
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: "Romantik",
    comments: [
      {
        name: "LeserPeter",
        text: "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
      {
        name: "BookLover21",
        text: "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
      },
      {
        name: "FantasyNerd",
        text: "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
      },
      {
        name: "SciFiEnthusiast",
        text: "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
      },
      {
        name: "ReadingAddict",
        text: "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
  },
  {
    id :4,
    name: "Das Rätsel der Zeit",
    author: "Alexander Weiss",
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BuchKenner",
        text: "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
      },
      {
        name: "LeseWurm",
        text: "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
      },
    ],
  },
  {
    id : 5,
    name: "Der letzte Wächter",
    author: "Sabine Grün",
    likes: 1300,
    liked: true,
    price: 16.75,
    publishedYear: 2017,
    genre: "Fantasy",
    comments: [],
  },
  {
    id :6,
    name: "Im Schatten des Mondes",
    author: "Philipp Silber",
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BücherLiebhaber",
        text: "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
      },
      {
        name: "Leseratte",
        text: "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
      },
    ],
  },
  {
    id : 7,
    name: "Jenseits der Sterne",
    author: "Oliver Schwarz",
    likes: 1450,
    liked: true,
    price: 21.0,
    publishedYear: 2015,
    genre: "Science-Fiction",
    comments: [
      {
        name: "Leser123",
        text: "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
      },
    ],
  },
  {
    id : 8,
    name: "Das verborgene Königreich",
    author: "Elena Gold",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Fantasy",
    comments: [
      {
        name: "Bookworm92",
        text: "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
      },
    ],
  },
];
  const bookContainer = document.getElementById('bookContainer');

    const commentsList = document.getElementById('commentsList');
    
    
    let currentBookId = null;


function init() {
  renderBooks();
  heartUpdate();
 
}

function renderBooks() {
  let contentRef = document.getElementById("bookContainer");
  for (let i = 0; i < books.length; i++) {
    contentRef.innerHTML += getInventoryTemplate(i);
  }
}
function getInventoryTemplate(i) {
  return `
              
                <div class="book-card">
                <h2 class="book-name">${books[i].name}</h2>
                <hr class="book-hr">
                <img class="image-center" src="./img/book-36719_1280.png" alt="imgShow"">
                <hr class="book-hr">
                <div class="center-element">
                <div class="book-price">${books[i].price} &euro;</div>
                <p class="number-like" id="likeCount">${books[i].likes} </p>
                <img src="./img/heart.png" class="heart" id="heart" onclick="heartUpdate()"></span>
                </div>
                <div class="book-meta">
                    <p><strong>Autor:</strong> ${books[i].author}</p>
                    <p><strong>Erscheinungsjahr:</strong> ${
                      books[i].publishedYear
                    }</p>
                    <p><strong>Genre:</strong> ${books[i].genre}</p>
                </div>
                <div class="comments-section">
                    <h4>Kommentare:</h4>
                    ${
                      books[i].comments.length > 0
                        ? books[i].comments
                            .map(
                              (comments) =>
                                `<div class="comment">
                                <span class="comment-name">[${comments.name}]</span>  
                                <p>${comments.text}</p>
                            </div>`
                            )
                            .join("")
                        : '<p class="no-comments">Keine Kommentare, schreibe du das erste</p>'
                    }
                        <div class="add-kommentare">
                        <textarea class="textarea-name" id="newComment" placeholder="Schreibe deinen Kommentar..." required></textarea>
                        <button onclick="addComment()" class="add-comment-btn" data-book-id="${books[i]}">
                        <img class="paper-png" src="./img/paper-plane.png" alt="pap">
                        </button></div>
                   
                `;}

                let commentAddRef = document.getElementById('newComment').value 


                function addComment(i){
                  if (books[i].comments === null) {
                      books.comments[i].name.push(commentAddRef)

                    
                  }
                  renderBooks();

                }
                const heartBtn = document.getElementById('heart') ;
                const likeCountNumber = document.getElementById('likeCount')

               function heartUpdate(){
                for (let x = 0; x < books.comments.length; x++) {
                  const heart = books[x];
                  if(books.liked == true){
                    books.likes++;
                    


                  }else 
                  {
                    books.likes;
                  }
                  
                }
               }