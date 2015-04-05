from django.core.management.base import BaseCommand, CommandError
from main.models import Progress, Task

class Command(BaseCommand):
   help = 'Prints raw progress entries from the database'

   def handle(self, *args, **options):
      ps = Progress.objects.all()
      for p in ps:
         print(p.task.name.ljust(20) + " " + 
            p.datetime_completed.date().strftime("%d-%m-%y") + " " + 
            str(p.done_this_week()))
