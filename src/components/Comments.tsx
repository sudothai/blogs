const Comments = () => {
    return ( 
        <div className="mt-8">
            <div className="text-2xl font-bold">Comments</div>
            <ul>
                <li className="mb-4 bg-slate-300 p-2">
                    <div className="flex items-center mb-2">
                        <div className="text-blue-700 font-bold mr-2">John Doe</div>
                        <div className="text-gray-700">
                            10-November-2023
                        </div>
                    </div>
                    <p>Wow cool blog bro.</p>
                </li>
            </ul>
        </div>
     );
}
 
export default Comments;