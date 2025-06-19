const books = [
  
  {
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
        comment:
          "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "Bookworm84",
        comment:
          "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
      },
      {
        name: "FantasyFanatic",
        comment:
          "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
      },
      {
        name: "SciFiGuru",
        comment:
          "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
      },
      {
        name: "NovelLover",
        comment:
          "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
      },
    ],
  },
  {
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
        comment:
          "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
      },
      {
        name: "LeseWurm",
        comment:
          "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
      },
    ],
  },
  {
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
        comment:
          "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
      },
      {
        name: "Leseratte",
        comment:
          "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
      },
    ],
  },
  {
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
        comment:
          "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
      },
    ],
  },
  {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ];


function init() {
  renderBooks();
}

function renderBooks() {
  const container = document.getElementById("bookContainer");
  container.innerHTML = "";

  for (let index = 0; index < books.length; index++) {
    const book = books[index];
    container.innerHTML += getBookTemplate(book, index);
  }

  attachEventListeners();
  
}

function getBookTemplate(book, index) {
  return `
    <div class="book-card" data-index="${index}" >
      <h2 class="book-name">${book.name}</h2>
      <hr>
      <img src="./img/book-36719_1280.png" class="image-center" alt="imgShow">
      <hr>
      <div class ="center-element">
        <div class="book-price">${book.price.toFixed(2)} &euro;</div>
        <p> <span class="likeCount">${book.likes}</span></p>
        <button class="likeBtn btn ${
          book.liked ? "btn-danger" : "btn-primary"
        }">
          ${book.liked ? "Unlike" : "Like"}
        </button>
      </div>
      <div class="book-meta">
        <p><strong>Autor:</strong> ${book.author}</p>
        <p><strong>Erscheinungsjahr:</strong> ${book.publishedYear}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
      </div>
      <div class="comments-section">
        <h4 class="CommentText">Kommentare:</h4>
        <div class="comments-list">
          ${
            book.comments.length > 0
              ? book.comments
                  .map(
                    (c) =>
                      `<div class="comment"><strong>[${c.name}]</strong>: ${c.comment} </div>`
                  )
                  .join("")
              : `<p class="no-comments">Keine Kommentare, schreibe du das erste</p>`
          }
        </div>
        <div class="addElemntComment">
        <textarea class="newComment" placeholder="Schreibe deinen Kommentar..." rows="2"></textarea>
        <button class="addCommentBtn">
        <img src="./img/paper-plane.png" class="paperSendInfo" alt="imgShow"></button>
      </div>
    </div>
  `;
}

function likeButton(book, likeBtn, likeCount) {
  if (book.liked) {
    book.likes--;
    book.liked = false;
    likeBtn.textContent = "Like";
    likeBtn.classList.remove("btn-danger");
    likeBtn.classList.add("btn-primary");
  } else {
    book.likes++;
    book.liked = true;
    likeBtn.textContent = "Unlike";
    likeBtn.classList.remove("btn-primary");
    likeBtn.classList.add("btn-danger");
  }
  likeCount.textContent = book.likes;
}

function addComment(book, newCommentInput) {
  const commentText = newCommentInput.value.trim();
  if (!commentText) {
    alert("Bitte schreibe einen Kommentar!");
    return;
  }
  book.comments.unshift({ name: "Gast", comment: commentText });
  newCommentInput.value = "";
  renderBooks();
}

function eventsToCard(card) {
  const index = card.getAttribute("data-index");
  const likeBtn = card.querySelector(".likeBtn");
  const likeCount = card.querySelector(".likeCount");
  const addCommentBtn = card.querySelector(".addCommentBtn");
  const newCommentInput = card.querySelector(".newComment");
  const book = books[index];

  likeBtn.addEventListener("click", () => {
   likeButton(book, likeBtn, likeCount);
  });

  addCommentBtn.addEventListener("click", () => {
    addComment(book, newCommentInput);
  });
}

function attachEventListeners() {
  const bookCards = document.querySelectorAll(".book-card");
  for (let i = 0; i < bookCards.length; i++) {
    eventsToCard(bookCards[i]);
  }
}