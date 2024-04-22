import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import TaskManagementTabble from '@/app/ui/dashboard/taskmanagement';
import { Button } from '../ui/button';  
export default async function Page() {
  return (
    <main>
      <div className=" flex flex-row items-end justify-end">
      <Button type="submit">+ Add Student</Button>
      </div>
      <h1 className={` mb-4 text-xl md:text-2xl`}>Welcome, Abhishek</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Card title="Task" value={20} type="task" />
        <Card title="Applications" value={20} type="application" />
        <Card title="Accepted" value={50} type="accepted" />
        <Card title="Rejected" value={40} type="rejected" />
        <Card title="Students" value={40} type="students" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
        <h3 className={`text-xl md:text-2xl`}>Task Management</h3>
        <TaskManagementTabble />
      </div>
    </main>
  );
}
