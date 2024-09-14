from models import Task

class TaskService:
    def __init__(self):
        self.tasks = []

    def create_task(self, title, description):
        task = Task(title, description)
        self.tasks.append(task)
        return task

    def display_tasks(self):
        for task in self.tasks:
            print(task)

