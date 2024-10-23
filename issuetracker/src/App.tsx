import React from 'react';
//import { ReactComponent as GitLogo } from "./favicon.svg"

function App() {
  return (
    <div className='flex justify-center min-h-screen'>
      <div className='relative w-full bg-tdark overflow-hidden'>
        {/* Background Blobs */}
        <div className='animate-blob animation-delay-1000 absolute md:-top-10 md:left-20 top-20 left-2 lg:w-72 lg:h-72 md:w-56 md:h-56 w-32 h-32 bg-tsecondary rounded-full filter md:blur-3xl blur-2xl'></div>
        <div className='animate-blob animation-delay-2000 absolute md:top-32 md:-right-16 top-32 -right-12 lg:w-62 lg:h-62 md:w-56 md:h-56 w-32 h-32 bg-tprimary rounded-full filter md:blur-3xl blur-2xl'></div>
        <div className='animate-blob absolute md:bottom-20 md:right-1/3 bottom-0 lg:w-60 lg:h-60 md:w-56 md:h-56 w-32 h-32 bg-red-600 rounded-full filter md:blur-3xl blur-2xl'></div>

        <div className="lg:mt-52 md:mt-64 mt-32 relative">
          <div className='lg:text-5xl md:text-4xl text-2xl text-tlight p-10'>
            <div className='flex justify-center'>
              <div>
                GitHub Issue Tracker
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='lg:w-1/3'>
              <form action="" className='w-full flex gap-2'>
                <input type="text" name="git_repo" id="repo" placeholder='Seach GitHub repositories' className='w-full h-12 bg-tlight p-2 border-none rounded-lg' />
                <button className='text-tlight bg-tsecondary p-2 rounded-lg hover:bg-tshover'>Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
