

const RightCardContent = (props) => {
  return (
    <div>
          <div className='absolute top-0 left-0 p-7 h-full w-full flex flex-col justify-between'>
                <h2 className='bg-white rounded-full text-2xl font-bold h-10 w-10 flex justify-center items-center'>{props.number}</h2>
        <div>
        <p className='text-lg text-white mb-5 leading-normal'>{props.intro}</p>
        
        <button className={`rounded-full font-semibold text-white px-6 py-2 ${
          props.tag === 'Satisfactory' ? 'bg-yellow-500' :
          props.tag === 'Minimal' ? 'bg-red-500' :
          props.tag === 'Balanced' ? 'bg-green-500' :
          props.tag === 'Excellent' ? 'bg-blue-500' : 'bg-blue-500'
        }`}>
         {props.tag}
        </button>
       
        <button className={`rounded-full font-semibold text-white px-4 py-2 ${
          props.tag === 'Satisfactory' ? 'bg-yellow-500' :
          props.tag === 'Minimal' ? 'bg-red-500' :
          props.tag === 'Balanced' ? 'bg-green-500' :
          props.tag === 'Excellent' ? 'bg-blue-500' : 'bg-blue-500'
        }`}>
         <i className="ri-phone-line"></i>
        </button>
         </div>
         </div>

    </div>

  )
}

export default RightCardContent
