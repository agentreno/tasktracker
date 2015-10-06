from tastypie import fields
from tastypie.resources import ModelResource
from main.models import Task

class TaskResource(ModelResource):
    progress = fields.IntegerField()
    class Meta:
        queryset = Task.objects.all()
        allowed_methods = ('get')

    def dehydrate_progress(self, bundle):
        return bundle.obj.count_progress_this_week
