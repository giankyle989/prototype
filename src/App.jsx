import { Route, Routes } from "react-router-dom"
import Department from "./users/admin_views/department/Department"
import AddDoctor from "./users/admin_views/doctor/AddDoctor"
import ManageDoctor from "./users/admin_views/doctor/ManageDoctor"
import AddNurse from "./users/admin_views/nurse/AddNurse"
import ManageNurse from "./users/admin_views/nurse/ManageNurse"
import AddAnnouncement from "./users/admin_views/announcement/AddAnnouncement"
import ManageAnnouncement from "./users/admin_views/announcement/ManageAnnouncement"
import Staff from "./users/admin_views/staff/Staff"
import DoctorInformation from "./users/staff_views/doctor/DoctorInformation"
import FindPatient from "./users/staff_views/patient/FindPatient"
import CreatePatient from "./users/staff_views/patient/CreatePatient"
import FindAppointment from "./users/staff_views/appointment/FindAppointment"
import CreateAppointment from "./users/staff_views/appointment/CreateAppointment"
import Request from "./users/nurse_views/Request"
import Schedule from "./users/nurse_views/Schedule"
import DocRequest from "./users/doctor_views/DocRequest"
import DocHistory from "./users/doctor_views/DocHistory"
import DocSchedule from "./users/doctor_views/DocSchedule"
import ManageSchedule from "./users/doctor_views/ManageSchedule"
import Login from "./users/Login"

function App() {
  return (
    <> 
      <Routes>

        <Route path="/" element={<Login/>}/>

        {/**Doctor Routes */}
        <Route path={"/doctor"} element={<DocRequest/>}/>
        <Route path={"/doctor/history"} element={<DocHistory/>}/>
        <Route path={"/doctor/availability"} element={<ManageSchedule/>}/>
        <Route path={"/doctor/schedule"} element={<DocSchedule/>}/>

        {/**Admin Routes */}
        <Route path="/admin" element={<Department/>}/>
        <Route path="admin/doctoradd" element={<AddDoctor/>}/>
        <Route path="admin/doctorman" element={<ManageDoctor/>}/>
        <Route path="admin/nurseadd" element={<AddNurse/>}/>
        <Route path="admin/nurseman" element={<ManageNurse/>}/>
        <Route path="admin/annadd" element={<AddAnnouncement/>}/>
        <Route path="admin/annman" element={<ManageAnnouncement/>}/>
        <Route path="admin/staff" element={<Staff/>}/>

        {/**Staff Routes */}
        <Route path="/staff" element={<DoctorInformation/>}/>
        <Route path="staff/findpatient" element={<FindPatient/>}/>
        <Route path="staff/createpatient" element={<CreatePatient/>}/>
        <Route path="staff/findappointment" element={<FindAppointment/>}/>
        <Route path="staff/createappointment" element={<CreateAppointment/>}/>
        
        {/**Nurse Routes */}
        <Route path="/nurse" element={<Request/>}/>
        <Route path="nurse/schedule" element={<Schedule/>}/>
      </Routes>
    </>
  )
}

export default App
