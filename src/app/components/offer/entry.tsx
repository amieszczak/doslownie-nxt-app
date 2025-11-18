import Image from "next/image";

export default function OfferEntry({
  pageTitle,
  entryInformation,
  photoSrc,
  alt
}: {pageTitle: string, entryInformation: string, photoSrc: string, alt?: string}) {

  return (
    <>
      <section className='flex max-md:flex-col-reverse max-xl:mt-[calc(var(--menu-primary-height)/2)]'>  
        <div className='w-1/2 max-md:w-full flex flex-col justify-between max-md:items-end'>
            <div className='flex flex-col items-center justify-center px-10 py-5 sm:px-15 sm:py-8 md:p-20 lg:p-25 gap-5 sm:gap-8 md:gap-15 h-full max-md:w-full'> 
                <h1 className='text-2xl font-bold'>{pageTitle}</h1>
                <p className='text-xs md:text-sm xl:text-base'>{entryInformation}</p>
            </div>
            <div className='md:p-5 max-md:px-5 max-md:py-3 text-center hover:bg-black hover:text-white cursor-pointer max-md:border max-md:border-black max-md:rounded-lg max-md:w-max max-md:mr-5 max-md:mb-5'> 
                <p className='text-base sm:text-xl md:text-3xl italic'>REZERWUJ</p>
            </div>
        </div>

        <div className='w-1/2 max-md:w-full max-md:h-[33.33vh] overflow-hidden'>  
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