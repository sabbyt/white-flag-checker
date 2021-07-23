const ContentCard = ({ children }) => {
  return (
    <div className='bg-white m-6 shadow-lg p-8 rounded-lg mt-10 flex flex-col items-strech'>
      {children}
    </div>
  )
}

export default ContentCard
