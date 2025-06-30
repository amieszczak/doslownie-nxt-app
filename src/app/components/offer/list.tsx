export default function List({title, items}: {title: string, items: string[]}) {

  return (
    <section className='flex flex-col items-center'> 
      <h2 className='text-3xl mt-25'>{title}</h2>
      <div className='px-25 py-15'>
        <ul>
          {items.map((item, index) => {
              return (
                  <li className='text-lg list-disc py-2' key={index}>{item}</li>
              )
          })}
        </ul>
      </div>
    </section>
  );
}