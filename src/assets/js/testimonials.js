class Testimonial {
  #quote = "";
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }

  get image() {
    return this.#image;
  }


  get author() {
    throw new Error("getAuthor() method must be implemented.");
  }


  get testimonialHTML() {
    return `
        <div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">
                ${this.quote}
            </p>
            <p class="author">- ${this.author}</p>
        </div>
    `;
  }
}

class AuthorTestimonial extends Testimonial {
  #author = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

class CompanyTestimonial extends Testimonial {
  #company = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#company = author;
  }

  get author() {
    return this.#company + " Company";
  }
}

const testimonial1 = new AuthorTestimonial(
  "Hakase",
  "Gepeng!",
  "assets/images/gepeng.jpg"
);

const testimonial2 = new AuthorTestimonial(
  "Isigami",
  "Mau jadi direktur atau NEET",
  "assets/images/chill.png"
);

 const testimonial3 = new AuthorTestimonial(
   "Monja",
   "ituh cowok lo mon,even better!",
   "assets/images/monja.png"
 );

 const testimonial4 = new AuthorTestimonial(
  "Mamang daya",
  "Siap!",
  "assets/images/Hormat.png"
 );

//let testimonialData = [testimonial1, testimonial2, testimonial3, testimonial4];
//let testimonialHTML = "";

//for (let i = 0; i < testimonialData.length; i++) {
//  testimonialHTML += testimonialData[i].testimonialHTML;
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML;


const testimonialData = [
  {
    author: "Hakase",
    quote: "Gepeng",
    image: "assets/images/gepeng.jpg",
    rating: 1,
  },
  {
    author: "Isigami",
    quote: "Mau jadi direktur atau NEET",
    image: "assets/images/chill.png",
    rating: 5,
  },
  {
    author: "Monja",
    quote: "ituh cowok lo mon,even better!",
    image: "assets/images/monja.png",  
    rating: 2,
  },
  {
    author: "Mamang daya",
    quote: "Siap!",
    image: "assets/images/Hormat.png",
    rating: 4,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `
    <div class="testimonial">
      <img src="${item.image}" class="profile-testimonial" />
      <p class="quote">${item.quote}</p>
      <p class="author">- ${item.author}</p>
      <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
    </div>
    `;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML = `<h1>Data not found!</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `
      <div class="testimonial">
        <img src="${item.image}" class="profile-testimonial" />
        <p class="quote">${item.quote}</p>
        <p class="author">- ${item.author}</p>
        <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
      </div>
      `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}