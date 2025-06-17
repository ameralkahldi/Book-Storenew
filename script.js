const books = [
  {
    id: 1,
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
        comment:
          "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
      {
        name: "BookLover21",
        comment:
          "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
      },
      {
        name: "FantasyNerd",
        comment:
          "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
      },
      {
        name: "SciFiEnthusiast",
        comment:
          "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
      },
      {
        name: "ReadingAddict",
        comment:
          "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
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
        comment:
          "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
      },
    ],
  },
  {
    name: "Liebe in Zeiten des Krieges",
    author: "Emilia Rot",
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2016,
    genre: "Romantik",
    comments: [
      {
        name: "Bibliophile23",
        comment:
          "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
      },
      {
        name: "StorySeeker",
        comment:
          "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
      },
      {
        name: "SciFiExplorer",
        comment:
          "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
      },
    ],
  },
];

// دالة بدء التشغيل
function init() {
  renderBooks();
}

function renderBooks() {
  const container = document.getElementById("bookContainer");
  container.innerHTML = ""; // تفضي المحتوى قبل الإضافة

  books.forEach((book, index) => {
    container.innerHTML += getBookTemplate(book, index);
  });

  // بعد الإنشاء نربط الأحداث (اللايكات وإضافة التعليقات)
  attachEventListeners();
}

// قالب HTML لكل كتاب
function getBookTemplate(book, index) {
  return `
    <div class="book-card" data-index="${index}" >
      <h2 class="book-name">${book.name}</h2>
      <hr>
      <img src="./img/book-36719_1280.png" class="image-center" alt="imgShow" >
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
      <div class="comments-section" style="margin-top:10px;">
        <h4>Kommentare:</h4>
        <div class="comments-list">
          ${
            book.comments.length > 0
              ? book.comments
                  .map(
                    (c) =>
                      `<div class="comment"><strong>[${c.name}]</strong>: ${c.text}</div>`
                  )
                  .join("")
              : `<p class="no-comments">Keine Kommentare, schreibe du das erste</p>`
          }
        </div>
        <textarea class="newComment" placeholder="Schreibe deinen Kommentar..." rows="2" style="width: 100%; margin-top: 5px;"></textarea>
        <button class="addCommentBtn btn btn-success" style="margin-top:5px;">Kommentar hinzufügen</button>
      </div>
    </div>
  `;
}

function attachEventListeners() {
  const bookCards = document.querySelectorAll(".book-card");

  bookCards.forEach((card) => {
    const index = card.getAttribute("data-index");
    const likeBtn = card.querySelector(".likeBtn");
    const likeCount = card.querySelector(".likeCount");
    const addCommentBtn = card.querySelector(".addCommentBtn");
    const newCommentInput = card.querySelector(".newComment");

    // event like
    likeBtn.addEventListener("click", () => {
      const book = books[index];
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
    });

    // حدث إضافة تعليق
    addCommentBtn.addEventListener("click", () => {
      const commentText = newCommentInput.value.trim();
      if (!commentText) {
        alert("Bitte schreibe einen Kommentar!");
        return;
      }
      const book = books[index];

      book.comments.push({ name: "Gast", text: commentText });
      newCommentInput.value = "";
      renderBooks();
    });
  });
}


