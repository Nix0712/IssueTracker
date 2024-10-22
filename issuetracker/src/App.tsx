import React from 'react';
import { ReactComponent as GitLogo } from "./favicon.svg"

function App() {
  return (
    <div className='bg-tdark flex justify-center h-screen'>
      <div className="mt-40">
        <div className='text-5xl text-tlight p-10'>
          <div className='flex justify-center'>
            <GitLogo className='m-2 w-16' />
            <div>
              GitHub Issue Tracker
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <form action="" className='w-full'>
            <input type="text" name="git_repo" id="repo" className='w-full h-12 bg-tlight p-2 border-none rounded-lg' />
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
