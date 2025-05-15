import {routes} from '../config/route'
import DashBoardStudent from '../pages/DashBoardStudent/DashboardStudent.jsx'
import ManagerProgramingQuestions from '../pages/ManageProgramingQuestions/index.js'
import ProgrammingExercise from '../pages/ProgrammingExercise'
import DashBoardTeacher from '../pages/DashBoardTeacher/DashBoardTeacher.jsx'
export const listRoutes = [
    {
        path: routes.dashBoardStudent,
        component: DashBoardStudent
    },
    {
        path: routes.programming,
        component: ProgrammingExercise
    },
    {
        path: routes.managerPrograming,
        component: ManagerProgramingQuestions
    },
    {
        path: routes.dashBoardTeacher,
        component: DashBoardTeacher
    },
    {
        path: routes.chatbot,
        component: ChatBot
    }
]
