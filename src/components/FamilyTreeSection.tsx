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
    <section className="w-full py-8" id="familyTree">
      <h2 className="text-2xl font-bold mb-4">Family Tree</h2>
      <div className="w-full overflow-x-auto">
        <div className="w-full py-8 relative">
          {/* Responsive iFrame connectors for relationships */}
          <div className="relative w-full" style={{paddingBottom: '56.25%', height: 0}}>
            <iframe
              frameBorder="0"
              className="absolute top-0 left-0 w-full h-full"
              src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Mahabharat%20Family%20Tree.drawio&dark=auto#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D13H1EKL0KsZDIzVTall-4E0ADJrV0aYs-%26export%3Ddownload"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
