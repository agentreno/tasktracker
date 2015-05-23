from django.shortcuts import render
from django.http import HttpResponse
from main.models import Task, Progress

# Create your views here.
def index(request):
   tasks = Task.objects.all()
   context = { 'tasks' : tasks }
   return render(request, 'main/index.html', context)

def addTask(request):
   name = request.GET['taskname']
   desc = request.GET['taskdesc']
   freq = request.GET['taskfreq']
   task = Task(name=name, description=desc, weeklyfreq=int(freq))
   task.save()
   return HttpResponse(status=200)

def deleteTask(request):
   name = request.GET['taskname']
   task = Task.objects.get(name=name)
   Progress.objects.filter(task=task).delete()
   task.delete()
   return HttpResponse(status=200)

def resetProgress(request):
   name = request.GET['taskname']
   task = Task.objects.get(name=name)
   prog = [p for p in Progress.objects.filter(task=task) if p.done_this_week()]
   for p in prog:
      p.delete()
   return HttpResponse(status=200)

def incProgress(request):
   name = request.GET['taskname']
   task = Task.objects.get(name=name)
   prog = Progress(task=task)
   prog.save()
   return HttpResponse(status=200)

def semantic_index(request):
   return render(request, 'main/index-semantic.html')


