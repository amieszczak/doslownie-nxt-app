import Image from "next/image";

export default function OfferEntry({
  pageTitle,
  entryInformation,
  photoSrc,
  alt
}: {pageTitle: string, entryInformation: string, photoSrc: string, alt?: string}) {

  return (
    <>
      <section className='flex'>  
        <div className='w-1/2 flex flex-col justify-between'>
            <div className='flex flex-col items-center justify-center p-25 gap-15 h-full'> 
                <h1 className='text-2xl font-bold'>{pageTitle}</h1>
                <p className='text-lg'>{entryInformation}</p>
            </div>
            <div className='p-5 text-center hover:bg-black hover:text-white cursor-pointer'> 
                <p className='text-3xl italic'>REZERWUJ</p>
            </div>
        </div>

        <div className='w-1/2 h-full '>  
          <Image 
            className='w-full h-full object-cover'        
            src={photoSrc}
            alt={alt ?? ''}
            width={500}
            height={500}
          />
        </div>
      </section>
    </>
  );
}