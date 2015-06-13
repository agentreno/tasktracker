from django.conf.urls import url, include
from main import views
from tastypie.api import Api
from main.api.resources import TaskResource

v1_api = Api(api_name='v1')
v1_api.register(TaskResource())

urlpatterns = [
   url(r'^$', views.index),
   url(r'^addTask$', views.addTask),
   url(r'^deleteTask', views.deleteTask),
   url(r'^api/', include(v1_api.urls)),
   url(r'^incProgress', views.incProgress),
   url(r'^resetProgress', views.resetProgress),
   url(r'^semantic$', views.semantic_index),
   url(r'^partials/([a-zA-Z]+).html$', views.servePartial)
]
