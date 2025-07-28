import BookCard from "./BookCard";

let i = 1
const books = [{
  title: `Ādhi Parva `,
  image: "/adhiparva.jpg",
},{
  title: `Sabhā Parva `,
  image: "/sabhaparva.jpg",
},{
  title: `Āraṇyaka Parva `,
  image: "/vana.jpg",
},{
  title: `Virāṭa Parva `,
  image: "/virataparva.jpg",
},
{
  title: `Udyoga Parva `,
  image: "/udyogaparva.jpg",
},{
  title: `Bhishma Parva `,
  image: "/bhishmaparva.jpg",
},{
  title: `Drona Parva `,
  image: "/dronaparva.jpg",
},{
  title: `Karna Parva `,
  image: "/karnaparva.jpg",
},{
  title: `Shalya Parva `,
  image: "/shalyaparva.jpg",
},{
  title: `Sauptika Parva `,
  image: "/saupatikaparva.jpg",
},{
  title: `Strī Parva `,
  image: "/streeparva.jpg",
},{
  title: `Shanti Parva `,
  image: "/shantiparva.jpg",
},{
  title: `Anuśāsana Parva `,
  image: "/anushasanaparva.jpg",
},{
  title: `Aśvamedhika Parva `,
  image: "/ashvamedhikaparva.jpg",
},{
  title: `Āśramavāsika Parva `,
  image: "/Āśramavāsikaparva.jpg",
},{
  title: `Mausala Parva `,
  image: "/mausalaparva.jpg",
},{
  title: `Prayāṇa Parva `,
  image: "/mahaprasthanikaparva.jpg",
},{
  title: `Svargarohaṇa Parva `,
  image: "/swaragarhanaparva.jpg",
}
]



export default function BooksSection() {
  return (
    <section className="w-full py-8" id="books">
      <h2 className="text-7xl font-bold mb-2">Parvams</h2>
      <p className="mb-6 text-muted-foreground">Description about the 18 parvams of The Mahabharatam.</p>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book, idx) => (
          <div key={idx}>
            <BookCard title={book.title} image={book.image} id=""/>
          </div>
        ))}
      </div>
    </section>
  );
}
