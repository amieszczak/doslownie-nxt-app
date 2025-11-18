export default function List({title, items}: {title: string, items: string[]}) {

  return (
    <section className='px-10 sm:px-15 md:px-25 flex flex-col items-center mt-10 sm:mt-15 md:mt-25'> 
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div className='py-15'>
        <ul>
          {items.map((item, index) => {
              return (
                  <li className='text-xs md:text-sm xl:text-base list-disc py-2' key={index}>{item}</li>
              )
          })}
        </ul>
      </div>
    </section>
  );
}