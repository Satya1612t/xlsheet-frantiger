import { Table, Star, Bell, History, Camera } from 'lucide-react'
type Props = {}

function Header({ }: Props) {
    const feature = ['File', 'Edit', 'View', 'Insert', 'Format', 'Data', 'Tools', 'Extensions', 'Help']
    return (
        <div className="flex flex-col w-full border-b-[1px] border-gray-400 ">
            <div className="flex items-center justify-between p-2 border-b">
                <div className="flex items-center gap-2">
                    <Table className="w-6 h-6 text-green-600" />
                    <h1 className="text-lg font-medium">Task assessment for Financial Planning</h1>
                    <Star className="w-5 h-5 text-gray-500" />
                </div>
                <div className="flex items-center gap-8">
                    <Bell className="w-5 h-5 text-gray-500" />
                    <History className="w-5 h-5 text-gray-500" />
                    <Camera className="w-5 h-5 text-gray-500" />
                    <button className="px-3 py-2 rounded-md bg-blue-100 hover:bg-blue-200 text-blue-700">
                        Share
                    </button>
                </div>
            </div>

            <div className="flex items-center p-1 px-2">
                {feature.map((item) => (
                    <button key={item} className="h-8 px-2 text-sm">
                        {item}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-2  p-3 bg-gray-50 ">
                <div className='bg-blue-50 w-full h-8 flex flex-col justify-center items-start rounded-2xl px-2 '>
                    <button className="h-6 px-2 text-xs text-blue-950 font-semibold bg-blue-200 rounded-2xl">
                       <i className='ri-eye-line text-sm mr-1'></i> View only 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header