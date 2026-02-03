import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tasks = [
  {
    id: 1,
    name: "Design homepage mockup",
    project: "Website Redesign",
    status: "In Progress",
    priority: "High",
  },
  {
    id: 2,
    name: "Implement authentication",
    project: "Mobile App",
    status: "Completed",
    priority: "High",
  },
  {
    id: 3,
    name: "Write API documentation",
    project: "API Development",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: 4,
    name: "Set up CI/CD pipeline",
    project: "DevOps",
    status: "Completed",
    priority: "High",
  },
  {
    id: 5,
    name: "Create user onboarding flow",
    project: "Mobile App",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: 6,
    name: "Database optimization",
    project: "API Development",
    status: "Completed",
    priority: "Low",
  },
  {
    id: 7,
    name: "Design system components",
    project: "Website Redesign",
    status: "In Progress",
    priority: "High",
  },
  {
    id: 8,
    name: "Security audit",
    project: "DevOps",
    status: "Completed",
    priority: "High",
  },
];

function getStatusVariant(status: string) {
  switch (status) {
    case "Completed":
      return "secondary";
    case "In Progress":
      return "default";
    default:
      return "outline";
  }
}

function getPriorityClass(priority: string) {
  switch (priority) {
    case "High":
      return "text-red-600 dark:text-red-400 font-medium";
    case "Medium":
      return "text-yellow-600 dark:text-yellow-400 font-medium";
    case "Low":
      return "text-green-600 dark:text-green-400 font-medium";
    default:
      return "";
  }
}

function TasksTable({ tasks }: { tasks: typeof import("./page").tasks }) {
  return (
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
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.name}</TableCell>
              <TableCell>{task.project}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(task.status)}>
                  {task.status}
                </Badge>
              </TableCell>
              <TableCell className={getPriorityClass(task.priority)}>
                {task.priority}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-center text-muted-foreground">
              No tasks found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default function TasksPage() {
  const completedTasks = tasks.filter((task) => task.status === "Completed");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
        <p className="text-muted-foreground">
          Manage and track all your tasks across projects.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Tasks</CardTitle>
          <CardDescription>
            A complete list of all tasks with filtering options.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All ({tasks.length})</TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({completedTasks.length})
              </TabsTrigger>
              <TabsTrigger value="in-progress">
                In Progress ({inProgressTasks.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <TasksTable tasks={tasks} />
            </TabsContent>
            <TabsContent value="completed" className="mt-4">
              <TasksTable tasks={completedTasks} />
            </TabsContent>
            <TabsContent value="in-progress" className="mt-4">
              <TasksTable tasks={inProgressTasks} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
