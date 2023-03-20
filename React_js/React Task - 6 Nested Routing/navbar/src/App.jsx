import { Routes, Route } from "react-router-dom";
import Time_Tracker from "./Pages/Time_Tracker.jsx";
import NotFound from "./Pages/404NotFound.jsx";
import TimeLog from "./Component/TimeManagment/TimeLog.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Timesheat from "./Component/TimeManagment/Timesheat";
import ManageExtraStaffingsHour from "./Component/TimeManagment/ManageExtraStaffingsHour.jsx";
import Componey_policy from "./Pages/Componey_policy.jsx";
import LeaveManagment from "./Pages/LeaveManagment.jsx";
import Leaves from "./Component/LeaveManagment/Leaves.jsx";
import LeaveReport from "./Component/LeaveManagment/LeaveReport.jsx";
import Salery from "./Component/Payroll/Salery.jsx";
import PaawordManagement from "./Pages/PaawordManagement.jsx";
import ToggleReport from "./Component/Toggle/ToggleReport.jsx";
import ToggleDashBoard from "./Component/Toggle/ToggleDashBoard.jsx";

import Wrapper from "./Component/wrapper.jsx";
import Holiday_Managment from "./Pages/Holiday_Managment.jsx";
import Payroll from "./Component/Payroll/Payroll.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/time-tracker" element={<Time_Tracker />}>
            <Route path="time-log" element={<TimeLog />} />
            <Route path="time-sheet" element={<Timesheat />} />
            <Route path="manage-hour" element={<ManageExtraStaffingsHour />} />
          </Route>

          <Route path="/componey-policy" element={<Componey_policy />} />

          <Route path="/leave-management" element={<LeaveManagment />}>
            <Route path="leaves" element={<Leaves />} />
            <Route path="leaves-report" element={<LeaveReport />} />
          </Route>

          <Route path="/payroll" element={<Payroll />}>
            <Route path="salary-slip" element={<Salery />} />
          </Route>

          <Route path="/holiday-manage" element={<Holiday_Managment />} />

          <Route path="/password-managment" element={<PaawordManagement />} />

          <Route path="/toggle">
            <Route path="toggle-deshboard" element={<ToggleDashBoard />} />
            <Route path="toggle-report" element={<ToggleReport />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
