import BookCard from "./BookCard";


const books = Array.from({ length: 18 }, (_, i) => ({
  title: `Adhiparvam ${i + 1}`,
  image: "/BOOK-Cover-page.jpg",
}));



export default function BooksSection() {
  return (
    <section className="w-full py-8" id="books">
      <h2 className="text-7xl font-bold mb-2">Parvams</h2>
      <p className="mb-6 text-muted-foreground">Description about the 18 parvams of The Mahabharatam.</p>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-6">
        {books.map((book, idx) => (
          <div key={idx}>
            <BookCard title={book.title} image={book.image} id=""/>
          </div>
        ))}
      </div>
    </section>
  );
}
