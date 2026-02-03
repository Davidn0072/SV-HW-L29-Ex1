import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderKanban } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    taskCount: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Mobile App Development",
    taskCount: 8,
    status: "Active",
  },
  {
    id: 3,
    name: "API Integration",
    taskCount: 5,
    status: "On Hold",
  },
  {
    id: 4,
    name: "Database Migration",
    taskCount: 3,
    status: "Completed",
  },
  {
    id: 5,
    name: "Security Audit",
    taskCount: 7,
    status: "Active",
  },
  {
    id: 6,
    name: "Documentation Update",
    taskCount: 4,
    status: "Completed",
  },
];

function getStatusVariant(status: string) {
  switch (status) {
    case "Active":
      return "default";
    case "Completed":
      return "secondary";
    case "On Hold":
      return "outline";
    default:
      return "default";
  }
}

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          Manage and track all your projects
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="hover:bg-muted/50 transition-colors">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <FolderKanban className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <CardTitle className="text-base">{project.name}</CardTitle>
                <CardDescription>
                  {project.taskCount} {project.taskCount === 1 ? "task" : "tasks"}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Badge variant={getStatusVariant(project.status)}>
                {project.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
