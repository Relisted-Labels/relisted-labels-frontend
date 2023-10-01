export default function ViewProfileItems() {
    return (
      <div className="bg-white">
        <div className="no-item p-10 flex justify-center flex-wrap">
          <div className='justify-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20 text-indigo-400 ml-[80px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <span>This User does not have an Item Yet !</span><br />
          <span className='ml-9'>
          <a href="/listings" className='font-bold text-indigo-400'>Check other Collections</a></span>
          </div>
        </div>
      </div>
    );
  }
  