const Header = () => {
    return (
        <>
            <div className="w-full fixed h-auto bg-transparent  bg-opacity-30 border-b border-black/20 z-10 overflow-hidden  backdrop-blur-sm">
                <div className="flex items-center p-3 gap-2 ml-5">
                    <img width="50" height="50" src="https://img.icons8.com/nolan/50/canvas-student.png" alt="anghami"/>
                    <h1 className="text-2xl font-extrabold text-zinc-900">AIwaysOnTrip</h1>
                </div>
            </div>
        </>
    )
}

export default Header;