import BookCard from "./BookCard";

const books = [{
  id: "e715dc1501",
  title: `Ādhi Parva `,
  image: "/adhiparva.jpg",
},{
  id: "5eb1e043d6",
  title: `Sabhā Parva `,
  image: "/sabhaparva.jpg",
},{
  id: "1dc7109c19",
  title: `Āraṇyaka Parva `,
  image: "/vana.jpg",
},{
  id: "117712de21",
  title: `Virāṭa Parva `,
  image: "/virataparva.jpg",
},{
  id: "9776d29dd6",
  title: `Udyoga Parva `,
  image: "/udyogaparva.jpg",
},{
  id: "6",
  title: `Bhishma Parva `,
  image: "/bhishmaparva.jpg",
},{
  id: "7",
  title: `Drona Parva `,
  image: "/dronaparva.jpg",
},{
  id: "8",
  title: `Karna Parva `,
  image: "/karnaparva.jpg",
},{
  id: "9",
  title: `Shalya Parva `,
  image: "/shalyaparva.jpg",
},{
  id: "10",
  title: `Sauptika Parva `,
  image: "/saupatikaparva.jpg",
},{
  id: "11",
  title: `Strī Parva `,
  image: "/streeparva.jpg",
},{
  id: "12",
  title: `Shanti Parva `,
  image: "/shantiparva.jpg",
},{
  id: "13",
  title: `Anuśāsana Parva `,
  image: "/anushasanaparva.jpg",
},{
  id: "14",
  title: `Aśvamedhika Parva `,
  image: "/ashvamedhikaparva.jpg",
},{
  id: "15",
  title: `Āśramavāsika Parva `,
  image: "/Āśramavāsikaparva.jpg",
},{
  id: "16",
  title: `Mausala Parva `,
  image: "/mausalaparva.jpg",
},{
  id: "17",
  title: `Prayāṇa Parva `,
  image: "/mahaprasthanikaparva.jpg",
},{
  id: "18",
  title: `Svargarohaṇa Parva `,
  image: "/swaragarhanaparva.jpg",
}
]



export default function BooksSection() {
  return (
    <section className="w-full py-8" id="books">
      <h2 className="text-7xl mt-20 font-bold mb-2">Parvams</h2>
      <p className="mb-6 text-muted-foreground">Description about the 18 parvams of The Mahabharatam.</p>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book, idx) => (
          <div key={idx}>
            <BookCard title={book.title} image={book.image} id={book.id}/>
          </div>
        ))}
      </div>
    </section>
  );
}
