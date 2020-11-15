import HomePage from "@/components/HomePage";
import PatientPage from "@/components/PatientPage";
import FinalPage from "@/components/FinalPage";

const routes = [
    {path: "/", component: HomePage, name: "home"},
    {path: "/patients", component: PatientPage, name: "patient"},
    {path: "/results", component: FinalPage, name: "final"}
];

export default routes;
