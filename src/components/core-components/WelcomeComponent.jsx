import { Link, useParams } from 'react-router-dom';


export default function WelcomeComponent() {

    // const params = useParams()

    const { username } = useParams()

    return (
        <div id='WelcomeComponent' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl dark:text-white"'>
                        Welcome {username}
                    </p>
                    <h1 className='py-4 text-gray-700 md:text-2xl'>
                        <span className='text-black'>Manage your task - <Link to="/tasks" className='text-[#ff851b]'>here</Link></span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

