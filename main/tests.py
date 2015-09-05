import datetime
from django.test import TestCase
from django.utils import timezone
from main.models import Progress, Task

def createTestTask():
   task = Task(name="testtask", description="testing", weeklyfreq=1)
   task.save()
   return task

# Create your tests here.
class ProgressTests(TestCase):
   def test_recent_progress_in_done_this_week(self):
      task = createTestTask()
      prog = Progress(task=task)
      prog.save()
      self.assertEqual(prog.done_this_week(), True)

   def test_old_progress_not_in_done_this_week(self):
      task = createTestTask()
      prog = Progress(task=task)
      prog.save()
      Progress.objects.filter(pk=prog.id).update(datetime_completed = 
            (timezone.now() - datetime.timedelta(days=7)))
      prog = Progress.objects.get(pk=prog.id)
      self.assertEqual(prog.done_this_week(), False)

   def test_count_progress_for_task_zero_one_and_two(self):
      task = createTestTask()
      self.assertEqual(task.count_progress_this_week, 1)
      prog = Progress(task=task)
      prog.save()
      self.assertEqual(task.count_progress_this_week, 1)
      prog2 = Progress(task=task)
      prog2.save()
      self.assertEqual(task.count_progress_this_week, 2)
