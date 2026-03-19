import { Feed } from "./components/Feed"
import { SidebarLeft } from "./components/Sidebar-left"
import { SidebarRight } from "./components/Sidebar-right"

function App() {

  return (
    <div className="min-h-screen min-w-screen bg-slate-100 dark:bg-black">
      <div className="mx-auto flex w-full max-w-450 gap-4 px-3">
        <div className="sticky top-0 w-full max-w-80 pt-2 pb-4">
          <SidebarLeft></SidebarLeft>
        </div>
        <div className="border-border flex-1 border-x">
          <Feed></Feed>
        </div>
        <div className="sticky top-0 h-screen w-80 pt-3 pb-4">
          <SidebarRight></SidebarRight>
        </div>
      </div>
    </div>
  )
}

export default App
