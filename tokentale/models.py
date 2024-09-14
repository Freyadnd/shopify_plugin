

class Task:
    def __init__(self, title, description, completed=False):
        self.title = title
        self.description = description
        self.completed = completed

    def mark_complete(self):
        self.completed = True

    def __repr__(self):
        return f"Task({self.title}, {self.description}, Completed: {self.completed})"

