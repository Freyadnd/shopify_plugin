
from models import Task
from services import TaskService

class TaskController:
    def __init__(self):
        self.task_service = TaskService()

    def run(self):
        print("Task Manager Running")
        task1 = self.task_service.create_task("Write Code", "Write some Python code")
        self.task_service.display_tasks()


