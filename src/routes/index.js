import {routes} from '../config/route'
import DashBoardStudent from '../pages/DashBoardStudent'
import ProgrammingExercise from '../pages/ProgrammingExercise'
export const listRoutes = [
    {
        path: routes.dashBoardStudent,
        component: DashBoardStudent
    },
    {
        path: routes.programmingExercise,
        component: ProgrammingExercise
    }
]