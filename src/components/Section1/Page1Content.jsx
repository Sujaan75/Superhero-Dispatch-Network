
import LeftConetent from './LeftConetent'
import RightConetent from './RightConetent'

const Page1Content = (props) => {
  return (
    <div className='py-10 px-18 h-[90vh] flex gap-10 items-center'>
      <LeftConetent />
      <RightConetent users={props.users} />
    </div>
  )
}

export default Page1Content
