import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class Task(models.Model):
   name = models.CharField(max_length=90)
   description = models.CharField(max_length=1000)
   weeklyfreq = models.IntegerField()

   def _count_progress_this_week(self):
      return len([p for p in Progress.objects.filter(task=self.id) if p.done_this_week()])
   count_progress_this_week = property(_count_progress_this_week)

   def __str__(self):
       return self.name

class Progress(models.Model):
   task = models.ForeignKey(Task)
   datetime_completed = models.DateTimeField(auto_now_add=True)

   def done_this_week(self):
      return self.datetime_completed >= timezone.now() - datetime.timedelta(weeks=1)
