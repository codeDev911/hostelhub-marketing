import { getSession } from '@/lib/auth';
import BookHostel from './ClientPage'

const page = async() => {
    const session : any = await getSession();
  return (
    <div>
      <BookHostel session={session}/>
    </div>
  )
}

export default page