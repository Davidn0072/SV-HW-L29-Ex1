import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard-layout"

const statsCards = [
  { title: "Total Tasks", value: 0 },
  { title: "Completed Tasks", value: 0 },
  { title: "In Progress", value: 0 },
]

const recentTasks = [
  {
    name: "Task placeholder 1",
    project: "Project A",
    status: "In Progress",
    priority: "High",
  },
  {
    name: "Task placeholder 2",
    project: "Project B",
    status: "Completed",
    priority: "Medium",
  },
  {
    name: "Task placeholder 3",
    project: "Project A",
    status: "Pending",
    priority: "Low",
  },
  {
    name: "Task placeholder 4",
    project: "Project C",
    status: "In Progress",
    priority: "High",
  },
]

function getStatusVariant(status: string) {
  switch (status) {
    case "Completed":
      return "default"
    case "In Progress":
      return "secondary"
    case "Pending":
      return "outline"
    default:
      return "outline"
  }
}

export default function DashboardPage() {
  return (
    <DashboardLayout pageTitle="Dashboard">
      <div className="flex flex-col gap-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {statsCards.map((card) => (
            <Card key={card.title}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{card.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Tasks Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task Name</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTasks.map((task) => (
                  <TableRow key={task.name}>
                    <TableCell className="font-medium">{task.name}</TableCell>
                    <TableCell>{task.project}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(task.status)}>
                        {task.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{task.priority}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
