from tastypie.resources import ModelResource
from main.models import Task

class TaskResource(ModelResource):
    class Meta:
        queryset = Task.objects.all()
        allowed_methods = ('get')
