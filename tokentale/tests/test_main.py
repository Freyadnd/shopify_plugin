# tests/test_main.py
import unittest
from task_manager.models import Task

class TestTask(unittest.TestCase):
    def test_task_completion(self):
        task = Task("Test", "Testing task completion")
        task.mark_complete()
        self.assertTrue(task.completed)

if __name__ == "__main__":
    unittest.main()

