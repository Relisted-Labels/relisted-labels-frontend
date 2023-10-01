
export default function Profile() {
    return (
        <div className="bg-white  lg:p-10 sm:p-2 ">
            <div className="w-200 p-3">
            <div className="flex gap-x-4">
            <img class="rounded-full sm-hidden h-30 w-30 " src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Extra large avatar" />
            <img class="rounded-full lg-hidden h-20 w-20 " src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Extra large avatar" />
                <div className="w-50 mt-4">
                    <div className="flex gap-x-4">
                        <p>Alexander Paul</p>
                    </div>
                    <div className="flex gap-x-4 mt-3">
                        <span><b>1</b> Post</span>
                        <span><b>0</b> Following</span>
                        <span><b>5</b> Followers</span>
                    </div>
                    <div className="mt-3">
                    <button type="button" class="sm-hidden py-2.5 px-5 w-full mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border font-bold border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit Profile</button>
                    </div>
                </div>
            </div>
            <button type="button" class="lg-hidden py-2.5 px-5 w-full mt-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border font-bold border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit Profile</button>
            </div>
            
<div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap ">
        <li class="mr-10 ml-4">
            <a href="#" class="inline-block p-1 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 text-lg font-bold dark:border-blue-500" aria-current="page">Items</a>
        </li>
        <li class="mr-10 ml-10">
            <a href="#" class="inline-block p-1 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-lg dark:hover:text-gray-300">Saved</a>
        </li>
        
        <li class="ml-10">
            <a href="#" class="inline-block p-1 text-lg border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Reviews</a>
        </li>
        
    </ul>
</div>

        </div>
    )
}