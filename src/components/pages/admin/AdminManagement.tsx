import SideBar from "../../ui/admin/SideBarAdmin"
import { Outlet } from "react-router-dom";

/**
 
Contains the main page of the operator user
@returns {Component} ManagementPanel
*/
const ManagementPanel = () => {
    return (
        <>
            <div className="flex h-screen">
                <div className="fixed top-0 left-0 h-full w-60 bg-gray-800">
                    <SideBar />
                </div>
                <div className="flex-1 ml-80">
                    <Outlet />
                </div>
                
            </div>
        </>

    )
}
export default ManagementPanel