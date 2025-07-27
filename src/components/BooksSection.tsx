import BookCard from "./BookCard";


const books = Array.from({ length: 18 }, (_, i) => ({
  title: `Book Title ${i + 1}`,
  image: "/BOOK-Cover-page.jpg",
}));

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

export default function BooksSection() {
  return (
    <section className="w-full py-8" id="books">
      <h2 className="text-2xl font-bold mb-2">Books</h2>
      <p className="mb-6">Description about the 18 books of Mahabharatam.</p>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {books.map((book, idx) => (
          <div key={idx}>
            <BookCard title={book.title} image={book.image} />
          </div>
        ))}
      </div>
    </section>
  );
}
