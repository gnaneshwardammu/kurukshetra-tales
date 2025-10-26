// Simple node for family tree: shows image and name
function FamilyNode({ name, img }: { name: string; img: string }) {
  return (
    <div className="flex flex-col items-center w-28 mx-2">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-400 bg-white flex items-center justify-center">
        <img
          src={img}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <span className="mt-2 text-center text-xs font-semibold whitespace-nowrap">{name}</span>
    </div>
  );
}
export default function FamilyTreeSection() {
  return (
    <section className="w-full py-8" id="familytree">
       <h2 className="text-7xl mt-20 font-bold mb-2">Genealogy</h2>
      <p className="mb-6 text-muted-foreground">Family Tree of the Mahabharatam.</p>
      <div className="w-full overflow-x-auto">
        <div className="w-full  py-2 relative">
          <div className="relative w-full px-28" style={{paddingBottom: '56.25%', height: 0}}>
            <img src="/geneology.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
