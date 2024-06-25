import Image from "next/image";

const Gallery = ({thumbnail , gallery}) => {
  const newGallery = [...gallery];
  newGallery.shift();

  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image src={thumbnail} className="h-[400px]" alt="Hotel Thumbnail" width={400} height={400} />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {
            newGallery?.map((img)=>(
              <Image key={img} src={img} alt="Hotel Gallery" width={400} height={400} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;
